
export const RESUME_DATA = {
  name: "Adam M",
  avatarUrl: "/profile-pic.jpg",
  title: "Data Engineer",
  summary: "Data Engineer with 4+ years’ experience building scalable data platforms, designing complex ingestion pipelines, and enforcing engineering-grade governance across hybrid Azure environments. I specialize in Azure-centric data engineering including Git-backed development, CI/CD automation, OneLake architecture, SQL object versioning, and metadata-driven workflow design.",
  socials: {
    github: "https://ads2024.github.io/", // Using portfolio URL as placeholder
    linkedin: "https://www.linkedin.com/in/adam-m-62a5b4168",
    email: "amadri386@gmail.com"
  },
  pipelines: [
    {
      title: "PowerBI Report Pipeline Optimization",
      description: "Redesigned enterprise PowerBI paginated report generation pipeline, reducing runtime from 60 to 13-22 minutes (75% improvement) while eliminating Microsoft Fabric capacity consumption limited to interactive consumption. Replaced OneLake-based persistence architecture with in-memory processing via GitHub Actions, freeing compute resources for business-critical analytics. Implemented concurrent batch processing with intelligent retry logic and SharePoint throttle management, delivering 1200+ daily clinical report backups with 95%+ success rate and zero infrastructure cost increase, essential for Business Continuity.",
      tech: ["Microsoft Fabric", "Power BI", "GitHub Actions", "Python", "SharePoint API", "Azure AD"],
      repo: "https://github.com/Ads2024/fabric-pdf-generatior",
      mermaid: `---
config:
  look: classic
  theme: neutral
  themeVariables:
    background: '#ffffff'
    mainBkg: '#ffffff'
    primaryColor: '#ffffff'
    edgeLabelBackground: '#ffffff'
    tertiaryColor: '#f4f4f4'
---
graph TB
    subgraph "External Services"
        AAD[Azure Active Directory]
        Fabric[Microsoft Fabric<br/>SQL Endpoint]
        PowerBI[Power BI Service<br/>Report Export API]
        SharePoint[SharePoint Online<br/>Document Library]
        Graph[Microsoft Graph API<br/>Mail & Files]
    end

    subgraph "GitHub Actions CI/CD"
        Trigger[Workflow Triggers<br/>- Schedule: Daily 8AM Sydney<br/>- Manual Dispatch<br/>- Push/PR to main]
        GHRunner[GitHub Runner<br/>Ubuntu Latest]
        Secrets[GitHub Secrets<br/>Credentials & Config]
    end

    subgraph "Application Core"
        Main[main.py<br/>Orchestrator]
        Config[config.yaml<br/>Settings & Queries]
    end

    subgraph "Data Layer"
        Query[query_fabric_lakehouse.py<br/>SQL Query Execution]
        AreaData[(Area Records)]
        EmpData[(Employee Records)]
    end

    subgraph "PDF Generation Pipeline"
        PDFGen[generate_powerbi_pdfs.py<br/>- Batch Processing<br/>- Concurrent Export<br/>- Retry Logic]
        PDFCache[In-Memory PDF Cache<br/>BytesIO Streams]
    end

    subgraph "SharePoint Integration"
        Upload[upload_to_sharepoint.py<br/>- Folder Management<br/>- Batch Upload<br/>- Concurrent Transfers]
        LinkGen[generate_sharepoint_links.py<br/>- Link Generation<br/>- CSV Export<br/>- Throttle Handling]
    end

    subgraph "Notification System"
        Email[send_notification.py<br/>- HTML Email Builder<br/>- Graph API Primary<br/>- SMTP Fallback]
    end

    subgraph "Output Artifacts"
        SPFolders[SharePoint Folders<br/>- Areas/<br/>- Employees/<br/>- Logs/]
        CSVFile[Shareable Links CSV]
        LogFiles[Process Logs]
    end

    %% Workflow Flow
    Trigger -->|Initiates| GHRunner
    Secrets -->|Provides| GHRunner
    GHRunner -->|Executes| Main
    Config -->|Loads| Main

    %% Data Retrieval
    Main -->|1. Authenticate| AAD
    AAD -->|Token| Main
    Main -->|2. Query Data| Query
    Query -->|Connect| Fabric
    Fabric -->|SQL Results| Query
    Query -->|Area List| AreaData
    Query -->|Employee List| EmpData

    %% PDF Generation
    Main -->|3. Generate PDFs| PDFGen
    PDFGen -->|Auth Request| AAD
    PDFGen -->|Export Requests<br/>Concurrent/Batched| PowerBI
    PowerBI -->|PDF Streams| PDFGen
    PDFGen -->|Cache| PDFCache
    AreaData -.->|Parameters| PDFGen
    EmpData -.->|Parameters| PDFGen

    %% Upload Process
    Main -->|4. Upload Files| Upload
    PDFCache -->|PDF Streams| Upload
    Upload -->|Auth Request| AAD
    Upload -->|PUT Requests<br/>Concurrent Upload| SharePoint
    SharePoint -->|Confirmation| SPFolders

    %% Link Generation
    Main -->|5. Generate Links| LinkGen
    LinkGen -->|File Queries| SharePoint
    SharePoint -->|Create Links| LinkGen
    LinkGen -->|CSV Data| Upload
    Upload -->|Upload CSV| CSVFile
    LinkGen -->|Generate Logs| Upload
    Upload -->|Upload Logs| LogFiles

    %% Notification
    Main -->|6. Send Report| Email
    Email -->|Auth Request| AAD
    Email -->|Try Graph API| Graph
    Graph -.->|Fallback on Failure| Email
    Email -->|SMTP Fallback| Email
    SPFolders -.->|Reference in Email| Email
    AreaData -.->|Stats| Email
    EmpData -.->|Stats| Email

    %% Logging
    Main -.->|Comprehensive Logging| LogFiles

    classDef external fill:#e1f5ff,stroke:#0078d4,stroke-width:2px
    classDef pipeline fill:#fff4e1,stroke:#ff8c00,stroke-width:2px
    classDef storage fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    classDef core fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px

    class AAD,Fabric,PowerBI,SharePoint,Graph external
    class PDFGen,Upload,LinkGen,Email pipeline
    class PDFCache,AreaData,EmpData,SPFolders,CSVFile,LogFiles storage
    class Main,Config,Query core`
    },
    {
      title: "Database Schema Version Control Automation",
      description: "Engineered automated database schema versioning system capturing 40,000+ SQL objects daily across hybrid Microsoft Fabric and on-premises infrastructure. Implemented 'invisible infrastructure' pattern with incremental extraction and Git-based change tracking, achieving 100% object coverage. Leveraged GitHub Issues API as notification layer to eliminate SMTP dependencies.",
      tech: ["Python", "Git", "GitHub API", "Microsoft Fabric", "SQL Server", "GitHub Actions"],
      repo: "https://github.com/Ads2024/sql-schema-version-control",
      mermaid: `---
config:
  look: classic
  theme: neutral
  themeVariables:
    background: '#ffffff'
    mainBkg: '#ffffff'
    primaryColor: '#ffffff'
    edgeLabelBackground: '#ffffff'
    tertiaryColor: '#f4f4f4'
---
        graph TB
    subgraph "Orchestration Layer"
        CLI[versioner.cli < br /> Command Line Interface<br/> - Argument parsing < br /> - Environment detection < br /> - Orchestration dispatch]
        Config[config.yaml < br /> Environment definitions < br /> Server lists]
  DotEnv[.env / Environment < br /> SP credentials < br /> Connection strings]
  end

    subgraph "Execution Environments"
        TaskSched[Windows Task Scheduler<br/> run_onprem.bat < br /> Daily 2AM execution]
GHActions[GitHub Actions < br /> fabric_extraction.yml < br /> Daily 2AM UTC]
Manual[Manual Execution < br /> CLI invocation]
end

    subgraph "Core Services"
Auth[core.auth < br /> AuthManager < br /> - Service Principal < br /> - Token acquisition < br /> - Credential management]
Conn[core.connection < br /> Connection Builder < br /> - ODBC string construction < br /> - Driver detection < br /> - Database discovery]
FS[core.filesystem < br /> File Operations < br /> - Atomic writes < br /> - SHA256 change detection < br /> - Filename sanitization]
Track[core.tracking < br /> State Management < br /> - last_run.yaml R / W < br /> - Delta timestamp logic < br /> - UTC normalization]
Utils[core.utils < br /> Utilities < br /> - .env loader]
end

    subgraph "Extraction Engines"
FabricExt[extractors.fabric < br /> Fabric Extractor < br /> - Multi - server iteration < br /> - Service Principal auth < br /> - Token injection]
OnPremExt[extractors.onprem < br /> OnPrem Extractor < br /> - Windows auth < br /> - SQL Agent support < br /> - Multi - server iteration]
SQLObj[extractors.sql_objects < br /> Object Extractor < br /> - Views < br /> - Stored Procedures < br /> - Schema / name handling]
SQLAgent[extractors.sql_agent < br /> Agent Job Extractor < br /> - Job metadata < br /> - Step commands < br /> - Schedule info]
end

    subgraph "Data Sources"
FabricDB[(Microsoft Fabric < br /> SQL Endpoint < br /> sys.objects < br /> sys.sql_modules)]
OnPremDB[(On - Prem SQL Server < br /> Windows Auth < br /> sys.objects < br /> sys.sql_modules)]
MSDB[(msdb < br /> sysjobs < br /> sysjobsteps)]
end

    subgraph "SQL Query Templates"
ObjQuery[sql_objects.sql < br /> Views & Procedures < br /> sys.objects JOIN < br /> sys.sql_modules]
AgentQuery[sql_agent_jobs.sql < br /> sysjobs JOIN < br /> sysjobsteps]
end

    subgraph "State Persistence"
LastRun[last_run.yaml < br /> Fabric: timestamp < br /> On - Prem: timestamp]
end

    subgraph "Output Repository"
RepoStruct[Repository Structure < br /> src / <Type>/<Server>/<DB> /]
ViewFiles[VIEW / <Schema>/<Object>.sql]
ProcFiles[PROCEDURE / <Schema>/<Object>.sql]
AgentFiles[SQL_AGENT_JOBS / <JobName>.txt]
end

    subgraph "Git Integration"
GitOps[Git Operations < br /> - git add < br /> - git commit < br /> - git push]
GitDiff[Change Detection < br /> git diff < br /> git status]
end

    subgraph "Notification System"
IssueScript[create_github_issue.ps1 < br /> - Parse git changes < br /> - Format issue body < br /> - Auto - assign]
GitHubAPI[GitHub Issues API < br /> REST endpoint < br /> Token auth]
end

    subgraph "Logging"
BatchLog[Batch Script Logs < br /> logs/*.log<br/>Timestamped output]
        StdOut[Console Output<br/>Verbose mode<br/>Progress tracking]
    end
    TaskSched -->|Executes| CLI
    GHActions -->|Executes| CLI
    Manual -->|Executes| CLI
    Config -->|Loads| CLI
    DotEnv -->|Provides| CLI
    CLI -->|type=fabric| FabricExt
    CLI -->|type=onprem| OnPremExt
    CLI -.->|Uses| Auth
    CLI -.->|Uses| Conn
    Auth -.->|Provides tokens| Conn
    FabricExt -->|Calls| Auth
    FabricExt -->|Calls| Conn
    OnPremExt -->|Calls| Conn
    FabricExt -->|Reads| Track
    OnPremExt -->|Reads| Track
    Track <-->|R/W| LastRun
    FabricExt -->|Authenticate| Auth
    Auth -->|Token| FabricDB
    FabricExt -->|Query databases| Conn
    Conn -->|List DBs| FabricDB
    FabricExt -->|Extract| SQLObj
    SQLObj -->|Execute| ObjQuery
    ObjQuery -->|Query| FabricDB
    FabricDB -->|Results| SQLObj
    OnPremExt -->|Windows Auth| OnPremDB
    OnPremExt -->|Query databases| Conn
    Conn -->|List DBs| OnPremDB
    OnPremExt -->|Extract Objects| SQLObj
    OnPremExt -->|Extract Jobs| SQLAgent
    SQLObj -->|Execute| ObjQuery
    ObjQuery -->|Query| OnPremDB
    SQLAgent -->|Execute| AgentQuery
    AgentQuery -->|Query| MSDB
    OnPremDB -->|Results| SQLObj
    MSDB -->|Job data| SQLAgent
    SQLObj -->|Delta check| Track
    SQLObj -->|Write if changed| FS
    SQLAgent -->|Delta check| Track
    SQLAgent -->|Write if changed| FS
    FS -->|Atomic replace| RepoStruct
    RepoStruct -->|Organize| ViewFiles
    RepoStruct -->|Organize| ProcFiles
    RepoStruct -->|Organize| AgentFiles
    SQLObj -->|Max timestamp| Track
    SQLAgent -->|Max timestamp| Track
    Track -->|Update on success| LastRun
    TaskSched -->|Post-extraction| GitDiff
    GHActions -->|Post-extraction| GitDiff
    GitDiff -->|Changes detected| GitOps
    GitOps -->|Stage & commit| RepoStruct
    GitOps -->|Push| RepoStruct
    GitOps -->|On success| IssueScript
    IssueScript -->|Parse changes| GitDiff
    IssueScript -->|Create issue| GitHubAPI
    GitHubAPI -.->|Optional assign| IssueScript
    TaskSched -.->|Log output| BatchLog
    FabricExt -.->|Verbose logging| StdOut
    OnPremExt -.->|Verbose logging| StdOut
    SQLObj -.->|Progress output| StdOut
    SQLAgent -.->|Progress output| StdOut

    classDef orchestration fill:#e1f5ff,stroke:#0078d4,stroke-width:2px
    classDef extraction fill:#fff4e1,stroke:#ff8c00,stroke-width:2px
    classDef storage fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    classDef core fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px
    classDef external fill:#ffebee,stroke:#d32f2f,stroke-width:2px

    class CLI,Config,DotEnv,TaskSched,GHActions,Manual orchestration
    class FabricExt,OnPremExt,SQLObj,SQLAgent extraction
    class RepoStruct,ViewFiles,ProcFiles,AgentFiles,LastRun,BatchLog storage
    class Auth,Conn,FS,Track,Utils core
    class FabricDB,OnPremDB,MSDB,GitHubAPI external`
    }
  ],
  projects: [
    {
      title: "Linear Programming Model",
      description: "A Linear Programming (LP) model designed to help students make strategic college application decisions based on their GPA. Using data analysis of past admission statistics, this model balances admission probability with college prestige to optimize application strategy.",
      tech: ["Python", "Linear Programming", "Data Analysis"],
      link: "https://ads2024.github.io/US-College-Optimizer-LP-Model/",
      repo: "https://github.com/Ads2024/US-College-Optimizer-LP-Model"
    },
    {
      title: "A/B Testing Analysis",
      description: "This analysis compares the performance of two marketing campaigns using A/B testing methodology. The control campaign represents the established approach, while the test campaign implements alternative strategies.",
      tech: ["Python", "Pandas", "Statistical Analysis"],
      link: "https://ads2024.github.io/AB-Testing-Campaign-Analysis/",
      repo: "https://github.com/Ads2024/AB-Testing-Campaign-Analysis"
    }
  ],
  certifications: [
    {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      year: "2025",
      link: "https://www.hackerrank.com/certificates/f2b2dd7e510d"
    },
    {
      title: "Databricks Lakehouse Fundamentals",
      issuer: "Databricks",
      year: "2025",
      link: "https://www.credential.net/1116ab60-8a05-4737-9776-9e7c72553e40"
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2023",
      link: "https://learn.microsoft.com/en-gb/users/abdirahmanmohamed-9209/credentials/d6ff6e0f01f552b0",
      credentialId: "D6FF6E0F01F552B0"
    }
  ],
  skills: {
    dataModeling: ["Dimensional Modeling", "Semantic Layer Design", "Star/Snowflake Modeling", "Time-Series Architecture", "Forecasting", "A/B Testing"],
    languagesTools: ["Python (pandas, numpy, pyarrow, pyspark)", "SQL", "PowerShell", "Java", "JavaScript (Intermediate)", "R", "Git", "VS Code", "CI/CD"],
    dataEngineering: ["ETL/ELT", "Metadata-Driven Workflows", "SQL Object Versioning", "Schema Tracking", "Automated Lineage", "Semi-Structured Processing", "DataOps", "API Integration", "Data Cataloging", "Data Governance"],
    platforms: ["Databricks", "Microsoft Fabric", "Fabric Notebook Pipelines", "Power BI", "Streamlit", "OneLake", "Dataflow Gen2"],
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
    },
    {
      role: "Research Assistant Intern (Statistical Modelling)",
      company: "University of Leicester",
      period: "Oct 2026 – Jul 2017",
      highlights: [
        'Developed statistical models in R to analyse antibacterial properties of paracetamol',
        'Contributed to experimental design, spectroscopy analysis, and gene expression studies via PCR and cell-based assays',
        'Completed a 12 month research project on the antibacterial properties of paracetamol'
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
