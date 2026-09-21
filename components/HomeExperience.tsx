import {
  beyondCode,
  currentWork,
  leadership,
  navigation,
  profile,
  projects,
  researchSteps
} from "@/data/profile";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  inverse = false
}: {
  eyebrow: string;
  title: string;
  body?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`section-intro${inverse ? " section-intro-inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-lede">{body}</p> : null}
    </div>
  );
}

export default function HomeExperience() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to the top">
          <span className="brand-mark">AJ</span>
          <span>{profile.shortName}</span>
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{profile.location}</p>
            <h1>{profile.headline}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#work">
                See selected work <Arrow />
              </a>
              <a className="text-link" href={`mailto:${profile.contact.email}`}>
                Start a conversation <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-note" aria-label="Working principle">
            <p className="eyebrow">Working principle</p>
            <p>
              A prototype is a question with a user interface. The answer is
              what survives contact with people, constraints, and the second
              version.
            </p>
            <div className="hero-note-line" />
            <p className="hero-note-meta">Research / software / service</p>
          </div>
        </section>

        <section className="stat-band" aria-label="Selected figures">
          <div className="section-shell stat-grid">
            {profile.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section" id="work">
          <SectionIntro
            eyebrow="Selected work"
            title="The work is varied. The operating question is consistent."
            body="What changes when a model, product, or organization has to work for someone besides its creator?"
          />

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-topline">
                  <span>{project.number}</span>
                  <span>{project.label}</span>
                </div>
                <div className="project-card-grid">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <div className="tag-row" aria-label="Topics">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-facts">
                    {project.facts.map((fact) => (
                      <p key={fact}>{fact}</p>
                    ))}
                  </div>
                </div>
                <details className="project-notes">
                  <summary>
                    <span>What changed my thinking</span>
                    <span className="summary-symbol" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{project.lesson}</p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="research">
          <div className="section-shell">
            <SectionIntro
              eyebrow="Research practice"
              title="Follow the failure until it becomes a better question."
              body="My cancer-model work moved from prediction to explainability, then into spectral graph theory, cellular sheaf theory, and a senior thesis on optimal transport. Each detour started with an assumption that did not survive the data."
              inverse
            />

            <div className="research-layout">
              <div className="research-steps">
                {researchSteps.map((step, index) => (
                  <article className="research-step" key={step.label}>
                    <span className="step-number">0{index + 1}</span>
                    <div>
                      <p className="eyebrow">{step.label}</p>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="research-quote">
                <p className="eyebrow">A useful contradiction</p>
                <blockquote>
                  “Nearly identical cells can differ wildly in drug response.”
                </blockquote>
                <p>
                  When Laplacian smoothing erased the local contradictions I
                  wanted to understand, I stopped trying to make the data
                  smoother and looked for a structure that could keep the
                  differences meaningful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section" id="systems">
          <SectionIntro
            eyebrow="Systems and leadership"
            title="Useful software is also an organizational decision."
            body="The code matters, but so do access rules, onboarding, handoffs, safety, and the people who have to maintain the thing after launch."
          />

          <div className="leadership-grid">
            {leadership.map((item, index) => (
              <article className="leadership-card" key={item.title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="principle-row">
            <p className="eyebrow">What I bring to a team</p>
            <p>
              I can move between the model, the backend, the person using the
              tool, and the person who has to explain its risks. That middle
              layer is usually where the real work is.
            </p>
          </div>
        </section>

        <section className="section section-tinted" id="beyond">
          <div className="section-shell">
            <SectionIntro
              eyebrow="Beyond code"
              title="The same curiosity shows up away from a keyboard."
              body="Movement, making, teaching, and argument are not side quests. They are other ways to notice constraints, practice iteration, and learn from people who see the problem differently."
            />
            <div className="activity-grid">
              {beyondCode.map((activity) => (
                <article className="activity-card" key={activity.title}>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section now-section">
          <div className="now-layout">
            <SectionIntro
              eyebrow="Current work"
              title="Still in motion."
              body="The next version is always partly research, partly maintenance, and partly paying attention."
            />
            <ol className="now-list">
              {currentWork.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="section-shell footer-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Have a hard problem with a human on the other side?</h2>
            <a className="button button-light" href={`mailto:${profile.contact.email}`}>
              Email {profile.shortName} <Arrow />
            </a>
          </div>
          <div className="footer-links">
            <a href={profile.contact.github}>
              GitHub <Arrow />
            </a>
            <a href={profile.contact.linkedin}>
              LinkedIn <Arrow />
            </a>
            <a href={profile.contact.resume}>
              Resume <Arrow />
            </a>
            <p>{profile.contact.email}</p>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>{profile.name}</span>
          <span>Research / software / service</span>
        </div>
      </footer>
    </div>
  );
}
