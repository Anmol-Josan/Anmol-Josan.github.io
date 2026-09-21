export type Project = {
  number: string;
  label: string;
  title: string;
  summary: string;
  facts: string[];
  lesson: string;
  tags: string[];
};

export type Activity = {
  title: string;
  description: string;
};

export const profile = {
  name: "Anmol Josan",
  shortName: "A. Josan",
  location: "Seattle area / Eastside Preparatory School",
  role: "Student researcher, software builder, and community operator",
  headline: "I build systems that get better when reality disagrees with them.",
  intro:
    "My work moves between biomedical machine learning, educational access, and the infrastructure that makes small communities run. I like the first prototype, the uncomfortable failure, and the revision that makes the system more useful.",
  contact: {
    email: "anmoljosan@outlook.com",
    github: "https://github.com/Anmol-Josan",
    linkedin: "https://www.linkedin.com/in/anmol-singh-josan/",
    resume: "/resume.html"
  },
  stats: [
    { value: "3,200+", label: "students reached through 425 Tutoring" },
    { value: "93%", label: "reported accuracy in cancer-response modeling" },
    { value: "800+", label: "daily EPSchedule users" },
    { value: "36 t", label: "CO2 saved per year through campus tools" }
  ]
};

export const navigation = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#systems", label: "Systems" },
  { href: "#beyond", label: "Beyond code" },
  { href: "#contact", label: "Contact" }
];

export const projects: Project[] = [
  {
    number: "01",
    label: "Biomedical AI",
    title: "Making a model explain itself",
    summary:
      "In cancer-response research, I built multimodal machine-learning workflows around single-cell RNA and TCR sequencing to study hormone-receptor-positive breast cancer response to chemo-immunotherapy.",
    facts: [
      "93% reported accuracy",
      "0.5 silhouette score",
      "SHAP and integrated gradients",
      "First in computational biology at the Washington State Science Fair",
      "Research mentored by MIT biomedical researcher Morteza Sarmadi"
    ],
    lesson:
      "When oncologists asked for the biology behind the prediction, explainability stopped being a decorative layer. I projected attributions back through PCA loadings, found that rankings shifted across validation folds, and started studying how mathematical structure can preserve the contradictions that smoothing erases.",
    tags: ["single-cell data", "explainability", "validation", "optimal transport"]
  },
  {
    number: "02",
    label: "Educational technology",
    title: "Turning confusion into a next step",
    summary:
      "EduLens is an AI-driven platform that analyzes tutoring video and audio transcripts to identify where a student is confused and recommend a targeted learning step.",
    facts: [
      "Founded EduLens",
      "Designed for tutors and schools",
      "Connects conversation evidence to intervention",
      "Built around early support, not just post-test scores"
    ],
    lesson:
      "The useful output is not a label that says a student is struggling. It is a small, specific action that gives the tutor a better next move.",
    tags: ["AI", "learning science", "early intervention", "product design"]
  },
  {
    number: "03",
    label: "Campus infrastructure",
    title: "Software people actually use between classes",
    summary:
      "I have built and maintained systems for my school where reliability matters more than a polished demo: scheduling, ridesharing, hackathon tools, and a lunch workflow.",
    facts: [
      "EPSchedule serves 800+ students and faculty daily",
      "Mobile version reduced lunch wait times by 75%",
      "EPCarpool supported 600+ rides",
      "EPCarpool was built with a team of four and won the school hackathon"
    ],
    lesson:
      "EPCarpool taught me that authentication is not the same as trust. A verified sign-in, unsafe visibility rules, ambiguous school sponsorship, and a race between two drivers can still make a system the wrong shape. I would start narrower: help people find one another, then let them arrange the ride themselves.",
    tags: ["TypeScript", "Node.js", "Auth0", "operations", "privacy"]
  },
  {
    number: "04",
    label: "Scale and access",
    title: "Building the operating layer behind a community",
    summary:
      "At 425 Tutoring, I helped scale a 501(c)(3) matching K-6 students with volunteer tutors across the world, then built software to reduce the coordination burden.",
    facts: [
      "3,200+ students in 19 countries, 45 states, and 2 territories",
      "Management team of 14 students",
      "95% tutor retention through an Ambassador leadership path",
      "$120,000 in funding"
    ],
    lesson:
      "Scale is not just more users. It is clearer onboarding, better handoffs, and enough trust that people keep showing up.",
    tags: ["leadership", "matching", "onboarding", "access"]
  }
];

export const researchSteps = [
  {
    label: "Question",
    title: "What does the model miss?",
    body: "Start with the biological or human constraint, not the easiest metric."
  },
  {
    label: "Test",
    title: "Where does the assumption break?",
    body: "Use validation, failure analysis, and feedback from people who understand the domain."
  },
  {
    label: "Rebuild",
    title: "What structure preserves the signal?",
    body: "Change the method when the method erases the phenomenon you came to study."
  }
];

export const leadership = [
  {
    title: "EPS Hack Club",
    description:
      "As president, I led a 25-member technology club, grew membership by 300% and female participation by 400%, led six campus projects, and organized hackathons for 90 participants."
  },
  {
    title: "The TMAC door",
    description:
      "A locked commercial door was about to cost the school $10,000 to fix. I proposed a one-month Hack Club build with an ESP32, limit switch, servo, and firmware. The hardware team taught me physical limits; I taught the team why we hardwired GPIO and disabled Bluetooth and LAN."
  },
  {
    title: "Kiddie Academies of Greater Seattle",
    description:
      "As a software engineer, I built systems used by 2,000+ people across seven childcare locations, including parent-compliance automation, AI feedback analysis, and secure handling of payment and medical information. The work saved an estimated 200 hours each week."
  }
];

export const beyondCode: Activity[] = [
  {
    title: "Climbing as a movement lab",
    description:
      "I climb V9 boulders and 5.13d routes. For two years I have treated climbing movement as a measurement problem, using 3D mesh models and accelerometer data to study stability, grip strength, and efficient paths."
  },
  {
    title: "The plane that proved me wrong",
    description:
      "I built and piloted a flyable 4.5-foot Boeing 747 from scratch. Earlier RC-plane versions were too heavy, spun in circles, or caught fire during a ground test. The useful lesson was to judge components by what they do to the whole system."
  },
  {
    title: "Teaching the next player",
    description:
      "I coach 20+ Eton School ultimate players ages 10-14 and helped move the team from C division to B. At Eastside Prep, I have also mentored 40 younger students through the academic and social transition into a demanding school."
  },
  {
    title: "Research beyond the lab",
    description:
      "I was selected as one of 30 Stanford Reischauer Scholars and received one of three honorable mentions for research on EdTech and Japan's futoko, or school-refusal, crisis. I also reached USACO Platinum and the top 0.3% of Project Euler, then earned a Silver Bid to the Tournament of Champions in Public Forum debate."
  }
];

export const currentWork = [
  "A senior thesis on optimal transport: modeling how perturbations redistribute state configurations while tracking which cells resist transition.",
  "A research workflow that keeps explanations stable and inspectable across validation folds.",
  "Tools that make small teams faster without hiding the tradeoffs their users need to understand."
];
