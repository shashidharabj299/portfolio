import React, { useState } from "react";

const experiences = [
  {
    role: "Java Full Stack Developer",
    company: "Accenture (via Unified Points Tech Pvt. Ltd.)",
    duration: "Oct 2022 – Present",
    location: "Bangalore, India",
    type: "Full Time",
    bullets: [
      "Architected and delivered Spring Boot microservices processing 500+ daily business-critical transactions with 99.9% uptime across insurance and banking domains.",
      "Reduced API response latency by 25–30% through backend service refactoring and targeted SQL query optimization.",
      "Built 10+ reusable React.js components and real-time dashboards, cutting frontend development time and improving cross-team UI consistency.",
      "Led the migration of 5+ legacy monolithic modules into independently deployable microservices, improving scalability and reducing deployment risk.",
      "Resolved 100+ L2/L3 production incidents via systematic root cause analysis and hotfixes, maintaining 100% SLA compliance.",
      "Implemented JWT-based authentication and Spring Security configurations to enforce role-based access control across microservices.",
      "Designed and documented RESTful APIs using Swagger/OpenAPI standards, reducing integration time for new developers.",
      "Identified and resolved N+1 query issues and applied targeted database indexing strategies, contributing to a 20–30% improvement in data retrieval performance.",
      "Implemented structured logging and application monitoring across services, enabling proactive issue detection and reducing MTTR.",
    ],
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "30%", label: "Latency Reduced" },
  { value: "100+", label: "Incidents Resolved" },
  { value: "100%", label: "SLA Compliance" },
];

function Experience() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="experience" style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0f9ff 100%)",
      padding: "96px 0",
    }}>
      <div className="container">

        <h2 className="section-title">Work <span>Experience</span></h2>
        <p className="section-subtitle">
          My professional journey and key achievements
        </p>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          marginBottom: "48px",
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <p style={{
                fontSize: "32px", fontWeight: 800,
                color: "#2563eb", margin: 0, lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontSize: "12px", color: "#94a3b8",
                margin: "6px 0 0", fontWeight: 500,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "18px", top: "0",
            width: "2px", height: "100%",
            background: "linear-gradient(to bottom, #2563eb, #bfdbfe)",
          }} />

          {experiences.map((exp, index) => (
            <div key={index} style={{
              paddingLeft: "56px", position: "relative", marginBottom: "32px",
            }}>

              {/* Dot */}
              <div style={{
                position: "absolute", left: "10px", top: "24px",
                width: "18px", height: "18px", borderRadius: "50%",
                background: "#2563eb", border: "3px solid #fff",
                boxShadow: "0 0 0 3px #bfdbfe",
              }} />

              {/* Card */}
              <div style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>

                {/* Header */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", flexWrap: "wrap", gap: "12px",
                  marginBottom: "20px",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{
                        padding: "3px 10px", borderRadius: "20px",
                        background: "#eff6ff", color: "#2563eb",
                        fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px",
                        border: "1px solid #bfdbfe",
                      }}>
                        {exp.type}
                      </span>
                      <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                        📅 {exp.duration}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: "22px", fontWeight: 800,
                      color: "#0f172a", marginBottom: "4px",
                      letterSpacing: "-0.3px",
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#2563eb", fontWeight: 600, marginBottom: "4px" }}>
                      {exp.company}
                    </p>
                    <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                      📍 {exp.location}
                    </p>
                  </div>

                  <div style={{
                    background: "#eff6ff", border: "1px solid #bfdbfe",
                    borderRadius: "10px", padding: "12px 16px", textAlign: "center",
                  }}>
                    <p style={{ fontSize: "22px", fontWeight: 800, color: "#2563eb", margin: 0 }}>3.6+</p>
                    <p style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 0", fontWeight: 500 }}>Years</p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #f1f5f9", marginBottom: "20px" }} />

                {/* Bullets */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(showAll ? exp.bullets : exp.bullets.slice(0, 5)).map((bullet, i) => (
                    <div key={i} style={{
                      display: "flex", gap: "12px",
                      padding: "12px 14px",
                      background: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #f1f5f9",
                    }}>
                      <span style={{ color: "#2563eb", flexShrink: 0, fontWeight: 700 }}>▹</span>
                      <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {exp.bullets.length > 5 && (
                  <button onClick={() => setShowAll(!showAll)}
                    style={{
                      marginTop: "16px",
                      background: "none", border: "1px solid #e2e8f0",
                      color: "#2563eb", fontSize: "13px", fontWeight: 600,
                      padding: "8px 20px", borderRadius: "8px",
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.target.style.background = "#eff6ff"}
                    onMouseLeave={e => e.target.style.background = "none"}>
                    {showAll ? "Show Less ▲" : `Show ${exp.bullets.length - 5} More ▼`}
                  </button>
                )}

              </div>
            </div>
          ))}

          {/* Education node */}
          <div style={{ paddingLeft: "56px", position: "relative" }}>
            <div style={{
              position: "absolute", left: "10px", top: "24px",
              width: "18px", height: "18px", borderRadius: "50%",
              background: "#94a3b8", border: "3px solid #fff",
              boxShadow: "0 0 0 3px #e2e8f0",
            }} />

            <div style={{
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: "16px", padding: "28px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, color: "#94a3b8",
                letterSpacing: "1px", display: "block", marginBottom: "10px",
              }}>
                EDUCATION
              </span>
              <h3 style={{
                fontSize: "18px", fontWeight: 700, color: "#0f172a", marginBottom: "4px",
              }}>
                B.E. — Electronics & Communication Engineering
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>
                Kalpataru Institute of Technology, Tiptur
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <span style={{
                  padding: "4px 12px", borderRadius: "20px",
                  background: "#f1f5f9", color: "#64748b",
                  fontSize: "12px", fontWeight: 500,
                }}>
                  📅 2022
                </span>
                <span style={{
                  padding: "4px 12px", borderRadius: "20px",
                  background: "#eff6ff", color: "#2563eb",
                  fontSize: "12px", fontWeight: 600,
                  border: "1px solid #bfdbfe",
                }}>
                  CGPA: 7.5 / 10
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;