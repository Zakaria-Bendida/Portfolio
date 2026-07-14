import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Calendar,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  FileText,
  Flag,
  Github,
  Globe,
  GraduationCap,
  HeartPulse,
  Info,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Map,
  MapPin,
  MapPinned,
  Menu,
  MonitorSmartphone,
  Moon,
  Network,
  Phone,
  Radio,
  Rocket,
  Route,
  Server,
  Share2,
  ShieldCheck,
  Sparkles,
  Sun,
  Table2,
  Twitter,
  Upload,
  Users,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { profile } from "./profile";

const navItems = ["About", "Work", "Services", "Process", "Contact"];

// Manual overrides for skill icon filenames that don't map cleanly from the
// display name (e.g. "Node.js" -> nodejs, "A*" -> astar). Everything else
// falls back to a slugified version of the name. Icons are expected at
// /images/{slug}.png — drop matching files into the public/images folder.
// Skills that have an official logo: rendered as an <img> from
// /images/{slug}.png — drop matching files into the public/images folder.
const skillIconOverrides = {
  React: "react",
  "Next.js": "nextjs",
  JavaScript: "javascript",
  "Node.js": "nodejs",
  Express: "express",
  PHP: "php",
  Java: "java",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  MongoDB: "mongodb",
  HTML: "html",
  CSS: "css",
  Figma: "figma",
  Vite: "vite",
  "React Native": "react-native",
  Expo: "expo",
  GitHub: "github",
  Git: "git",
};

// Skills without a recognizable brand logo: rendered with a plain Lucide
// icon instead, so the grid stays clean rather than showing a mismatched
// or missing logo.
const skillLucideIcons = {
  PostGIS: MapPinned,
  pgRouting: Route,
  "Relational Databases": Table2,
  "Database Design": Database,
  "Form Validation": ShieldCheck,
  Algorithms: Brain,
  "Graph Theory": Share2,
  "A*": Compass,
  Dijkstra: Network,
  "Operating Systems": Cpu,
  Networking: Wifi,
  "Client/Server": Server,
  "Socket.IO": Radio,
  OpenLayers: Map,
  "Responsive Design": MonitorSmartphone,
};

