import { ArrowLeft } from "lucide-react";

const HOME_URL =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1")
    ? "http://localhost:5173"
    : "https://14tech.com.br";

export function BackTo14tech() {
  return (
    <a
      href={HOME_URL}
      aria-label="Voltar para o site 14tech"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 20px",
        textDecoration: "none",
        background: "rgba(0,0,0,0.8)",
        borderRadius: "999px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        backdropFilter: "blur(8px)",
        transition: "background 150ms ease, transform 150ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.95)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.8)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <ArrowLeft size={16} color="#fff" />
      <img
        src="/brand/LOGO-14-TECH-BRANCA-HORIZONTAL.png"
        alt="14tech"
        style={{ height: "32px", width: "auto", display: "block" }}
      />
    </a>
  );
}