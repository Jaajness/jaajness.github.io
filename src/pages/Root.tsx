import { Outlet, useNavigate, useLocation } from "react-router"
import { useEffect, useRef, useState } from "react"
import { ElectricArcCursor } from "../imports/pasted_text/electric-arc-cursor"

export default function Root() {
  const cursorDot  = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)
  const mouseGlow  = useRef<HTMLDivElement>(null)
  const navigate   = useNavigate()
  const location   = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = location.pathname === "/"

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

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
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <button className="nav-link" data-arc-target onClick={() => scrollTo("a-propos")}>À propos</button>
            <button className="nav-link" data-arc-target onClick={() => scrollTo("projets")}>Projets</button>
            <button className="nav-link nav-ai-link" data-arc-target onClick={() => scrollTo("utilisation-ia")}>Utilisation de l’IA</button>
            <button className="nav-link" data-arc-target onClick={() => scrollTo("contact")}>Contact</button>
            <a href="#" className="btn-nav" data-arc-target>CV</a>
          </div>
          <button
            className="nav-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img src="/assets/406c7.svg" alt="" />
          </button>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}