function skillSlug(name) {
  return (
    skillIconOverrides[name] ||
    name
      .toLowerCase()
      .replace(/\+\+/g, "pp")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}

// Reveals elements with the "reveal" class as they scroll into view.
function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const detailIconMap = {
  Route,
  Zap,
  Radio,
  HeartPulse,
  Server,
  Layers,
  Code2,
  Users,
  CalendarClock,
  Upload,
  Flag,
  Database,
};

const socialIconFiles = {
  github: "github",
  linkedin: "linkedin",
  instagram: "instagram",
  x: "twitter",
  email: "mail",
};

function SocialIcon({ name, FallbackIcon, size = 18 }) {
  const imgRef = useRef(null);
  const fallbackRef = useRef(null);

  const handleError = () => {
    if (imgRef.current) imgRef.current.style.display = "none";
    if (fallbackRef.current) fallbackRef.current.style.display = "grid";
  };

  return (
    <>
      <img
        ref={imgRef}
        src={`/images/${socialIconFiles[name]}.png`}
        alt=""
        className="social-icon-img"
        loading="lazy"
        onError={handleError}
      />
      <span className="social-icon-fallback" ref={fallbackRef}>
        <FallbackIcon size={size} />
      </span>
    </>
  );
}

function SectionKicker({ children }) {
  return (
    <p className="section-kicker">
      <span className="kicker-mark">
        <span className="dot" />
        <span className="dash" />
      </span>
      {children}
    </p>
  );
}

function RouteField({ className = "route-field" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 560"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M-20 420 C 220 380, 340 460, 520 360 S 860 220, 1220 260" />
      <path d="M-20 140 C 260 200, 420 60, 660 130 S 1000 300, 1220 160" />
      <circle cx="520" cy="360" r="4" />
      <circle cx="660" cy="130" r="4" />
      <circle cx="1000" cy="300" r="4" />
    </svg>
  );
}

function SkillChip({ name }) {
  const iconRef = useRef(null);
  const fallbackRef = useRef(null);
  const LucideIcon = skillLucideIcons[name];

  if (LucideIcon) {
    return (
      <div className="skill-chip">
        <span className="skill-icon skill-icon-lucide">
          <LucideIcon size={22} strokeWidth={1.8} />
        </span>
        <span className="skill-name">{name}</span>
      </div>
    );
  }

  const slug = skillSlug(name);

  const handleError = () => {
    if (iconRef.current) iconRef.current.style.display = "none";
    if (fallbackRef.current) fallbackRef.current.style.display = "grid";
  };

  return (
    <div className="skill-chip">
      <span className="skill-icon">
        <img
          ref={iconRef}
          src={`/images/${slug}.png`}
          alt=""
          loading="lazy"
          onError={handleError}
        />
        <span className="skill-fallback" ref={fallbackRef}>
          {name.slice(0, 2)}
        </span>
      </span>
      <span className="skill-name">{name}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useScrollReveal();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand-avatar">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.photoAlt} />
            ) : (
              profile.name.slice(0, 1)
            )}
          </span>
          {profile.name}
        </a>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <RouteField />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <MapPin size={16} />
                {profile.location} - {profile.availability}
              </p>
              <h1>
                {profile.role} building practical systems with clean interfaces
                and reliable logic.
              </h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  <Mail size={18} />
                  Contact me
                </a>
                <a
                  className="secondary-button"
                  href={profile.socials.cv}
                  download="CV_Bendida_FullStack_DeepNavy.pdf"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>

            <div
              className="profile-panel"
              aria-label="Portfolio visual summary"
            >
              <div className="profile-photo-frame">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.photoAlt} />
                ) : (
                  <div className="profile-photo-fallback">
                    {profile.name.slice(0, 1)}
                  </div>
                )}

                <div className="float-badge float-badge-role">
                  <span className="float-badge-icon">
                    <Code2 size={18} />
                  </span>
                  <span className="float-badge-copy">
                    <strong>{profile.role}</strong>
                    <span>{profile.availability}</span>
                  </span>
                </div>

                <div className="float-badge float-badge-location">
                  <span className="float-badge-icon">
                    <MapPin size={18} />
                  </span>
                  <span className="float-badge-copy">
                    <strong>{profile.location}</strong>
                    <span>Based here</span>
                  </span>
                </div>

                <div className="float-stats-bar">
                  {profile.stats.map((stat, i) => {
                    const StatIcon =
                      [GraduationCap, Layers, Globe][i] || Layers;
                    return (
                      <div className="float-stat" key={stat.label}>
                        <StatIcon size={16} />
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="float-badge float-badge-highlight">
                  <span className="float-badge-icon float-badge-icon-solid">
                    <Rocket size={18} />
                  </span>
                  <span className="float-badge-copy">
                    <strong>{profile.stats[1]?.value}</strong>
                    <span>{profile.stats[1]?.label}</span>
                  </span>
                </div>
              </div>

              <div className="profile-social-row">
                <a
                  href={profile.socials.github}
                  aria-label="GitHub"
                  className="profile-social-link"
                >
                  <SocialIcon name="github" FallbackIcon={Github} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  aria-label="LinkedIn"
                  className="profile-social-link"
                >
                  <SocialIcon name="linkedin" FallbackIcon={Linkedin} />
                </a>
                <a
                  href={profile.socials.instagram}
                  aria-label="Instagram"
                  className="profile-social-link"
                >
                  <SocialIcon name="instagram" FallbackIcon={Instagram} />
                </a>
                <a
                  href={profile.socials.x}
                  aria-label="X"
                  className="profile-social-link"
                >
                  <SocialIcon name="x" FallbackIcon={Twitter} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="profile-social-link"
                >
                  <SocialIcon name="email" FallbackIcon={Mail} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact-section" id="about">
          <div className="section-grid">
            <div className="reveal">
              <SectionKicker>About</SectionKicker>
              <h2>
                Full-stack training with a strong information systems mindset.
              </h2>
            </div>
            <p className="section-copy reveal">{profile.summary}</p>
          </div>
          <div className="highlight-grid">
            {profile.highlights.map((item) => (
              <article className="highlight-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="skills-grid" aria-label="Skills">
            {profile.skills.map((skill) => (
              <SkillChip name={skill} key={skill} />
            ))}
          </div>
        </section>

        <section className="section band" id="work">
          <div className="section-heading reveal">
            <SectionKicker>Selected Work</SectionKicker>
            <h2>Projects built around real roles, rules, and workflows.</h2>
          </div>
          <div className="work-list">
            {profile.projects.map((project, index) => (
              <article className="work-row reveal" key={project.title}>
                <div className="work-main">
                  <div className="work-head">
                    <span className="work-badge">0{index + 1}</span>
                    <p className="work-type">{project.type}</p>
                  </div>
                  <h3 className="work-title">{project.title}</h3>
                  <span className="work-title-rule" aria-hidden="true" />
                  <p className="work-text">{project.text}</p>

                  {project.details ? (
                    <ul className="work-feature-list">
                      {project.details.map((detail) => {
                        const DetailIcon =
                          detailIconMap[detail.icon] || CheckCircle2;
                        return (
                          <li key={detail.title}>
                            <span className="work-feature-icon">
                              <DetailIcon size={17} strokeWidth={1.8} />
                            </span>
                            <span className="work-feature-copy">
                              <strong>{detail.title}</strong>
                              <span>{detail.text}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}

                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="work-footer-row">
                    {project.link || project.image ? (
                      <a
                        className="work-link"
                        href={project.link || project.image}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Voir le projet
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                    {project.note ? (
                      <span className="work-note-inline">
                        <CalendarDays size={14} />
                        {project.note}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="work-side">
                  <div className="work-visual-frame">
                    {project.image ? (
                      <img src={project.image} alt={project.imageAlt} />
                    ) : (
                      <div
                        className="work-visual-placeholder"
                        aria-hidden="true"
                      >
                        <BriefcaseBusiness />
                      </div>
                    )}
                  </div>

                  {project.stats ? (
                    <div className="work-stats">
                      {project.stats.map((stat) => (
                        <div className="work-stat" key={stat.label}>
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {project.about ? (
                    <div className="work-about">
                      <p className="work-about-title">
                        <Info size={15} />
                        About the project
                      </p>
                      <p className="work-about-text">{project.about}</p>
                      {project.meta ? (
                        <div className="work-meta-grid">
                          <div>
                            <FileText size={14} />
                            <span>Type</span>
                            <strong>{project.meta.type}</strong>
                          </div>
                          <div>
                            <Calendar size={14} />
                            <span>Year</span>
                            <strong>{project.meta.year}</strong>
                          </div>
                          <div>
                            <Code2 size={14} />
                            <span>Stack</span>
                            <strong>{project.meta.stack}</strong>
                          </div>
                          <div>
                            <CheckCircle2 size={14} />
                            <span>Status</span>
                            <strong>{project.meta.status}</strong>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading reveal">
            <SectionKicker>Services</SectionKicker>
            <h2>What I can build.</h2>
          </div>
          <div className="service-grid">
            {profile.services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <Sparkles size={22} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="process">
          <div className="reveal">
            <SectionKicker>Process</SectionKicker>
            <h2>A simple workflow from idea to deployed system.</h2>
          </div>
          <ol className="process-list reveal">
            {profile.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="contact-section reveal" id="contact">
          <RouteField />
          <div className="contact-copy">
            <SectionKicker>Contact</SectionKicker>
            <h2>Have a full-stack project in mind?</h2>
            <p>
              Send a message and I'll get back to you with a clear next step,
              scope, and timeline.
            </p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={20} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
              className="contact-link"
            >
              <Phone size={20} />
              {profile.phone}
            </a>
            <a href={profile.socials.github} className="contact-link">
              <SocialIcon name="github" FallbackIcon={Github} size={20} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.socials.linkedin} className="contact-link">
              <SocialIcon name="linkedin" FallbackIcon={Linkedin} size={20} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.socials.instagram} className="contact-link">
              <SocialIcon name="instagram" FallbackIcon={Instagram} size={20} />
              Instagram
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.socials.x} className="contact-link">
              <SocialIcon name="x" FallbackIcon={Twitter} size={20} />
              X / Twitter
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          &copy; Copyright {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
