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
    title: 'Authentication and role-aware access',
    description:
      'Access control was treated as part of the product foundation, not something to bolt on later.',
  },
  {
    title: 'Multi-tenant organizations and workspaces',
    description:
      'The application structure supports organizations, shared workspaces, and permission-aware collaboration.',
  },
  {
    title: 'Projects, tasks, notes, and team workflows',
    description:
      'Core work objects live together in one system rather than across disconnected tools and views.',
  },
  {
    title: 'Real-time notifications and updates',
    description:
      'Important activity can surface immediately without requiring constant refreshing or manual checking.',
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

const zoruneCurrentState = [
  'Authentication',
  'Role-based access',
  'Multi-tenant organizations',
  'Projects',
  'Tasks',
  'Notes',
  'Team workspaces',
  'Real-time notifications',
]

const semanticRiskCategories = [
  {
    title: 'Security Hazards',
    description:
      'Potential credentials, unsafe operational language, or risky implementation notes.',
  },
  {
    title: 'Disclosure Risks',
    description:
      'Internal codenames, confidential project references, or sensitive contextual information.',
  },
  {
    title: 'Professionalism Risks',
    description:
      'Unprofessional, careless, or inappropriate language in repository content.',
  },
]

const semanticArchitecture = [
  'Local text extraction',
  'Configurable scoped review',
  'Deterministic validation',
  'Structured outputs',
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

const renderProjectHero = ({ eyebrow, title, summary, status }) => `
  <section class="project-hero">
    <div class="project-hero-copy">
      <p class="eyebrow">${eyebrow}</p>
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
  <main class="page-shell page-shell--project">
    ${renderHeader(routes.zorune)}
    ${renderProjectHero({
      eyebrow: 'FULL-STACK PRODUCT',
      title: 'Zorune',
      summary:
        'A collaborative operations workspace that brings projects, tasks, notes, teams, and everyday workflows into one calmer system.',
    })}

    ${renderScreenshotFigure({
      src: '/assets/projects/zorune/zorune-workspace.png',
      alt: 'Current Zorune workspace showing projects, tasks, and team context.',
      caption: 'Current workspace view from the active Zorune build.',
      kind: 'app',
    })}

    <div class="project-content">
      ${renderCaseStudyIntro(
        'The problem',
        'Many work tools separate information into disconnected systems, which increases context-switching and makes routine work feel heavier than it should. Zorune is an attempt to bring core operational workflows together in a way that feels more coherent and less noisy.',
      )}

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>What I built</h2>
          <p>
            Zorune grew into a full-stack product exercise spanning access control, shared workspaces, connected work objects, and real-time updates.
          </p>
        </div>
        ${renderFeatureGrid(zoruneCapabilities)}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>System architecture</h2>
        </div>
        ${renderStackStrip([
          { label: 'Frontend', value: 'React · TypeScript' },
          { label: 'Backend', value: 'NestJS · REST APIs' },
          { label: 'Data', value: 'PostgreSQL · Prisma' },
          { label: 'Real-time', value: 'Socket.IO' },
        ])}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Product decisions</h2>
        </div>
        ${renderLessonBlocks(zoruneDecisions)}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Current state</h2>
          <p>
            The current build includes the core system foundations and workflow areas below.
          </p>
        </div>
        ${renderProjectStateList(zoruneCurrentState)}
      </section>

      <section class="case-study-section case-study-section--links">
        <div class="section-heading-inline">
          <h2>Project links</h2>
        </div>
        ${renderInlineLinks([
          { href: links.appRepo, text: 'View repository', external: true },
          { href: links.landingPage, text: 'View landing page', external: true },
        ])}
      </section>
    </div>

    ${renderFooter()}
    ${renderLightbox()}
  </main>
`

const renderSemanticPage = () => `
  <main class="page-shell page-shell--project">
    ${renderHeader(routes.semantic)}
    ${renderProjectHero({
      eyebrow: 'AI AGENT · EVALUATION',
      title: 'Semantic Review Agent',
      summary:
        'A CLI agent that identifies potentially risky language in software repositories across security, disclosure, and professionalism categories.',
    })}

    ${renderScreenshotFigure({
      src: '/assets/projects/semantic-review-agent/semantic-review-audit.png',
      alt: 'Terminal-style executive summary from the Semantic Review Agent showing issues found, severity, categories, and audit matrix.',
      caption: 'Audit summary output from the Semantic Compliance Review Agent.',
      kind: 'terminal',
    })}

    <div class="project-content">
      ${renderCaseStudyIntro(
        'The problem',
        'Repository text can create security, disclosure, or professionalism risk even when the code itself is technically valid. This project focuses on reviewing that material systematically so those signals can be surfaced, inspected, and evaluated.',
      )}

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Review pipeline</h2>
        </div>
        ${renderFlow([
          'Repository files',
          'Local text extraction',
          'Category review',
          'Deterministic validation',
          'Structured findings',
          'Benchmark evaluation',
        ])}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Risk categories</h2>
        </div>
        ${renderFeatureGrid(semanticRiskCategories)}
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Architecture</h2>
        </div>
        <div class="state-list state-list--grid">
          ${semanticArchitecture.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="case-study-section">
        <div class="section-heading-inline">
          <h2>Evaluation</h2>
          <p>
            The final evaluation used a 20-case repository benchmark to test the review pipeline across broader wording and risk-category variety.
          </p>
        </div>
        <div class="principle-block">
          <p>Measurable evaluation mattered more than a convincing demonstration.</p>
        </div>
      </section>

      <section class="case-study-section">
        <div class="lesson-quote">
          <p>
            An agent is not only the LLM. Trust comes from the architecture around it: extraction, configuration, validation, deterministic components, and structured outputs.
          </p>
        </div>
      </section>

      <section class="case-study-section case-study-section--links">
        <div class="section-heading-inline">
          <h2>Project links</h2>
        </div>
        ${renderInlineLinks([
          {
            href: links.semanticRepo,
            text: 'View repository',
            external: true,
            label: 'View the Semantic Review Agent repository on GitHub',
          },
          {
            href: links.semanticVideo,
            text: 'Watch project video',
            external: true,
            label: 'Watch the Semantic Review Agent project video on YouTube',
          },
          {
            href: links.semanticKaggle,
            text: 'Read the Kaggle write-up',
            external: true,
            label: 'Read the Semantic Review Agent Kaggle write-up',
          },
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
