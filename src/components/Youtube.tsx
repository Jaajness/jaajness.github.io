import { useEffect, useRef, useState } from "react"

type YoutubePlayerInstance = {
  destroy: () => void
  pauseVideo: () => void
}

type YoutubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      playerVars: Record<string, number>
      events: {
        onReady: () => void
        onStateChange: (event: { data: number }) => void
      }
    },
  ) => YoutubePlayerInstance
  PlayerState: {
    PLAYING: number
    ENDED: number
  }
}

declare global {
  interface Window {
    YT?: YoutubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

export interface YoutubeProps {
  videoId: string
  title: string
  className?: string
  poster?: string
  controls?: boolean
  autoplay?: boolean
  start?: number
}

let apiPromise: Promise<YoutubeApi> | null = null
const players = new Set<YoutubePlayerInstance>()

function loadYoutubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (apiPromise) return apiPromise

  apiPromise = new Promise<YoutubeApi>((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.()
      if (window.YT) resolve(window.YT)
    }

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script")
      script.src = "https://www.youtube.com/iframe_api"
      script.async = true
      document.head.appendChild(script)
    }
  })

  return apiPromise
}

export default function Youtube({
  videoId,
  title,
  className = "",
  poster,
  controls = true,
  autoplay = false,
  start = 0,
}: YoutubeProps) {
  const wrapper = useRef<HTMLDivElement>(null)
  const playerTarget = useRef<HTMLDivElement>(null)
  const [activated, setActivated] = useState(!poster)

  useEffect(() => {
    if (!videoId || !activated || !playerTarget.current) return

    let disposed = false
    let observer: IntersectionObserver | null = null
    let player: YoutubePlayerInstance | null = null

    loadYoutubeApi().then((YT) => {
      if (disposed || !playerTarget.current) return

      player = new YT.Player(playerTarget.current, {
        videoId,
        playerVars: {
          autoplay: autoplay || poster ? 1 : 0,
          controls: controls ? 1 : 0,
          enablejsapi: 1,
          playsinline: 1,
          rel: 0,
          start: Math.max(0, start),
        },
        events: {
          onReady: () => {
            if (!player || disposed) return
            players.add(player)
            observer = new IntersectionObserver(([entry]) => {
              if (!entry.isIntersecting) player?.pauseVideo()
            })
            if (wrapper.current) observer.observe(wrapper.current)
          },
          onStateChange: (event) => {
            if (!player) return
            if (event.data === YT.PlayerState.PLAYING) {
              players.forEach((otherPlayer) => {
                if (otherPlayer !== player) otherPlayer.pauseVideo()
              })
            }
            if (event.data === YT.PlayerState.ENDED) player.pauseVideo()
          },
        },
      })
    })

    return () => {
      disposed = true
      observer?.disconnect()
      if (player) {
        players.delete(player)
        player.destroy()
      }
    }
  }, [activated, autoplay, controls, poster, start, videoId])

  return (
    <div
      ref={wrapper}
      className={`youtube-player media-frame ${className}`}
      data-arc-target
      data-video-id={videoId || undefined}
    >
      {!videoId && <div className="youtube-player-empty" aria-label={`${title} — identifiant YouTube à ajouter`} />}
      {videoId && !activated && poster && (
        <button
          className="youtube-player-poster"
          type="button"
          aria-label={`Lire ${title}`}
          onClick={() => setActivated(true)}
        >
          <img src={poster} alt="" />
          <span className="youtube-player-play" aria-hidden="true" />
        </button>
      )}
      {videoId && activated && <div ref={playerTarget} className="youtube-player-target" title={title} />}
    </div>
  )
}
