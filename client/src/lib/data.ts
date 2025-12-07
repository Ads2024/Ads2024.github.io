
export const RESUME_DATA = {
  name: "Adam M",
  title: "Data Engineer",
  summary: "Data Engineer with 4+ years’ experience building scalable data platforms, designing complex ingestion pipelines, and enforcing engineering-grade governance across hybrid Azure environments. I specialize in Azure-centric data engineering including Git-backed development, CI/CD automation, OneLake architecture, SQL object versioning, and metadata-driven workflow design.",
  socials: {
    github: "https://ads2024.github.io/", // Using portfolio URL as placeholder
    linkedin: "#",
    email: "#"
  },
  skills: {
    dataModeling: ["Dimensional Modeling", "Semantic Layer Design", "Star/Snowflake Modeling", "Time-Series Architecture", "Forecasting", "A/B Testing"],
    languagesTools: ["Python (pandas, numpy, pyarrow, pyspark)", "SQL", "PowerShell", "Java", "JavaScript", "Git", "VS Code", "CI/CD"],
    dataEngineering: ["ETL/ELT", "Metadata-Driven Workflows", "SQL Object Versioning", "Schema Tracking", "Automated Lineage", "PDF Processing", "DataOps"],
    platforms: ["Microsoft Fabric", "Power BI", "Streamlit", "OneLake", "Dataflow Gen2"],
    cloud: ["Azure DevOps", "Azure Data Factory", "Azure SQL", "Azure Storage", "Docker", "Hybrid On-Prem + Cloud"]
  },
  experience: [
    {
      role: "Analytics Data Engineer (Microsoft Fabric)",
      company: "HammondCare",
      period: "Aug 2025 – Present",
      highlights: [
        "Led enterprise-wide Git integration across Power BI and Fabric workspaces.",
        "Designed CI/CD foundations: automated validation, environment promotion, and UAT hygiene.",
        "Built dual-repository backup architecture (Azure DevOps + GitHub) for daily PBIP backups.",
        "Engineered automated extraction of 40,000+ SQL objects delivering 10+ years of schema history.",
        "Delivered OneLake migration pipelines for structured/semi-structured datasets.",
        "Built AI-ready metadata and prototypes (Copilot, GPT-Streamlit) for failure analysis."
      ]
    },
    {
      role: "Data Analyst",
      company: "Downer EDI",
      period: "Jan 2024 – Present",
      highlights: [
        "Developed CI/CD-enabled BI dashboards (Power BI, Streamlit, SQL, Python).",
        "Slashed manual reporting by 50% and enabled real-time visibility.",
        "Built end-to-end anomaly detection workflows for ticketing metrics.",
        "Led Git-based version control implementation for BI assets."
      ]
    },
    {
      role: "Supply Chain Data Analyst",
      company: "Snack Brands Australia",
      period: "Jul 2022 – Dec 2023",
      highlights: [
        "Transformed SCADA sensor streams into dimensional models for real-time KPI tracking.",
        "Migrated legacy Access planning systems to Power BI (80% increase in agility).",
        "Developed Azure Data Factory pipelines and Snowflake schemas.",
        "Applied A/B testing/linear optimization to reduce spend by 25%."
      ]
    },
    {
      role: "Operations Analyst",
      company: "Rode Microphones",
      period: "Aug 2021 – Jul 2022",
      highlights: [
        "Modeled production throughput and machine downtime for assembly operations.",
        "Identified bottlenecks via statistical analysis, increasing throughput by 25%.",
        "Conducted A/B testing on packaging processes (70% efficiency gain)."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Science (Data Science & AI)",
      institution: "University of Sydney",
      year: "Current"
    },
    {
      degree: "Graduate Certificate in Computer Science",
      institution: "Monash University",
      year: "2024",
      note: "Grade: HD"
    },
    {
      degree: "Master of Commerce (Supply Chain & Optimization)",
      institution: "University of Sydney",
      year: "2021"
    },
    {
      degree: "B.Sc. (Hons) Biological Sciences",
      institution: "University of Leicester",
      year: "2017",
      note: "First Class"
    }
  ]
};
