/** Authoritative content: UC Activities List, Draft 4, PDF entries 1–20.
 * primary controls radar position; categories are intentionally multi-label.
 * Values are document claims, not independently verified or live counters.
 */
export const categories = [
  { id: "tech", name: "Tech / Entrepreneurship", short: "TECH" },
  { id: "research", name: "Research / Competitive CS", short: "RESEARCH" },
  { id: "community", name: "Community Leadership", short: "COMMUNITY" },
  { id: "awards", name: "Awards", short: "AWARDS" },
  { id: "skills", name: "Niche Skills", short: "SKILLS" },
];
export const impacts = [
  { id: "all", name: "Every impact" },
  { id: "reach", name: "People reached" },
  { id: "efficiency", name: "Time & resources saved" },
  { id: "funding", name: "Funding & ventures" },
  { id: "research", name: "Research & discovery" },
  { id: "recognition", name: "Rankings & recognition" },
  { id: "craft", name: "Engineering & craft" },
];
export const achievements = [
  {
    id: 1,
    title: "425 Tutoring",
    role: "Chief Executive Officer",
    primary: "community",
    categories: ["community", "tech"],
    impacts: ["reach", "funding", "efficiency"],
    metric: "3,200+",
    unit: "students reached",
    stats: [
      ["19", "countries"],
      ["$120k", "funding received"],
    ],
    description:
      "Scaled a volunteer tutoring organization across 45 states and 2 territories. Built software for tutor matching, scheduling, and onboarding.",
    details: [
      "Led a management team of 14 students.",
      "Achieved 95% tutor retention through the Ambassador leadership opportunity.",
      "501(c)(3) organization matching K–6 students with volunteer tutors; founded in 2020.",
    ],
    page: "2",
  },
  {
    id: 2,
    title: "EPS Hack Club",
    role: "President",
    primary: "tech",
    categories: ["tech", "community"],
    impacts: ["reach", "efficiency", "funding"],
    metric: "300%",
    unit: "membership growth",
    stats: [
      ["600+", "daily active users"],
      ["$10k", "savings"],
    ],
    description:
      "Led a 25-member technology club and 6 campus projects. Increased female participation by 400%.",
    details: [
      "Organized school hackathons for 90 participants and secured $2,000 in funding, with judges from Google DeepMind.",
      "The source reports $10,000 saved and 36 tons of CO₂ avoided yearly. Savings and funding are separate figures.",
      "Project users and environmental savings may overlap with EPCarpool and other campus projects; they are not added together.",
    ],
    page: "2",
  },
  {
    id: 3,
    title: "USA Computing Olympiad",
    role: "Platinum competitor",
    primary: "research",
    categories: ["research", "awards"],
    impacts: ["recognition", "craft"],
    metric: "Top 200",
    unit: "high school competitors nationwide",
    stats: [
      ["Platinum", "division"],
      ["USACO", "competition"],
    ],
    description:
      "Solved algorithmic problems under time and resource constraints using advanced data structures and optimized algorithms.",
    details: [
      "Prepared with Disjoint Set Union, Fenwick Trees, dynamic programming, and binary jumping.",
      "The activity description says nationwide; its eligibility paragraph says internationally. This portfolio follows the activity description.",
    ],
    page: "2",
  },
  {
    id: 4,
    title: "EduLens",
    role: "Founder & CEO",
    primary: "tech",
    categories: ["tech"],
    impacts: ["craft"],
    metric: "AI",
    unit: "tutoring analysis platform",
    stats: [
      ["Video", "transcript analysis"],
      ["Audio", "transcript analysis"],
    ],
    description:
      "Founded and deployed a platform that identifies student confusion in tutoring transcripts and recommends targeted learning steps.",
    details: [
      "Built to connect educational technology with early intervention for students and schools.",
      "The source does not specify a user count, revenue, or measured learning outcome.",
    ],
    page: "3",
  },
  {
    id: 5,
    title: "WA State Science Fair",
    role: "Computational biology",
    primary: "awards",
    categories: ["awards", "research"],
    impacts: ["recognition", "research"],
    metric: "1st",
    unit: "place · computational biology",
    stats: [
      ["RNA", "sequencing"],
      ["TCR", "sequencing"],
    ],
    description:
      "Applied machine learning to single-cell biological data to study treatment responsiveness and personalized chemo-immunotherapy.",
    details: [
      "The source reports 1st place in computational biology at the state level and references 1,200 students. It does not clearly establish the category-specific field size.",
      "Advanced through regional qualifiers and scientific review, with live interviews by professional judges.",
    ],
    page: "3",
  },
  {
    id: 6,
    title: "Machine Learning Research",
    role: "Independent research intern",
    primary: "research",
    categories: ["research"],
    impacts: ["research"],
    metric: "93%",
    unit: "treatment-response prediction accuracy",
    stats: [
      ["0.5", "silhouette score"],
      ["JMIR", "pre-publication"],
    ],
    description:
      "Developed multimodal models predicting hormone receptor-positive breast cancer response to chemo-immunotherapy.",
    details: [
      "Mentored by MIT biomedical researcher Morteza Sarmadi.",
      "The source describes the work as “pre-published” in the Journal of Medical Internet Research. It supplies no paper title, DOI, or final publication confirmation.",
      "Accuracy is reported in the source; no evaluation dataset, test protocol, or clinical validation is specified.",
    ],
    page: "3",
  },
  {
    id: 7,
    title: "Berkeley MET Innovation Academy",
    role: "Participant · venture co-founder",
    primary: "tech",
    categories: ["tech"],
    impacts: ["funding", "craft"],
    metric: "$7.5M",
    unit: "judge-assessed pre-seed valuation",
    stats: [
      ["Medical AI", "venture concept"],
      ["UC Berkeley", "program"],
    ],
    description:
      "Co-founded a medical AI device startup during a program covering engineering, business, rapid prototyping, and venture pitches.",
    details: [
      "The $7.5M figure is a valuation assigned by program judges, not funding raised or an independently priced financing round.",
      "Learned from guest speakers including Michael Grimes and industry innovators.",
    ],
    page: "3",
  },
  {
    id: 8,
    title: "Project Euler",
    role: "Competitive programmer",
    primary: "research",
    categories: ["research", "awards"],
    impacts: ["recognition", "craft"],
    metric: "Top 0.3%",
    unit: "of 1.4 million users",
    stats: [
      ["1.4M", "users in source"],
      ["Algorithms", "mathematical problem solving"],
    ],
    description:
      "Independently wrote optimized solutions using number theory, combinatorics, and dynamic programming.",
    details: [
      "Focused on non-standard mathematical problems, runtime efficiency, and resource-constrained computation.",
      "Ranking and population reflect the source document.",
    ],
    page: "3–4",
  },
  {
    id: 9,
    title: "Stanford Reischauer Scholars",
    role: "Student fellow · honorable mention",
    primary: "awards",
    categories: ["awards", "research"],
    impacts: ["recognition", "research"],
    metric: "1 of 30",
    unit: "students selected nationwide",
    stats: [
      ["1 of 3", "honorable mentions"],
      ["EdTech", "research focus"],
    ],
    description:
      "Published a peer-reviewed research paper on the role of EdTech in addressing Japan’s futoko, or school-refusal, crisis.",
    details: [
      "Studied Japanese history, culture, and US–Japan relations through lectures, discussions, and diplomatic simulations.",
      "Received an honorable mention for final research. Publication description follows the source; no paper URL is supplied.",
    ],
    page: "4",
  },
  {
    id: 10,
    title: "Kiddie Academies",
    role: "Software engineer · Greater Seattle",
    primary: "tech",
    categories: ["tech"],
    impacts: ["reach", "efficiency", "craft"],
    metric: "2,000+",
    unit: "software users",
    stats: [
      ["200 h/wk", "estimated time saved"],
      ["7", "locations"],
    ],
    description:
      "Automated parent compliance data, AI-assisted feedback analysis, and staff satisfaction surveys across childcare operations.",
    details: [
      "Created systems to securely store sensitive parent and child information, including payment and medical data.",
      "Worked with management on administrative automation and upgraded employee hardware.",
      "The time saving is explicitly an estimate in the source.",
    ],
    page: "4",
  },
  {
    id: 11,
    title: "Y Combinator Startup School",
    role: "Startup School fellow",
    primary: "tech",
    categories: ["tech"],
    impacts: ["recognition"],
    metric: "<5%",
    unit: "program acceptance rate in source",
    stats: [
      ["AI", "entrepreneurship"],
      ["Selected", "by YC partners"],
    ],
    description:
      "Selected for an AI entrepreneurship program with founders and executives from technology companies.",
    details: [
      "The source names speakers from OpenAI, Stripe, NVIDIA, Kalshi, Scale AI, Anthropic, Meta, Google DeepMind, Waymo, and neolabs.",
      "The acceptance rate is the document’s reported figure for this program; it is not a claim about the YC accelerator.",
    ],
    page: "4",
  },
  {
    id: 12,
    title: "EPCarpool",
    role: "Founder & project lead",
    primary: "tech",
    categories: ["tech", "community", "awards"],
    impacts: ["efficiency", "craft", "recognition"],
    metric: "36 t",
    unit: "CO₂ emissions saved",
    stats: [
      ["600+", "rides"],
      ["12%", "emissions reduction"],
    ],
    description:
      "Launched a ridesharing app, led 4 developers, and built Node.js backend infrastructure and user authentication.",
    details: [
      "Managed the project from concept to production. Won 1st place in the school hackathon.",
      "The 36-ton metric also appears in the Hack Club entry; it is not counted twice as a total.",
    ],
    page: "4–5",
  },
  {
    id: 13,
    title: "EPSchedule",
    role: "Lead developer",
    primary: "tech",
    categories: ["tech"],
    impacts: ["reach", "efficiency", "craft"],
    metric: "800+",
    unit: "daily student & faculty users",
    stats: [
      ["75%", "shorter lunch wait"],
      ["Mobile", "app version"],
    ],
    description:
      "Built campus scheduling software for viewing schedules, finding classrooms, and identifying students.",
    details: [
      "Managed backend infrastructure, developed features, and maintained day-to-day reliability.",
      "Created a mobile app version that reduced school lunch wait times by 75%, as reported in the source.",
    ],
    page: "5",
  },
  {
    id: 14,
    title: "Microsoft Hunt the Wumpus",
    role: "Project manager",
    primary: "awards",
    categories: ["awards", "tech"],
    impacts: ["recognition", "craft"],
    metric: "1st",
    unit: "place · hackathon",
    stats: [
      ["3 months", "development timeframe"],
      ["Game", "design & engineering"],
    ],
    description:
      "Led a team building a modern Hunt the Wumpus game, coordinating code, user experience, and a functional presentation.",
    details: [
      "The award considered implementation, design, and audience rating.",
      "Resolved team disputes and coordinated collaboration throughout development.",
    ],
    page: "5",
  },
  {
    id: 15,
    title: "Eton School Ultimate Frisbee",
    role: "Volunteer coach",
    primary: "community",
    categories: ["community", "skills"],
    impacts: ["reach"],
    metric: "20+",
    unit: "players coached",
    stats: [
      ["10–14", "player ages"],
      ["C → B", "division progression"],
    ],
    description:
      "Coached throwing, catching, defensive strategies, and teamwork. Helped the youth team advance from C to B division.",
    details: [
      "Taught the sport’s “Spirit of the Game” philosophy through practices at a private K–8 school.",
    ],
    page: "5",
  },
  {
    id: 16,
    title: "Eastside Prep Peer Mentoring",
    role: "Peer mentor",
    primary: "community",
    categories: ["community"],
    impacts: ["reach"],
    metric: "40",
    unit: "younger students supported",
    stats: [
      ["Academic", "transition support"],
      ["Social", "integration"],
    ],
    description:
      "Helped younger students adapt to a more demanding academic environment through guidance on time management and study habits.",
    details: [
      "Served as an ongoing resource throughout the school year in Eastside Preparatory School’s peer mentorship program.",
    ],
    page: "5",
  },
  {
    id: 17,
    title: "Rock Climbing",
    role: "Independent athlete",
    primary: "skills",
    categories: ["skills"],
    impacts: ["recognition"],
    metric: "V9",
    unit: "bouldering grade",
    stats: [
      ["5.13d", "climbing grade"],
      ["Top 1%", "US climbers · source claim"],
    ],
    description:
      "Practiced climbing to develop physical endurance, problem solving, and focus while connecting with other students.",
    details: [
      "The top-1% comparison is reported in the source without a ranking methodology or external citation.",
    ],
    page: "6",
  },
  {
    id: 18,
    title: "EPS Ultimate Frisbee",
    role: "Defensive player",
    primary: "skills",
    categories: ["skills", "awards"],
    impacts: ["recognition"],
    metric: "Defensive",
    unit: "player of the year",
    stats: [
      ["EPS", "team"],
      ["Defense", "field positioning"],
    ],
    description:
      "Earned Defensive Player of the Year through field communication, tactical positioning, and team-focused play.",
    details: [
      "Focused on agility, reading field dynamics, and sportsmanship during competitive games.",
    ],
    page: "6",
  },
  {
    id: 19,
    title: "Tournament of Champions",
    role: "Public Forum debater",
    primary: "awards",
    categories: ["awards"],
    impacts: ["recognition", "research"],
    metric: "Silver",
    unit: "bid · Tournament of Champions",
    stats: [
      ["National", "debate tournaments"],
      ["Public Forum", "debate format"],
    ],
    description:
      "Advanced to late elimination rounds through policy research, evidence-based arguments, and cross-examination.",
    details: [
      "Researched NATO defense strategy, Section 230, and student loan forgiveness.",
      "The source reports hundreds of hours of case research and a Silver Bid to the Tournament of Champions.",
    ],
    page: "6",
  },
  {
    id: 20,
    title: "RC Aircraft Engineering",
    role: "Independent builder & pilot",
    primary: "skills",
    categories: ["skills", "tech"],
    impacts: ["craft"],
    metric: "4.5 ft",
    unit: "flyable Boeing 747 model",
    stats: [
      ["Scratch-built", "airframe"],
      ["RC", "flight control"],
    ],
    description:
      "Designed, built, and flew a remote-controlled 747, applying aerodynamics, electronics, and structural engineering.",
    details: [
      "Iterated on flight mechanics to improve speed, control, and flight duration.",
      "The source gives a 4.5-foot size without identifying wingspan or length; this portfolio does not infer either.",
    ],
    page: "6",
  },
];

export function filterAchievements(category = "all", impact = "all") {
  return achievements.filter(
    (a) =>
      (category === "all" || a.categories.includes(category)) &&
      (impact === "all" || a.impacts.includes(impact)),
  );
}
/** Stable source IDs and primary-field sectors; radial distance is layout only, never a score. */
export function radarPosition(achievement) {
  const sector = categories.findIndex((c) => c.id === achievement.primary);
  const siblings = achievements.filter(
    (a) => a.primary === achievement.primary,
  );
  const index = siblings.findIndex((a) => a.id === achievement.id);
  const angle = (sector * Math.PI * 2) / 5 + ((index % 4) - 1.5) * 0.3;
  const radius = index < 4 ? 0.35 : 0.2;
  return {
    x: 0.5 + Math.sin(angle) * radius,
    y: 0.5 - Math.cos(angle) * radius,
    angle: (angle + Math.PI * 2) % (Math.PI * 2),
  };
}
