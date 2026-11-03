import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { DEMO_WA_URL } from "@/lib/erp-contact";
import "./Hero.css";

const MEDIA = "/media/erp/";

export default function Hero() {
  const entryKey = useRouterState({ select: ({ location }) => location.state.__TSR_key ?? location.href });
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;
    let inView = false;
    let finished = false;
    let leftHero = false;
    let wasVisible = false;
    let disposed = false;
    // A router visit is a fresh playback session, even if the browser reuses
    // an already-loaded/ended media element. Autoplay alone does not rewind it.
    video.pause();
    video.defaultMuted = true;
    video.muted = true;
    video.loop = false;
    video.currentTime = 0;
    setFailed(false);
    if (!window.location.hash || window.location.hash === "#producto") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (video.readyState >= 2) setReady(true);
    const play = () => {
      if (disposed || document.hidden || !inView) video.pause();
      else if (!finished) void video.play().catch(() => { /* The poster remains if autoplay is blocked. */ });
    };
    const holdFinalFrame = () => {
      finished = true;
      video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!inView && wasVisible) leftHero = true;
      else if (inView) {
        wasVisible = true;
        if (leftHero) {
          leftHero = false;
          finished = false;
          video.currentTime = 0;
        }
      }
      play();
    }, { threshold: 0.05 });
    observer.observe(stage);
    video.addEventListener("canplay", play);
    video.addEventListener("ended", holdFinalFrame);
    document.addEventListener("visibilitychange", play);
    play();
    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("canplay", play);
      video.removeEventListener("ended", holdFinalFrame);
      document.removeEventListener("visibilitychange", play);
      video.pause();
    };
  }, [entryKey]);

  return (
    <section id="producto" className="erp-hero" aria-labelledby="erp-hero-title">
      <div className="erp-hero-stage erp-hero-stage--portrait" ref={stageRef}>
        <div className="erp-hero-cinema" aria-hidden="true">
          <picture>
            <source media="(max-width: 767px)" srcSet={`${MEDIA}business-transformation-poster-mobile.webp`} />
            <img className="erp-hero-poster" src={`${MEDIA}business-transformation-poster.webp`}
              alt="" width="960" height="540" fetchPriority="high" decoding="async" />
          </picture>
          <video key="business-transformation" ref={videoRef} className={`erp-hero-film${ready && !failed ? " is-visible" : ""}`}
            autoPlay muted playsInline preload="auto" disablePictureInPicture tabIndex={-1}
            onLoadedData={() => setReady(true)} onPlaying={() => setReady(true)} onError={() => setFailed(true)}>
            <source media="(max-width: 767px)" src={`${MEDIA}business-transformation-mobile.mp4`} type="video/mp4" />
            <source src={`${MEDIA}business-transformation.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="erp-hero-copy">
          <h1 id="erp-hero-title"><span>Toda tu empresa.</span><span>Un solo sistema.</span></h1>
          <p>Ventas, inventario, logística y finanzas.<br className="erp-hero-desktop-break" />
            {" "}Conecta cada operación con NEXTELCO ERP y gestiona tu negocio desde un mismo lugar.</p>
          <a className="erp-hero-cta" href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            Solicitar una demo <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <p className="erp-hero-support">Implementación acompañada. Equipo en Lima.</p>
        </div>
      </div>
      <div className="erp-hero-bottom">
        <p>16 módulos. <span>Una operación conectada.</span></p>
        <a href="#modulos">Explorar el ecosistema <ArrowDown size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
