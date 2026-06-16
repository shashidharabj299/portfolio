import React, { useState } from "react";
import projects from "../projects.js";

const domainConfig = {
  Banking: {
    color: "#eff6ff", border: "#bfdbfe",
    badge: "#2563eb", icon: "🏦",
  },
  Healthcare: {
    color: "#f0fdf4", border: "#bbf7d0",
    badge: "#16a34a", icon: "🏥",
  },
  Insurance: {
    color: "#fff7ed", border: "#fed7aa",
    badge: "#ea580c", icon: "🛡️",
  },
};

function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0f9ff 100%)",
      padding: "96px 0",
    }}>
      <div className="container">

        <h2 className="section-title">Project <span>Experience</span></h2>
        <p className="section-subtitle">
          Enterprise applications built across Banking, Healthcare, and Insurance domains
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project) => {
            const config = domainConfig[project.domain];
            const isOpen = expanded === project.id;
            const isHovered = hovered === project.id;

            return (
              <div key={project.id}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#fff",
                  border: `1px solid ${isHovered || isOpen ? config.border : "#e2e8f0"}`,
                  borderRadius: "16px",
                  padding: "32px",
                  transition: "all 0.25s ease",
                  boxShadow: isHovered || isOpen ? "0 8px 32px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}>

                {/* Top row */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", flexWrap: "wrap", gap: "16px",
                }}>

                  <div style={{ flex: 1 }}>
                    {/* Domain badge + duration */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                      <span style={{
                        padding: "4px 12px", borderRadius: "20px",
                        background: config.badge, color: "#fff",
                        fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px",
                      }}>
                        {config.icon} {project.domain.toUpperCase()}
                      </span>
                      <span style={{
                        padding: "4px 12px", borderRadius: "20px",
                        background: "#f1f5f9", color: "#64748b",
                        fontSize: "11px", fontWeight: 600,
                      }}>
                        📅 {project.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: "20px", fontWeight: 800,
                      color: "#0f172a", marginBottom: "10px",
                      letterSpacing: "-0.3px",
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: "14px", color: "#64748b",
                      lineHeight: 1.7, maxWidth: "680px",
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Expand button */}
                  <button onClick={() => setExpanded(isOpen ? null : project.id)}
                    style={{
                      background: isOpen ? config.color : "#f8fafc",
                      border: `1px solid ${isOpen ? config.border : "#e2e8f0"}`,
                      color: isOpen ? config.badge : "#475569",
                      padding: "9px 18px", borderRadius: "8px",
                      fontSize: "13px", fontWeight: 600,
                      cursor: "pointer", whiteSpace: "nowrap",
                      transition: "all 0.2s",
                    }}>
                    {isOpen ? "Hide Details ▲" : "View Details ▼"}
                  </button>
                </div>

                {/* Tech Stack */}
                <div style={{
                  display: "flex", flexWrap: "wrap",
                  gap: "8px", marginTop: "20px",
                }}>
                  {project.stack.map(tech => (
                    <span key={tech} style={{
                      padding: "4px 12px", borderRadius: "6px",
                      background: config.color,
                      border: `1px solid ${config.border}`,
                      fontSize: "12px", color: "#475569", fontWeight: 500,
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded section */}
                {isOpen && (
                  <div style={{
                    marginTop: "24px",
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "24px",
                  }}>
                    <p style={{
                      fontSize: "11px", fontWeight: 700,
                      color: "#94a3b8", letterSpacing: "1px",
                      marginBottom: "16px",
                    }}>
                      KEY CONTRIBUTIONS
                    </p>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "12px",
                    }}>
                      {project.bullets.map((bullet, i) => (
                        <div key={i} style={{
                          display: "flex", gap: "12px",
                          background: config.color,
                          border: `1px solid ${config.border}`,
                          borderRadius: "8px",
                          padding: "14px 16px",
                        }}>
                          <span style={{
                            color: config.badge, flexShrink: 0,
                            fontSize: "16px", marginTop: "1px",
                          }}>▹</span>
                          <p style={{
                            fontSize: "13px", color: "#475569",
                            lineHeight: 1.6, margin: 0,
                          }}>
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;