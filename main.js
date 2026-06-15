const app = document.querySelector('#app')

const links = {
  landingPage: 'https://zorune-landingpage.vercel.app/',
  appRepo: 'https://github.com/philipvagne/Zorune',
  linkedin: 'https://www.linkedin.com/in/philip-agn%C3%A9-a86679411/',
  github: 'https://github.com/philipvagne',
  contact: 'mailto:Philipv.agne@gmail.com',
}

const builtItems = [
  'Designed and implemented user authentication and role-based access control',
  'Built a multi-tenant architecture supporting organizations, workspaces, projects, tasks, notes, and permissions',
  'Developed real-time notification systems using WebSockets',
  'Created complete project, task, and note workflows spanning frontend, backend, database, and real-time updates',
  'Designed and maintained the PostgreSQL database structure using Prisma ORM',
  'Built REST APIs and backend services using NestJS',
]

const lessonItems = [
  {
    title: 'Building software is often about removing complexity',
    description:
      'The most valuable improvements usually come from simplifying workflows rather than adding features.',
    number: '01',
  },
  {
    title: 'Product decisions matter as much as technical decisions',
    description:
      'A technically correct solution is not always the best user experience. Building Zorune has taught me to think about usability and product design alongside engineering decisions.',
    number: '02',
  },
  {
    title: 'Real projects teach lessons that tutorials cannot',
    description:
      'Building Zorune has taught me more about architecture, databases, system design, tradeoffs, and long-term thinking than isolated tutorials ever could.',
    number: '03',
  },
]

const renderBuiltItems = () => builtItems.map((item) => `<li>${item}</li>`).join('')

const renderStackItems = () => `
  <div class="stack-group">
    <h4>Frontend</h4>
    <ul class="stack-grid">
      <li>React</li>
      <li>TypeScript</li>
    </ul>
  </div>
  <div class="stack-group">
    <h4>Backend</h4>
    <ul class="stack-grid">
      <li>NestJS</li>
      <li>REST APIs</li>
      <li>Socket.IO</li>
    </ul>
  </div>
  <div class="stack-group">
    <h4>Database</h4>
    <ul class="stack-grid">
      <li>PostgreSQL</li>
      <li>Prisma</li>
    </ul>
  </div>
`

const renderLessonItems = () =>
  lessonItems
    .map(
      (item) => `
        <li>
          <span class="focus-number">${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </li>
      `,
    )
    .join('')

