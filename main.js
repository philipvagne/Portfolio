const app = document.querySelector('#app')

const links = {
  landingPage: 'https://zorune-landingpage.vercel.app/',
  appRepo: 'https://github.com/philipvagne/Zorune',
  semanticRepo: 'https://github.com/philipvagne/semantic-compliance-review-agent',
  linkedin: 'https://www.linkedin.com/in/philip-agn%C3%A9-a86679411/',
  github: 'https://github.com/philipvagne',
  contact: 'mailto:philipv.agne@gmail.com',
  semanticVideo: 'https://www.youtube.com/watch?v=leeRrSjDovg',
  semanticKaggle:
    'https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1782292838374',
}

const routes = {
  home: '/',
  zorune: '/projects/zorune',
  semantic: '/projects/semantic-compliance-review-agent',
  meeting: '/projects/meeting-preparation-assistant',
}

const homeProjects = [
  {
    route: routes.zorune,
    category: 'Full-stack product',
    title: 'Zorune',
    description:
      'A collaborative operations workspace that brings projects, tasks, notes, teams, and everyday workflows into one calmer system.',
    image: {
      src: '/assets/projects/zorune/zorune-workspace.png',
      alt: 'Zorune workspace showing projects, tasks, notes, and team context in one interface.',
      className: 'home-project-media--zorune',
    },
    featured: true,
  },
  {
    route: routes.semantic,
    category: 'AI agent · Evaluation',
    title: 'Semantic Compliance Review Agent',
    description:
      'A CLI agent for reviewing repository language across security, disclosure, and professionalism categories.',
    image: {
      src: '/assets/projects/semantic-review-agent/semantic-review-audit.png',
      alt: 'Semantic Compliance Review Agent terminal output showing an executive audit summary and risk matrix.',
      className: 'home-project-media--semantic',
    },
  },
  {
    route: routes.meeting,
    category: 'AI workflow · In development',
    title: 'Meeting Preparation Assistant',
    description:
      'A meeting preparation workflow that gathers context and turns scattered information into a clearer brief.',
    image: {
      src: '/assets/projects/meeting-prep/meeting-prep-overview.png',
      alt: 'Meeting Preparation Assistant showing a meeting list beside a generated meeting brief.',
      className: 'home-project-media--meeting',
    },
  },
]

