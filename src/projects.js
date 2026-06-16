const projects = [
  {
    id: 1,
    title: "Retail Banking Transaction Portal",
    duration: "Feb 2025 – Present",
    domain: "Banking",
    stack: ["Java", "Spring Boot", "Microservices", "React.js", "MySQL"],
    description:
      "Enterprise banking platform supporting account management, loan processing, and secure fund transfers (NEFT, RTGS, IMPS) for 1,000+ users.",
    bullets: [
      "Designed and built 5+ microservices covering account management, loan origination, and transaction processing handling 500+ daily transactions.",
      "Implemented secure, end-to-end transaction workflows for NEFT, RTGS, and IMPS with full validation and error handling.",
      "Delivered real-time React.js dashboards for account statements, transaction history, and loan tracking.",
      "Built audit logging and compliance-ready data processing mechanisms aligned with regulatory requirements.",
    ],
  },
  {
    id: 2,
    title: "Health Management System (HMS)",
    duration: "Dec 2023 – Jan 2025",
    domain: "Healthcare",
    stack: ["Java", "Spring Boot", "Hibernate", "React.js", "Oracle DB", "Spring Security"],
    description:
      "Secure, role-based hospital platform managing patient admissions, appointments, medical records, and administrative workflows.",
    bullets: [
      "Developed high-throughput backend APIs for patient registrations and appointment scheduling at scale.",
      "Implemented role-based access control (RBAC) with Spring Security across 5 user roles — Admin, Doctor, Nurse, Receptionist, and Patient.",
      "Optimized Hibernate/JPA queries and database indexing, achieving a 20% improvement in analytics report generation time.",
      "Built responsive React.js interfaces integrated with REST APIs, streamlining clinical and administrative workflows.",
      "Designed a centralized validation and exception-handling framework, reducing runtime errors and support tickets.",
    ],
  },
  {
    id: 3,
    title: "Insurance Purchase & Incident Monitoring",
    duration: "Oct 2022 – Nov 2023",
    domain: "Insurance",
    stack: ["Java", "Spring Boot", "Microservices", "React.js", "MySQL"],
    description:
      "Multi-tiered commercial insurance platform for policy generation, procurement, and automated incident reporting.",
    bullets: [
      "Built scalable Spring Boot microservices for insurance quotation engines and policy purchase workflows from the ground up.",
      "Improved overall application performance by 25–30% through backend refactoring and SQL query optimization.",
      "Integrated React.js frontend with backend REST APIs, delivering a seamless, responsive end-user experience.",
      "Implemented centralized exception handling and structured logging, cutting bug diagnosis time by 35%.",
    ],
  },
];

export default projects;