app.innerHTML = `
  <main class="page">
    <header class="site-header">
      <a class="site-mark" href="#top">Philip Agné</a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="top">
      <div class="hero-copy">
        <h1>Building real software from the ground up.</h1>
        <p class="hero-role">
          Self-taught developer building real software, documenting the journey, and learning through execution.
        </p>
        <p class="hero-text">
          Building software publicly while learning architecture, product design, and full-stack development.
        </p>
        <div class="hero-links">
          <a href="#project">View Zorune</a>
          <a href="${links.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href="${links.linkedin}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <figure class="hero-portrait">
        <div class="hero-portrait-surface">
          <img src="/images/philip-portrait.png" alt="Portrait of Philip Agne" />
        </div>
      </figure>
    </section>

    <section class="currently-strip" aria-label="Current activity">
      <p class="section-label">Currently</p>
      <div class="currently-list">
        <div class="currently-item">
          <span class="currently-mark"></span>
          <div>
            <strong>Building Zorune</strong>
            <p>A full-stack workspace product built in public.</p>
          </div>
        </div>
        <div class="currently-item">
          <span class="currently-mark"></span>
          <div>
            <strong>Completing Scrimba's Full Stack Developer Path</strong>
            <p>Focusing on JavaScript, React, backend development, and databases.</p>
          </div>
        </div>
        <div class="currently-item">
          <span class="currently-mark"></span>
          <div>
            <strong>Participating in Google's AI Coding Course through Kaggle</strong>
            <p>Exploring modern AI-assisted development workflows.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-grid" id="about">
      <div class="section-intro">
        <p class="section-label">About</p>
        <h2>Learning by building software that people could actually use.</h2>
      </div>

      <div class="about-copy">
        <p>
          After 17 years working in hospitality and healthcare, I decided to pursue a long-standing interest in technology and software development.
        </p>
        <p>
          I've always enjoyed understanding how things work, solving problems, and improving systems. Over time, that interest in computers and technology grew into something I wanted to build a future around.
        </p>
        <p>
          Today I'm focused on full-stack development, using Zorune as a practical way to learn software architecture, backend systems, databases, product design, and the realities of building software for real users.
        </p>
        <p>
          My goal isn't simply to learn how to code. It's to become the kind of developer who can take an idea, build it, improve it, and continuously learn through the process.
        </p>
      </div>
    </section>

    <section class="about-grid why-grid" id="why-development">
      <div class="section-intro">
        <p class="section-label">Why Development?</p>
        <h2>Why I chose to move into software.</h2>
      </div>

      <div class="about-copy">
        <p>
          After years working in hospitality and healthcare, I found myself most interested in solving problems, improving systems, and helping people work through challenges.
        </p>
        <p>
          Software development combines all three.
        </p>
        <p>
          I've always been drawn to computers and technology, and eventually decided to turn that interest into something I could build a future around. Rather than only studying theory, I chose to learn by building real products and documenting the process publicly.
        </p>
        <p>
          Building Zorune is how I'm turning that decision into reality.
        </p>
      </div>
    </section>

    <section class="philosophy-strip">
      <p class="section-label">Philosophy</p>
      <p class="philosophy-text">
        I enjoy building software that helps people without adding unnecessary complexity. My goal is to create tools that feel calm, clear, and practical to use.
      </p>
    </section>

    <section class="project-case" id="project">
      <div class="project-heading">
        <p class="section-label">Featured Project</p>
        <h2>Zorune</h2>
        <p class="project-summary">
          Zorune is a collaborative workspace platform in active development. It is being built to bring projects, tasks, notes, and team organization into one calmer system.
        </p>
        <div class="project-status">
          <h3>Current Status</h3>
          <p>
            Active development — authentication, projects, tasks, notes, team workspaces, real-time notifications, backend services, and database architecture are currently implemented.
          </p>
        </div>
        <div class="project-why">
          <h3>Why I'm building Zorune</h3>
          <p>
            Zorune is more than a project for me. It's the environment I use to learn software development through real-world problems.
          </p>
          <p>
            Every feature forces me to think about product design, user experience, backend architecture, databases, and how different systems work together.
          </p>
          <p>
            Building Zorune has taught me more than any tutorial because every decision has real consequences and tradeoffs.
          </p>
        </div>
      </div>

      <div class="project-layout">
        <button
          class="project-visual"
          type="button"
          data-lightbox-src="/images/zorune-app-preview.png"
          data-lightbox-alt="Current Zorune workspace screenshot"
          aria-label="Open full-size Zorune workspace screenshot"
        >
          <img src="/images/zorune-app-preview.png" alt="Current Zorune workspace screenshot" />
        </button>

        <div class="project-details-grid">
          <section class="project-block">
            <h3>Technical Foundation</h3>
            <ul class="editorial-list">
              ${renderBuiltItems()}
            </ul>
          </section>

          <section class="project-block">
            <h3>Core stack</h3>
            ${renderStackItems()}
          </section>
        </div>

        <div class="project-links">
          <a href="${links.landingPage}" target="_blank" rel="noreferrer noopener">Landing Page</a>
          <a href="${links.appRepo}" target="_blank" rel="noreferrer noopener">View Repository</a>
        </div>
      </div>
    </section>

    <section class="journey-section" id="journey">
      <div class="section-intro">
        <p class="section-label">Development Journey</p>
        <h2>Building Zorune in public.</h2>
      </div>

      <div class="journey-layout">
        <div class="journey-visuals">
          <article class="journey-shot journey-shot-old">
            <div class="journey-meta">
              <span>May 2026</span>
              <h3>Turned a learning project into a real product idea</h3>
              <p>
                Started building Zorune as more than a coding exercise. Defined the vision of creating a calmer workspace for projects, tasks, notes, and team organization.
              </p>
            </div>
            <button
              class="journey-image-button"
              type="button"
              data-lightbox-src="/images/zorune-app-old.png"
              data-lightbox-alt="Early Zorune workspace prototype"
              aria-label="Open full-size early Zorune workspace prototype"
            >
              <img src="/images/zorune-app-old.png" alt="Early Zorune workspace prototype" />
            </button>
          </article>

          <div class="journey-divider" aria-hidden="true"></div>

          <article class="journey-shot journey-shot-current">
            <div class="journey-meta">
              <span>June 2026</span>
              <h3>Current Zorune workspace</h3>
              <p>
                The current version brings together projects, tasks, notes, team workspaces, authentication, notifications, and backend services into a single evolving platform.
              </p>
            </div>
            <button
              class="journey-image-button"
              type="button"
              data-lightbox-src="/images/zorune-app-preview.png"
              data-lightbox-alt="Current Zorune workspace"
              aria-label="Open full-size current Zorune workspace"
            >
              <img src="/images/zorune-app-preview.png" alt="Current Zorune workspace" />
            </button>
          </article>
        </div>

        <div class="journey-timeline">
          <article>
            <p>May 2026</p>
            <h3>Published the first public version of the landing page</h3>
            <p>
              Created a dedicated portfolio and landing page to document development publicly and communicate the product direction.
            </p>
          </article>
          <article>
            <p>June 2026</p>
            <h3>Built the first complete workspace experience</h3>
            <p>
              Connected projects, tasks, notes, and team workspaces into a single workflow for the first time.
            </p>
          </article>
          <article>
            <p>June 2026</p>
            <h3>Expanded into a full-stack application</h3>
            <p>
              Implemented backend services, authentication, database architecture, real-time notifications, and multi-tenant organization support.
            </p>
          </article>
          <article>
            <p>Current Focus</p>
            <h3>Preparing Zorune for real users</h3>
            <p>
              Continuing development while refining the product experience, architecture, workflows, and overall usability through public iteration and feedback.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="focus-section">
      <div class="section-intro">
        <p class="section-label">What I've Learned So Far</p>
        <h2>What building Zorune has already taught me.</h2>
      </div>

      <ul class="focus-list">
        ${renderLessonItems()}
      </ul>
    </section>

    <footer class="contact-footer" id="contact">
      <div class="contact-copy">
        <p class="section-label">Links and Contact</p>
        <h2>Building in public. Learning every day.</h2>
        <p>I'm always open to feedback, collaboration, and new opportunities.</p>
        <p>This portfolio reflects an ongoing journey. I'll continue building, learning, and sharing what I create along the way.</p>
        <div class="contact-links">
          <a href="${links.github}" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href="${links.linkedin}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href="${links.contact}">Email me</a>
        </div>
      </div>
    </footer>

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
  </main>
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

setupLightbox()
