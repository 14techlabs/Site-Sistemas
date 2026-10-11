import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Truck } from "lucide-react";
import { site } from "../../config/site";
import { systems } from "../../config/systems";

const systemIcons: Record<string, string> = {
  gardian: "./systems/GARDIAN/icon_gardian.png",
  suapre: "./systems/SUAPRE/icon_suapre.png",
  sigac: "./systems/SIGAC/icon_sigac.png",
};

type HeroProps = {
  onContact: () => void;
  onSystems: () => void;
};

export function Hero({ onContact, onSystems }: HeroProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const clearTimer = useRef<number | null>(null);

  const activeSystem = systems.find((s) => s.id === activeId) ?? null;

  const handleEnter = (id: string) => {
    if (clearTimer.current !== null) {
      window.clearTimeout(clearTimer.current);
      clearTimer.current = null;
    }
    setActiveId(id);
  };

  const handleLeave = () => {
    if (clearTimer.current !== null) {
      window.clearTimeout(clearTimer.current);
    }
    clearTimer.current = window.setTimeout(() => {
      setActiveId(null);
      clearTimer.current = null;
    }, 180);
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy" data-reveal>
          <span className="hero-kicker">
            <Sparkles size={15} /> Tecnologia com propósito público
          </span>
          <h1>
            Soluções digitais para{" "}
            <span>gestão pública conectada ao futuro</span>
          </h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onContact}>
              Entre em contato <ArrowRight size={18} />
            </button>
            <button className="button button-ghost" onClick={onSystems}>
              Conheça nossas soluções <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div
            className={`ecosystem${activeSystem ? " is-paused" : ""}`}
            aria-label="Ecossistema de soluções 14Tech"
          >
            <div className="ecosystem-orbit" aria-hidden="true" />
            <div className="ecosystem-center">
              <img src="./brand/LOGO-14-TECH-BRANCA.png" alt="14Tech" />
              <span>Ecossistema digital</span>
            </div>

            <div className="ecosystem-path">
              {systems.map((system) => (
                <a
                  className={`ecosystem-node ecosystem-node-${system.id}`}
                  href={system.href}
                  key={system.id}
                  aria-label={`Conheça ${system.name}`}
                  onMouseEnter={() => handleEnter(system.id)}
                  onMouseLeave={handleLeave}
                  onFocus={() => handleEnter(system.id)}
                  onBlur={handleLeave}
                >
                  <span className="ecosystem-node-icon">
                    {systemIcons[system.id] ? (
                      <img src={systemIcons[system.id]} alt="" loading="lazy" />
                    ) : (
                      <Truck size={29} strokeWidth={1.8} aria-hidden="true" />
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="ecosystem-footer">
            <p
              className={`ecosystem-caption${
                activeSystem ? " is-hidden" : ""
              }`}
            >
              Quatro soluções, um ecossistema em evolução.
            </p>

            <div
              className={`ecosystem-detail${activeSystem ? " is-open" : ""}`}
              data-system={activeSystem?.id}
              aria-live="polite"
            >
              {activeSystem && (
                <a
                  className="ecosystem-detail-inner"
                  href={activeSystem.href}
                  onMouseEnter={() => handleEnter(activeSystem.id)}
                  onMouseLeave={handleLeave}
                  onFocus={() => handleEnter(activeSystem.id)}
                  onBlur={handleLeave}
                >
                  <img
                    className="ecosystem-detail-logo"
                    src={activeSystem.logo}
                    alt={`Logo ${activeSystem.name}`}
                  />
                  <span className="ecosystem-detail-body">
                    <span className="ecosystem-detail-description">
                      {activeSystem.eyebrow}
                    </span>
                    <span className="ecosystem-detail-link">
                      Conhecer sistema <ArrowRight size={13} />
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        className="scroll-cue"
        onClick={() =>
          document
            .getElementById("servicos")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Rolar para serviços"
      >
        <span />
        <span />
        <span />
      </button>
    </section>
  );
}