import React, { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "shashidharabj299@gmail.com",
      action: () => copyToClipboard("shashidharabj299@gmail.com", "Email"),
      link: null,
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8762404801",
      action: () => copyToClipboard("+918762404801", "Phone"),
      link: null,
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bangalore, India",
      action: null,
      link: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      action: null,
      link: "https://linkedin.com",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "View my code",
      action: null,
      link: "https://github.com",
    },
  ];

  return (
    <section id="contact" style={{ background: "#0a0a0a", padding: "80px 0" }}>
      <div className="container">

        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* Intro */}
          <p style={{
            fontSize: "16px", color: "#a0a0a0",
            lineHeight: 1.8, textAlign: "center", marginBottom: "48px",
          }}>
            I'm open to new opportunities, collaborations, or just a tech chat.
            Feel free to reach out — I'll get back to you as soon as possible.
          </p>

          {/* Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {contactItems.map((item) => (
              <div key={item.label}
                onClick={item.action || (item.link ? () => window.open(item.link, "_blank") : null)}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  cursor: item.action || item.link ? "pointer" : "default",
                  transition: "border-color 0.3s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  if (item.action || item.link) {
                    e.currentTarget.style.borderColor = "#4f9cf9";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#1e1e1e";
                  e.currentTarget.style.transform = "translateX(0)";
                }}>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "24px" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "12px", color: "#666", marginBottom: "2px", letterSpacing: "1px" }}>
                      {item.label.toUpperCase()}
                    </p>
                    <p style={{ fontSize: "15px", color: "#e0e0e0", fontWeight: 500 }}>
                      {item.value}
                    </p>
                  </div>
                </div>

                {item.action && (
                  <span style={{ fontSize: "13px", color: copied === item.label ? "#4fca7a" : "#4f9cf9" }}>
                    {copied === item.label ? "✓ Copied!" : "Copy"}
                  </span>
                )}
                {item.link && (
                  <span style={{ fontSize: "13px", color: "#4f9cf9" }}>↗</span>
                )}
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#0d2d1a", border: "1px solid #1a6e3a",
              borderRadius: "20px", padding: "10px 20px",
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#4fca7a",
                boxShadow: "0 0 8px #4fca7a",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              <span style={{ fontSize: "14px", color: "#4fca7a", fontWeight: 500 }}>
                Available for new opportunities
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "80px", paddingTop: "24px",
        borderTop: "1px solid #1e1e1e", textAlign: "center",
      }}>
        <p style={{ fontSize: "13px", color: "#444" }}>
          Designed & Built by <span style={{ color: "#4f9cf9" }}>Shashidhara BJ</span> · Java Full Stack Developer
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

export default Contact;