const zoruneCapabilities = [
  {
    title: 'Operational workspaces',
    description:
      'Zorune is built around shared workspaces where organizations, projects, tasks, and day-to-day planning can live together instead of being split across separate tools.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M4.5 18.5V7.75A2.25 2.25 0 0 1 6.75 5.5h10.5A2.25 2.25 0 0 1 19.5 7.75V18.5" />
        <path d="M9 9.5h6" />
        <path d="M9 13h3.5" />
        <path d="M7.5 18.5h9" />
      </svg>
    `,
  },
  {
    title: 'Connected knowledge',
    description:
      'Notes, work objects, and team context are meant to stay close to each other so important information does not disappear into disconnected documents and side systems.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M7.25 5.5h9.5A2.25 2.25 0 0 1 19 7.75v8.5a2.25 2.25 0 0 1-2.25 2.25H11l-4 3v-4H7.25A2.25 2.25 0 0 1 5 15.25v-7.5A2.25 2.25 0 0 1 7.25 5.5Z" />
        <path d="M8.75 9.25h6.5" />
        <path d="M8.75 12.5h5" />
      </svg>
    `,
  },
  {
    title: 'Calm coordination',
    description:
      'Realtime updates and notifications support collaboration, but the goal is measured coordination rather than creating a louder or more distracting interface.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 4.75a4 4 0 0 1 4 4v1.25c0 .72.2 1.43.56 2.06l1.04 1.77A1.5 1.5 0 0 1 16.31 16H7.69a1.5 1.5 0 0 1-1.29-2.17l1.04-1.77c.36-.63.56-1.34.56-2.06V8.75a4 4 0 0 1 4-4Z" />
        <path d="M10 18a2 2 0 0 0 4 0" />
      </svg>
    `,
  },
]

const zoruneDecisions = [
  {
    title: 'Reduce complexity before adding capability',
    description:
      'Simplifying workflows often mattered more than adding another feature. The clearest product decisions were usually the ones that removed friction.',
  },
  {
    title: 'Product clarity is part of technical quality',
    description:
      'A technically correct implementation was not enough if the experience still felt confusing. Interface clarity became part of the engineering standard.',
  },
  {
    title: 'Complete products reveal real trade-offs',
    description:
      'Building across frontend, backend, data, and real-time systems made trade-offs concrete in a way isolated exercises never do.',
  },
]

const zoruneArchitecture = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['NestJS', 'REST API'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Prisma'],
  },
  {
    title: 'Realtime',
    items: ['Socket.IO'],
  },
]

const semanticCapabilities = [
  {
    title: 'Semantic source-text review',
    description:
      'The agent reviews human-written comments, notes, and documentation inside one supported source file per run so risky language can be surfaced before review or release.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M10 5.5H7.75A2.25 2.25 0 0 0 5.5 7.75v8.5A2.25 2.25 0 0 0 7.75 18.5h8.5a2.25 2.25 0 0 0 2.25-2.25V14" />
        <path d="M14.5 5.5h4v4" />
        <path d="M18.5 5.5 11.75 12.25" />
        <path d="M8.75 14.5h4.5" />
      </svg>
    `,
  },
  {
    title: 'Configurable review boundaries',
    description:
      'Project context and sensitive terms are loaded from configuration files, which keeps the review scoped, inspectable, and easier to adapt without changing the core pipeline.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M7.5 6.5h9" />
        <path d="M7.5 12h9" />
        <path d="M7.5 17.5h4.5" />
        <path d="M5.5 6.5h0" />
        <path d="M5.5 12h0" />
        <path d="M5.5 17.5h0" />
        <path d="M18 16.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" />
      </svg>
    `,
  },
  {
    title: 'Structured audit reporting',
    description:
      'Findings are returned in structured outputs and written into a Markdown audit report so the result stays reviewable, explainable, and useful in a real workflow.',
    icon: `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M8 5.5h6.25L18.5 9.75V18A2 2 0 0 1 16.5 20H8A2 2 0 0 1 6 18V7.5a2 2 0 0 1 2-2Z" />
        <path d="M14 5.5V10h4.5" />
        <path d="M9 13h6" />
        <path d="M9 16h4.25" />
      </svg>
    `,
  },
]

const semanticDecisions = [
  {
    title: 'Architecture mattered more than prompting alone',
    description:
      'The useful part of the system was not only the model call. Extraction, context loading, validation, and reporting created the boundaries that made the review output trustworthy.',
  },
  {
    title: 'Deterministic validation stays in the loop',
    description:
      'Semantic review was paired with deterministic checks so the pipeline could produce stable baseline behavior instead of relying entirely on model interpretation.',
  },
  {
    title: 'Evaluation had to be measurable',
    description:
      'A convincing demo was not enough. The project used controlled test cases and a broader repository-style benchmark to check behavior across multiple risk categories.',
  },
  {
    title: 'Configuration was safer than hardcoding',
    description:
      'Context files and sensitive-term configuration made the review boundary easier to inspect and adapt without hiding project-specific assumptions inside the implementation.',
  },
]

const semanticArchitecture = [
  {
    title: 'Runtime',
    items: ['Python CLI'],
  },
  {
    title: 'Review',
    items: ['Google ADK', 'Gemini / deterministic'],
  },
  {
    title: 'Configuration',
    items: ['Project-context YAML', 'Sensitive-terms YAML'],
  },
  {
    title: 'Outputs',
    items: ['Structured findings', 'Markdown audit report'],
  },
]

const meetingWorkflow = [
  {
    number: '01',
    title: 'Select an upcoming meeting',
    description: 'The user begins from the meeting list.',
  },
  {
    number: '02',
    title: 'Gather relevant context',
    description: 'Useful information is collected from connected sources.',
  },
  {
    number: '03',
    title: 'Generate a concise brief',
    description:
      'The most relevant details are organized into a calm, scannable preparation view.',
  },
  {
    number: '04',
    title: 'Add personal notes',
    description: 'The user can keep their own context alongside the generated brief.',
  },
]

const meetingPrinciples = [
  {
    title: 'Surface what matters',
    description:
      'Prioritize relevant context rather than showing everything available.',
  },
  {
    title: 'Reduce preparation time',
    description:
      'Make it faster to understand what matters before the meeting begins.',
  },
  {
    title: 'Keep the brief calm',
    description:
      'Present information in a clear, focused format that is easy to act on.',
  },
]

const projectMeta = {
  [routes.home]: {
    title: 'Philip Agné — Full-Stack Developer',
    description:
      'Portfolio of Philip Agné, a full-stack developer building thoughtful software, AI-assisted workflows, and practical digital products.',
  },
  [routes.zorune]: {
    title: 'Zorune — Philip Agné',
    description:
      'Case study for Zorune, a collaborative operations workspace designed and built by Philip Agné.',
  },
  [routes.semantic]: {
    title: 'Semantic Compliance Review Agent — Philip Agné',
    description:
      'Case study for an AI-assisted CLI review agent focused on deterministic validation and measurable evaluation.',
  },
  [routes.meeting]: {
    title: 'Meeting Preparation Assistant — Philip Agné',
    description:
      'An in-development product page for a meeting preparation assistant by Philip Agné.',
  },
}

const normalizePath = (pathname) => {
  if (!pathname || pathname === '/') {
    return routes.home
  }

  return pathname.replace(/\/+$/, '')
}

const setDocumentMeta = (pathname) => {
  const meta = projectMeta[pathname] ?? projectMeta[routes.home]
  document.title = meta.title

  const descriptionTag = document.querySelector('meta[name="description"]')

  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description)
  }
}

const renderSectionHeading = (eyebrow, title, body) => `
  <div class="section-heading">
    <p class="eyebrow">${eyebrow}</p>
    <h2>${title}</h2>
    ${body ? `<p class="section-copy">${body}</p>` : ''}
  </div>
`

const renderHeader = (pathname, options = {}) => {
  const onHome = pathname === routes.home
  const workHref = onHome ? '#work' : `${routes.home}#work`
  const aboutHref = onHome ? '#about' : `${routes.home}#about`
  const contactHref = onHome ? '#contact' : `${routes.home}#contact`
  const showSocials = options.showSocials ?? !onHome

  return `
    <header class="site-header${options.home ? ' site-header--home' : ''}">
      <a class="site-mark" href="${routes.home}">Philip Agné</a>
      <div class="header-links">
        <nav class="site-nav" aria-label="Primary">
          <a href="${workHref}">Work</a>
          <a href="${aboutHref}">About</a>
          <a href="${contactHref}">Contact</a>
        </nav>
        ${
          showSocials
            ? `
              <div class="site-socials" aria-label="External links">
                <a href="${links.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
                <a href="${links.linkedin}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </div>
            `
            : ''
        }
      </div>
    </header>
  `
}

const renderFooter = (options = {}) => `
  <footer class="site-footer${options.home ? ' site-footer--home' : ''}" id="${options.home ? 'contact' : ''}">
    ${
      options.home
        ? `
          <div class="home-footer-links">
            <a href="${links.contact}">Email</a>
            <a href="${links.linkedin}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="${links.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
          </div>
        `
        : `
          <p>Philip Agné</p>
          <p>${new Date().getFullYear()}</p>
          <div class="site-footer-links">
            <a href="${links.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a href="${links.linkedin}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </div>
        `
    }
  </footer>
`

const renderScreenshotFigure = ({
  src,
  alt,
  caption,
  kind = 'app',
  buttonLabel = 'Open larger project image',
}) => `
  <figure class="project-figure project-figure--${kind}">
    <button
      class="project-image-button project-image-button--${kind}"
      type="button"
      data-lightbox-src="${src}"
      data-lightbox-alt="${alt}"
      aria-label="${buttonLabel}"
    >
      <img src="${src}" alt="${alt}" />
    </button>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>
`

const renderInlineLinks = (items) => `
  <div class="inline-links">
    ${items
      .map(
        (item) =>
          `<a href="${item.href}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}${item.label ? ` aria-label="${item.label}"` : ''}>${item.text}</a>`,
      )
      .join('')}
  </div>
