import { Outlet, useNavigate, useLocation } from "react-router"
import { useEffect, useRef } from "react"
import { ElectricArcCursor } from "../imports/pasted_text/electric-arc-cursor"

export default function Root() {
  const cursorDot  = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)
  const mouseGlow  = useRef<HTMLDivElement>(null)
  const navigate   = useNavigate()
  const location   = useLocation()

  const isHome = location.pathname === "/"

  useEffect(() => {
    let trailX = 0, trailY = 0, curX = 0, curY = 0, raf = 0

    const onMove = (e: MouseEvent) => {
      curX = e.clientX
      curY = e.clientY
      if (cursorDot.current) {
        cursorDot.current.style.left = `${curX}px`
        cursorDot.current.style.top  = `${curY}px`
      }
      if (mouseGlow.current) {
        mouseGlow.current.style.left = `${curX}px`
        mouseGlow.current.style.top  = `${curY}px`
      }
    }
    const animate = () => {
      trailX += (curX - trailX) * 0.10
      trailY += (curY - trailY) * 0.10
      if (cursorRing.current) {
        cursorRing.current.style.left = `${trailX}px`
        cursorRing.current.style.top  = `${trailY}px`
      }
      raf = requestAnimationFrame(animate)
    }
    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(animate)
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf) }
  }, [])

  const scrollTo = (id: string) => {
    if (!isHome) {
      navigate("/")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="portfolio-root">
      <ElectricArcCursor
        snapDistance={140}
        arcColor="#ffaaaa"
        glowColor="#A40000"
        branching={2.2}
      />
      <div ref={mouseGlow}  className="mouse-glow" />
      <div ref={cursorDot}  className="cursor-dot" />
      <div ref={cursorRing} className="cursor-ring" />

      <nav className="nav">
        <div className="container nav-inner">
          <button className="nav-logo" data-arc-target onClick={() => navigate("/")}>EB</button>
          <div className="nav-links">
            <button className="nav-link" data-arc-target onClick={() => scrollTo("a-propos")}>À propos</button>
            <button className="nav-link" data-arc-target onClick={() => scrollTo("projets")}>Projets</button>
            <button className="nav-link" data-arc-target onClick={() => scrollTo("contact")}>Contact</button>
            <a href="#" className="btn-nav" data-arc-target>CV</a>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}
