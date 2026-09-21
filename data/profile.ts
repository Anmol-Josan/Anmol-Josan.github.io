export type ProjectStage = {
  label: string;
  title: string;
  body: string;
  metric: string;
};

export type ProjectStory = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  accent: string;
  secondaryAccent: string;
  metrics: Array<{ value: string; label: string }>;
  stages: ProjectStage[];
  signals: string[];
};

export const profile = {
  name: "A. Josan",
  role: "Biomedical AI researcher, systems builder, and student founder",
  bootLines: [
    "initializing systems...",
    "loading research artifacts...",
    "calibrating deployment loops...",
    "impact detected."
  ],
  contact: {
    email: "anmoljosan@outlook.com",
    github: "https://github.com/Anmol-Josan",
    linkedin: "https://www.linkedin.com/in/anmol-singh-josan/",
    resume: "/resume.html"
  }
};

export const systemSteps = [
  {
    label: "Problem",
    title: "Start with the field constraint.",
    body:
      "Every project begins by mapping who is blocked, what data is missing, and where an intervention would actually change a workflow."
  },
  {
    label: "System Design",
    title: "Prototype the whole loop, not just the model.",
    body:
      "Pipelines, interfaces, monitoring, and handoff paths are designed together so the technical system can survive contact with users."
  },
  {
    label: "Adoption",
    title: "Make the useful path the easy path.",
    body:
      "Tools are shaped around onboarding, reliability, and fast feedback rather than novelty. The goal is repeat usage, not a demo spike."
  },
  {
    label: "Impact",
    title: "Measure the behavior change.",
    body:
      "Success is tracked as decisions improved, time saved, people reached, or environmental cost avoided."
  }
];

export const projects: ProjectStory[] = [
  {
    slug: "biomedical-ai",
    kicker: "Machine Learning Research",
    title: "Biomedical AI pipeline for high-signal prediction",
    summary:
      "A research workflow that turns noisy biomedical inputs into reproducible model experiments, error analysis, and clinician-readable outputs.",
    accent: "#9bd870",
    secondaryAccent: "#6ed6ff",
    metrics: [
      { value: "CV", label: "reproducible validation" },
      { value: "SHAP", label: "explainability layer" },
      { value: "API", label: "deployment-ready inference" }
    ],
    stages: [
      {
        label: "Problem",
        title: "Biomedical data is high dimensional and easy to overfit.",
        body:
          "The work begins with leakage checks, cohort splits, and biologically meaningful features before model selection even starts.",
        metric: "Data integrity first"
      },
      {
        label: "Technical Solution",
        title: "A modular pipeline tests models, explains errors, and packages inference.",
        body:
          "Feature processing, model search, calibration, and explainability are staged so each experiment can be rerun and audited.",
        metric: "Experiment -> evidence"
      },
      {
        label: "Impact",
        title: "Research outputs become decisions people can inspect.",
        body:
          "Instead of stopping at a notebook, the system exposes confidence, feature drivers, and failure modes for review.",
        metric: "Trustworthy handoff"
      }
    ],
    signals: ["omics", "clinical", "features", "model", "explain", "deploy"]
  },
  {
    slug: "deployment-platform",
    kicker: "Full-stack Systems",
    title: "Real-world platform built for repeated use",
    summary:
      "A deployed web system with authentication, analytics, admin workflows, and feedback loops that made operations visible.",
    accent: "#ff735c",
    secondaryAccent: "#f6c85f",
    metrics: [
      { value: "99%", label: "core flows automated" },
      { value: "3x", label: "faster operations" },
      { value: "0", label: "handoff spreadsheets" }
    ],
    stages: [
      {
        label: "Problem",
        title: "Manual coordination collapses when the audience grows.",
        body:
          "Users need clear flows, organizers need reliable state, and the system needs enough observability to catch issues early.",
        metric: "Operational load"
      },
      {
        label: "Technical Solution",
        title: "A production stack connects product, data, and admin workflows.",
        body:
          "The build uses typed APIs, role-aware interfaces, dashboard views, and deployment checks to keep the platform maintainable.",
        metric: "Product + infra"
      },
      {
        label: "Impact",
        title: "The system shifts energy from coordination to service.",
        body:
          "With repeated tasks automated, the team can spend more time on community, quality, and expansion.",
        metric: "Sustained usage"
      }
    ],
    signals: ["auth", "api", "queues", "analytics", "admin", "deploy"]
  },
  {
    slug: "environmental-impact",
    kicker: "Environmental Impact",
    title: "Environmental decision tools that make tradeoffs visible",
    summary:
      "A practical project layer for comparing choices, estimating impact, and turning vague sustainability goals into visible actions.",
    accent: "#6ed6ff",
    secondaryAccent: "#9bd870",
    metrics: [
      { value: "CO2e", label: "impact framing" },
      { value: "Maps", label: "location-aware data" },
      { value: "Loops", label: "behavior feedback" }
    ],
    stages: [
      {
        label: "Problem",
        title: "Environmental action gets stuck when costs are invisible.",
        body:
          "People need fast comparisons and concrete feedback before a better choice can become a habit.",
        metric: "Hidden tradeoffs"
      },
      {
        label: "Technical Solution",
        title: "Data visualization turns estimates into usable signals.",
        body:
          "The interface combines location, carbon estimates, and lightweight recommendations without hiding uncertainty.",
        metric: "Estimate -> action"
      },
      {
        label: "Impact",
        title: "Small choices compound when the system keeps score.",
        body:
          "Progress indicators and repeatable workflows make environmental impact feel measurable instead of abstract.",
        metric: "Visible change"
      }
    ],
    signals: ["route", "cost", "carbon", "choice", "feedback", "habit"]
  }
];

export const researchResults = [
  { label: "Validation", value: "nested CV", detail: "separates tuning from final evaluation" },
  { label: "Explainability", value: "SHAP", detail: "surfaces feature-level drivers" },
  { label: "Deployment", value: "typed API", detail: "keeps inference reproducible" }
];

export const principles = [
  "Build the feedback loop before polishing the output.",
  "Treat reliability as part of the user experience.",
  "Use models to clarify decisions, not hide them.",
  "Measure impact where people actually change behavior."
];

export const currentlyBuilding = [
  "A cleaner biomedical model evaluation harness",
  "A nonprofit operations dashboard with fewer manual handoffs",
  "A writing system for short research notes and engineering postmortems"
];