`

const renderProjectHero = ({ eyebrow, title, summary, status, hideEyebrow = false }) => `
  <section class="project-hero">
    <div class="project-hero-copy">
      ${eyebrow && !hideEyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1>${title}</h1>
      <p class="project-hero-summary">${summary}</p>
      ${status ? `<p class="project-status-pill">${status}</p>` : ''}
    </div>
    <a class="back-link" href="${routes.home}#work">Back to selected work</a>
  </section>
`

const renderCaseStudyIntro = (title, body) => `
  <section class="case-study-intro">
    <h2>${title}</h2>
    <p>${body}</p>
  </section>
`

const renderFeatureGrid = (items) => `
  <div class="feature-grid">
    ${items
      .map(
        (item) => `
          <article class="feature-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderStackStrip = (items) => `
  <section class="architecture-strip" aria-label="System architecture">
    ${items
      .map(
        (item) => `
          <article class="architecture-item">
            <p>${item.label}</p>
            <span>${item.value}</span>
          </article>
        `,
      )
      .join('')}
  </section>
`

const renderLessonBlocks = (items) => `
  <div class="lesson-grid">
    ${items
      .map(
        (item) => `
          <article class="lesson-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderProjectStateList = (items) => `
  <div class="state-list">
    ${items.map((item) => `<span>${item}</span>`).join('')}
  </div>
`

const renderEditorialList = (items) => `
  <div class="editorial-list">
    ${items
      .map(
        (item) => `
          <article class="editorial-item">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderEditorialColumns = (items) => `
  <div class="editorial-columns">
    ${items
      .map(
        (item) => `
          <article class="editorial-column">
            <h3>${item.title}</h3>
            <div class="editorial-column-copy">
              ${item.items.map((value) => `<p>${value}</p>`).join('')}
            </div>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderDecisionStack = (items) => `
  <div class="decision-stack">
    ${items
      .map(
        (item) => `
          <article class="decision-block">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderCapabilityTriptych = (items) => `
  <div class="capability-triptych" aria-label="Key capabilities">
    ${items
      .map(
        (item) => `
          <article class="capability-item">
            <div class="capability-marker" aria-hidden="true">
              ${item.icon}
            </div>
            <div class="capability-copy">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderFlow = (items) => `
  <ol class="flow-strip">
    ${items.map((item) => `<li>${item}</li>`).join('')}
  </ol>
`

const renderWorkflowGrid = (items) => `
  <div class="workflow-grid">
    ${items
      .map(
        (item) => `
          <article class="workflow-card">
            <p>${item.number}</p>
            <h3>${item.title}</h3>
            <span>${item.description}</span>
          </article>
        `,
      )
      .join('')}
  </div>
`

const renderHomeProjectLink = (project) => `
  <a class="home-project-link${project.featured ? ' home-project-link--featured' : ''}" href="${project.route}">
    <div class="home-project-media ${project.image.className}">
      <img src="${project.image.src}" alt="${project.image.alt}" />
    </div>
    <div class="home-project-copy">
      <p class="home-project-label">${project.category}</p>
      <h3>${project.title}</h3>
    </div>
  </a>
`

const renderHomePage = () => `
  <main class="page-shell page-shell--home">
    ${renderHeader(routes.home, { home: true, showSocials: false })}

    <section class="home-hero">
      <div class="home-hero-copy">
        <h1>Building thoughtful software for real problems.</h1>
        <p>
          I’m Philip Agné, a self-taught full-stack developer focused on product thinking, architecture, AI-assisted workflows, and calm user experiences.
        </p>
      </div>

      <figure class="home-hero-portrait">
        <div class="home-hero-portrait-frame">
          <img src="/images/philip-portrait.png" alt="Portrait of Philip Agné" />
        </div>
      </figure>
    </section>

    <section class="home-projects" id="work">
      <div class="home-section-intro">
        <h2>Products first, with the engineering behind them.</h2>
      </div>
      <div class="home-projects-grid">
        ${homeProjects.map((project) => renderHomeProjectLink(project)).join('')}
      </div>
    </section>

    <section class="home-support" id="about">
      <div class="home-support-intro">
        <h2>A practical path into software.</h2>
      </div>
      <div class="home-support-copy">
        <p>
          After 17 years in hospitality and healthcare, I moved into software development to pursue a long-standing interest in technology, systems, and problem-solving.
        </p>
        <p>
          I learn by building complete products rather than isolated exercises, which means working through product decisions, interface design, frontend and backend architecture, databases, evaluation, and the trade-offs required to turn an idea into something usable.
        </p>
      </div>
    </section>

    ${renderFooter({ home: true })}
  </main>
`

const renderZorunePage = () => `
  <main class="page-shell page-shell--project page-shell--case-study page-shell--zorune">
    ${renderHeader(routes.zorune)}
    ${renderProjectHero({
      title: 'Zorune',
      summary:
        'A collaborative operations workspace that brings projects, tasks, notes, teams, and everyday workflows into one calmer system.',
    })}

    <section class="case-study-hero-media">
      ${renderScreenshotFigure({
        src: '/assets/projects/zorune/zorune-workspace.png',
        alt: 'Current Zorune workspace showing projects, tasks, and team context.',
        caption: 'Current workspace view from the active Zorune build.',
        kind: 'app',
      })}
    </section>

    <div class="project-content zorune-case-study">
      <section class="case-study-section narrative-pair" aria-label="Problem and solution">
        <article class="narrative-block narrative-block--problem">
          <p class="eyebrow">The problem</p>
          <h2>Operational work often breaks apart across too many tools.</h2>
          <p>
            Many work tools separate information into disconnected systems, which increases context-switching and makes routine work feel heavier than it should. Zorune began as a response to that fragmentation.
          </p>
        </article>

        <article class="narrative-block narrative-block--solution">
          <p class="eyebrow">The solution</p>
          <h2>Bring the essential pieces together without making the product louder.</h2>
          <p>
            Zorune exists because operational software often becomes more complicated as more tools are added around the work. The product idea was to bring the core pieces together in one calmer system, where clarity mattered more than feature accumulation and reducing friction mattered more than adding another surface to manage.
          </p>
        </article>
      </section>

      <section class="case-study-section case-study-section--capabilities">
        <div class="section-heading-inline section-heading-inline--compact">
          <h2>Key capabilities</h2>
        </div>
        ${renderCapabilityTriptych(zoruneCapabilities)}
      </section>

      <section class="case-study-section systems-band" aria-label="Architecture and engineering decisions">
        <div class="systems-band-column systems-band-column--architecture">
          <div class="section-heading-inline section-heading-inline--compact">
            <h2>Architecture</h2>
          </div>
          ${renderEditorialColumns(zoruneArchitecture)}
        </div>

        <div class="systems-band-column systems-band-column--decisions">
          <div class="section-heading-inline section-heading-inline--compact">
            <h2>Engineering decisions</h2>
          </div>
          ${renderDecisionStack(zoruneDecisions)}
        </div>
      </section>

      <section class="case-study-section case-study-section--ending">
        <div class="ending-intro">
          <p>Interested in the project?</p>
        </div>
        ${renderInlineLinks([
          { href: links.appRepo, text: 'Repository', external: true },
          { href: `${routes.home}#work`, text: 'Back to portfolio' },
        ])}
      </section>
    </div>

    ${renderFooter()}
    ${renderLightbox()}
  </main>
`

const renderSemanticPage = () => `
  <main class="page-shell page-shell--project page-shell--case-study page-shell--semantic">
    ${renderHeader(routes.semantic)}
    ${renderProjectHero({
      eyebrow: 'AI AGENT · EVALUATION',
      hideEyebrow: true,
      title: 'Semantic Compliance Review Agent',
      summary:
        'An AI-assisted semantic review tool that detects risky human-written language in repositories before review or release.',
    })}

    <section class="case-study-hero-media">
      ${renderScreenshotFigure({
        src: '/assets/projects/semantic-review-agent/semantic-review-audit.png',
        alt: 'Semantic Compliance Review Agent audit summary showing findings, severity, confidence, and categorized review results.',
        caption: 'Audit summary output from the Semantic Compliance Review Agent.',
        kind: 'app',
      })}
    </section>

    <div class="project-content zorune-case-study">
      <section class="case-study-section narrative-pair" aria-label="Problem and solution">
        <article class="narrative-block narrative-block--problem">
          <p class="eyebrow">The problem</p>
          <h2>Code review tools often miss the human-written language that creates release risk.</h2>
          <p>
            Traditional static analysis is good at checking code correctness, but comments, TODOs, and documentation can still expose credentials, internal names, or unprofessional communication that never appears as an executable bug.
          </p>
        </article>

        <article class="narrative-block narrative-block--solution">
          <p class="eyebrow">The solution</p>
          <h2>Combine semantic analysis with deterministic validation and structured reporting.</h2>
          <p>
            The agent extracts reviewable text, loads project-specific context, and runs semantic review alongside deterministic checks so findings can be explained, validated, and delivered in a report that is useful for human review.
          </p>
        </article>
      </section>

      <section class="case-study-section case-study-section--capabilities">
        <div class="section-heading-inline section-heading-inline--compact">
          <h2>Key capabilities</h2>
        </div>
        ${renderCapabilityTriptych(semanticCapabilities)}
      </section>

      <section class="case-study-section systems-band" aria-label="Architecture and engineering decisions">
        <div class="systems-band-column systems-band-column--architecture">
          <div class="section-heading-inline section-heading-inline--compact">
            <h2>Architecture</h2>
          </div>
          ${renderEditorialColumns(semanticArchitecture)}
        </div>

        <div class="systems-band-column systems-band-column--decisions">
          <div class="section-heading-inline section-heading-inline--compact">
            <h2>Engineering decisions</h2>
          </div>
          ${renderDecisionStack(semanticDecisions)}
        </div>
      </section>

      <section class="case-study-section case-study-section--ending">
        <div class="ending-intro">
          <p>Interested in the project?</p>
        </div>
        ${renderInlineLinks([
          {
            href: links.semanticRepo,
            text: 'View repository →',
            external: true,
            label: 'View the Semantic Compliance Review Agent repository on GitHub',
          },
          {
            href: links.semanticVideo,
            text: 'Watch project video →',
            external: true,
            label: 'Watch the Semantic Compliance Review Agent project video on YouTube',
          },
          {
            href: links.semanticKaggle,
            text: 'Read Kaggle write-up →',
            external: true,
            label: 'Read the Semantic Compliance Review Agent Kaggle write-up',
          },
          { href: `${routes.home}#work`, text: 'Back to selected work →' },
        ])}
      </section>
    </div>

    ${renderFooter()}
    ${renderLightbox()}
  </main>
`

const renderMeetingPage = () => `
  <main class="page-shell page-shell--project">
    ${renderHeader(routes.meeting)}
    ${renderProjectHero({
      eyebrow: 'AI WORKFLOW · IN DEVELOPMENT',
      title: 'Meeting Prep Assistant',
      summary:
        'A focused assistant that gathers relevant context before meetings and turns scattered information into a clear preparation brief.',
      status: 'In development',
    })}

    ${renderScreenshotFigure({
      src: '/assets/projects/meeting-prep/meeting-prep-overview.png',
      alt: 'Meeting Prep Assistant showing a meeting list on the left and a generated meeting brief with key information and notes on the right.',
      caption: 'Current interface direction for the Meeting Preparation Assistant.',
      kind: 'wide-app',
    })}

    <div class="project-content">
      ${renderCaseStudyIntro(
        'The problem',
        'Meeting context is often scattered across calendar events, messages, files, and personal notes. Preparing well takes time, and important details are easy to miss.',
      )}

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>The workflow</h2>
        </div>
        ${renderWorkflowGrid(meetingWorkflow)}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Product principles</h2>
        </div>
        ${renderFeatureGrid(meetingPrinciples)}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Current state</h2>
          <p>
            The current build establishes the interface and core preparation workflow. The next stage is refining the retrieval logic, source integrations, and presentation quality.
          </p>
          <p>
            Calendar, Gmail, Drive, and personal notes represent the current source direction shown in the workflow.
          </p>
        </div>
      </section>
    </div>

    ${renderFooter()}
    ${renderLightbox()}
  </main>
`

const renderNotFound = () => `
  <main class="page-shell page-shell--project">
    ${renderHeader(normalizePath(window.location.pathname))}
    <section class="project-hero">
      <div class="project-hero-copy">
        <p class="eyebrow">Page not found</p>
        <h1>This page doesn’t exist.</h1>
        <p class="project-hero-summary">The project link may have changed, but the portfolio homepage is still available.</p>
      </div>
      <a class="back-link" href="${routes.home}">Back home</a>
    </section>
    ${renderFooter()}
  </main>
`

const renderLightbox = () => `
  <div class="lightbox" data-lightbox hidden>
    <button class="lightbox-backdrop" type="button" aria-label="Close image preview" data-lightbox-close></button>
    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
      <button class="lightbox-close" type="button" aria-label="Close image preview" data-lightbox-close>
        <span></span>
        <span></span>
      </button>
      <img src="" alt="" data-lightbox-image />
    </div>
  </div>
`

const setupLightbox = () => {
  const modal = document.querySelector('[data-lightbox]')
  const modalImage = document.querySelector('[data-lightbox-image]')
  const closeTargets = document.querySelectorAll('[data-lightbox-close]')
  const triggers = document.querySelectorAll('[data-lightbox-src]')

  if (!modal || !modalImage || !triggers.length) {
    return
  }

  const open = (src, alt) => {
    modalImage.src = src
    modalImage.alt = alt || ''
    modal.hidden = false
    document.body.classList.add('lightbox-open')
  }

  const close = () => {
    modal.hidden = true
    modalImage.src = ''
    modalImage.alt = ''
    document.body.classList.remove('lightbox-open')
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      open(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt)
    })
  })

  closeTargets.forEach((target) => {
    target.addEventListener('click', close)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      close()
    }
  })
}

const renderApp = () => {
  const pathname = normalizePath(window.location.pathname)

  setDocumentMeta(pathname)

  switch (pathname) {
    case routes.home:
      app.innerHTML = renderHomePage()
      break
    case routes.zorune:
      app.innerHTML = renderZorunePage()
      break
    case routes.semantic:
      app.innerHTML = renderSemanticPage()
      break
    case routes.meeting:
      app.innerHTML = renderMeetingPage()
      break
    default:
      app.innerHTML = renderNotFound()
      break
  }

  setupLightbox()
}

renderApp()
