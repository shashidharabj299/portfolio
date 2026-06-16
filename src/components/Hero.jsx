import React, { useEffect, useState } from "react";

const titles = [
  "Java Full Stack Developer",
  "React.js Developer",
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = titles[titleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "3.6+", label: "Years Experience" },
    { value: "500+", label: "Daily Transactions" },
    { value: "99.9%", label: "System Uptime" },
    { value: "100+", label: "Incidents Resolved" },
  ];

  return (
    <section id="about" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0f9ff 100%)",
      display: "flex", alignItems: "center",
      paddingTop: "68px", position: "relative", overflow: "hidden",
    }}>

      {/* Background decoration */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-50px", left: "-50px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>

          {/* Left content */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#eff6ff", border: "1px solid #bfdbfe",
              borderRadius: "20px", padding: "6px 16px", marginBottom: "28px",
            }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#22c55e", display: "inline-block",
              }} />
              <span style={{ fontSize: "13px", color: "#2563eb", fontWeight: 500 }}>
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 800, color: "#0f172a",
              lineHeight: 1.1, marginBottom: "20px",
              letterSpacing: "-1px",
            }}>
              Shashidhara<br />
              <span style={{ color: "#2563eb" }}>BJ</span>
            </h1>

            {/* Typing title */}
            <div style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 600, color: "#475569",
              marginBottom: "24px", minHeight: "40px",
              display: "flex", alignItems: "center", gap: "4px",
            }}>
              <span>{displayed}</span>
              <span style={{
                width: "2px", height: "28px",
                background: "#2563eb", display: "inline-block",
                animation: "blink 1s infinite",
              }} />
            </div>

            {/* Summary */}
            <p style={{
              fontSize: "16px", color: "#64748b",
              lineHeight: 1.8, marginBottom: "12px", maxWidth: "580px",
            }}>
              3.6+ years building enterprise-grade applications across
              <strong style={{ color: "#0f172a" }}> Banking</strong>,
              <strong style={{ color: "#0f172a" }}> Insurance</strong>, and
              <strong style={{ color: "#0f172a" }}> Healthcare</strong> domains
              at Accenture.
            </p>

            <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "36px" }}>
              📍 Bangalore, India &nbsp;·&nbsp; Accenture via Unified Points Tech Pvt. Ltd.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
              <button onClick={() => scrollTo("projects")}
                style={{
                  padding: "13px 28px", borderRadius: "8px",
                  background: "#2563eb", border: "none",
                  color: "#fff", fontSize: "15px", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                }}
                onMouseEnter={e => e.target.style.background = "#1d4ed8"}
                onMouseLeave={e => e.target.style.background = "#2563eb"}>
                View Projects →
              </button>

              <button onClick={() => scrollTo("contact")}
                style={{
                  padding: "13px 28px", borderRadius: "8px",
                  background: "#fff", border: "1px solid #e2e8f0",
                  color: "#0f172a", fontSize: "15px", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => e.target.style.borderColor = "#2563eb"}
                onMouseLeave={e => e.target.style.borderColor = "#e2e8f0"}>
                Contact Me
              </button>
            </div>

            {/* Tech stack row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>TECH STACK</span>
              <div style={{ width: "1px", height: "16px", background: "#e2e8f0" }} />
              {["Java", "Spring Boot", "React.js", "Microservices", "MySQL"].map(tech => (
                <span key={tech} style={{
                  padding: "4px 10px", borderRadius: "6px",
                  background: "#fff", border: "1px solid #e2e8f0",
                  fontSize: "12px", color: "#475569", fontWeight: 500,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stats card */}
          <div className="hero-stats" style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "32px 28px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            minWidth: "220px",
          }}>
            <p style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, letterSpacing: "1px", marginBottom: "24px" }}>
              KEY METRICS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontSize: "32px", fontWeight: 800, color: "#2563eb", margin: 0, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0", fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #f1f5f9", marginTop: "24px", paddingTop: "20px" }}>
              <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "8px" }}>DOMAINS</p>
              {["Banking", "Insurance", "Healthcare"].map(d => (
                <div key={d} style={{
                  display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px",
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-stats { display: none; }
        }
      `}</style>
    </section>
  );
}

export default Hero;