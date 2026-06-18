import React, { useState } from "react";

const skillsData = [
  {
    category: "Languages",
    icon: "💻",
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
    skills: ["Java", "SQL", "JavaScript (ES6+)"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "Core Java"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#9333ea",
    skills: ["React.js", "Redux", "HTML5", "CSS3"],
  },
  {
    category: "Microservices & APIs",
    icon: "🔗",
    color: "#fff7ed",
    border: "#fed7aa",
    accent: "#ea580c",
    skills: ["Microservices", "RESTful APIs", "API Design", "Swagger / OpenAPI", "JWT Auth"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#fff1f2",
    border: "#fecdd3",
    accent: "#e11d48",
    skills: ["MySQL", "Oracle DB", "MongoDB"],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#f0fdfa",
    border: "#99f6e4",
    accent: "#0d9488",
    skills: ["Git", "GitHub", "Postman", "SonarQube", "JIRA"],
  },
  {
    category: "Concepts",
    icon: "🧠",
    color: "#fefce8",
    border: "#fde68a",
    accent: "#d97706",
    skills: ["OOP", "Collections", "Multithreading", "Design Patterns", "Data Structures", "Agile / Scrum"],
  },
];

function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0f9ff 100%)", padding: "96px 0" }}>
      <div className="container">

        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className="section-subtitle">
          Technologies and tools I use to build scalable enterprise applications
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {skillsData.map((group) => (
            <div key={group.category}
              onMouseEnter={() => setHovered(group.category)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === group.category ? group.color : "#fff",
                border: `1px solid ${hovered === group.category ? group.border : "#e2e8f0"}`,
                borderRadius: "12px",
                padding: "24px",
                transition: "all 0.25s ease",
                transform: hovered === group.category ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === group.category ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
                cursor: "default",
              }}>

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "8px",
                  background: group.color, border: `1px solid ${group.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}>
                  {group.icon}
                </div>
                <h3 style={{
                  fontSize: "14px", fontWeight: 700,
                  color: "#0f172a", letterSpacing: "0.2px",
                }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{
                    padding: "5px 12px",
                    borderRadius: "6px",
                    background: "#f8fafc",
                    border: "1px solid #2a323c",
                    fontSize: "13px",
                    color: "#475569",
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={e => {
                      e.target.style.background = group.color;
                      e.target.style.borderColor = group.border;
                      e.target.style.color = group.accent;
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = "#f8fafc";
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.color = "#475569";
                    }}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom certification strip */}
        <div style={{
          marginTop: "56px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "12px",
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "28px" }}>🏆</span>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Java Full Stack Development
              </p>
              <p style={{ fontSize: "13px", color: "#64748b", margin: "2px 0 0" }}>
                Certified by JSpiders, Bangalore · 2022
              </p>
            </div>
          </div>
          <span style={{
            padding: "6px 16px", borderRadius: "20px",
            background: "#2563eb", color: "#fff",
            fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px",
          }}>
            CERTIFIED
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;