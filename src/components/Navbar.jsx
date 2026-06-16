import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: -0, width: "100%", zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "#e2e8f0" : "rgba(226,232,240,0.6)"}`,
        transition: "all 0.3s ease",
        padding: "0",
      }}>
        <div className="container" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", height: "65px",
        }}>

          {/* Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "10px",
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px", letterSpacing: "0.5px" }}>SBJ</span>
            </div>
            <div>
              <p style={{ fontSize: "16px", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.3px" }}>
                Shashidhara BJ
              </p>
              <p style={{ fontSize: "11px", color: "#2563eb", margin: 0, fontWeight: 600, letterSpacing: "0.3px" }}>
                Java Full Stack Developer
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <ul style={{ display: "flex", gap: "2px", listStyle: "none" }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link}>
                <button onClick={() => scrollTo(link)}
                  style={{
                    background: "none", border: "none",
                    color: active === link ? "#2563eb" : "#475569",
                    fontSize: "14px", fontWeight: active === link ? 700 : 500,
                    cursor: "pointer", padding: "8px 18px",
                    borderRadius: "8px", transition: "all 0.2s",
                    position: "relative",
                  }}>
                  {link}
                  {active === link && (
                    <span style={{
                      position: "absolute", bottom: "2px", left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px", height: "2px",
                      background: "#2563eb", borderRadius: "2px",
                      display: "block",
                    }} />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-nav">
            {/* Open to work badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: "20px", padding: "6px 12px",
            }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#22c55e", display: "inline-block",
                boxShadow: "0 0 6px #22c55e",
                animation: "pulse 2s infinite",
              }} />
              <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: 600 }}>
                Open to Work
              </span>
            </div>

            {/* Hire Me button */}
            <button onClick={() => scrollTo("Contact")}
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                border: "none", color: "#fff",
                fontSize: "14px", fontWeight: 700,
                padding: "10px 22px", borderRadius: "8px",
                cursor: "pointer", transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
                letterSpacing: "0.2px",
              }}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 6px 16px rgba(37,99,235,0.45)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.35)";
              }}>
              Hire Me ✦
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              display: "none",
              background: "none", border: "1px solid #e2e8f0",
              color: "#475569", fontSize: "20px",
              cursor: "pointer", padding: "6px 10px",
              borderRadius: "8px",
            }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: "#fff", borderTop: "1px solid #e2e8f0",
            padding: "16px 24px 24px",
            display: "flex", flexDirection: "column", gap: "4px",
          }}>
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{
                  background: active === link ? "#eff6ff" : "none",
                  border: "none", color: active === link ? "#2563eb" : "#475569",
                  fontSize: "15px", fontWeight: active === link ? 700 : 500,
                  cursor: "pointer", textAlign: "left",
                  padding: "12px 16px", borderRadius: "8px",
                }}>
                {link}
              </button>
            ))}
            <button onClick={() => scrollTo("Contact")}
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                border: "none", color: "#fff",
                fontSize: "15px", fontWeight: 700,
                padding: "13px", borderRadius: "8px",
                cursor: "pointer", marginTop: "8px",
                boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
              }}>
              Hire Me ✦
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;