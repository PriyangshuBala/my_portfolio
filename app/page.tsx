"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Mail,
  MousePointer2,
  MoveRight,
  Sparkles,
  Target,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experience = [
  {
    period: "May - Jun 2026",
    role: "Data Annotator",
    company: "SME SuperAnnotator",
    copy: "Annotated and reviewed 150+ AI/ML training samples, applying structured labeling and QA standards while surfacing edge cases and ambiguous outputs.",
    signal: "150+ samples",
  },
  {
    period: "Mar - May 2026",
    role: "LLM Business Analyst",
    company: "Turing",
    copy: "Evaluated 1,000+ AI responses for accuracy, relevance and reasoning consistency; identified 200+ hallucinations, logical gaps and factual errors.",
    signal: "1,000+ evaluations",
  },
  {
    period: "Jan - Dec 2025",
    role: "Business Data Management Project Mentor",
    company: "IIT Madras",
    copy: "Mentored 30+ students, translating real business questions into Excel, SQL and Python workflows and turning findings into actionable recommendations.",
    signal: "30+ mentees",
  },
];

const projects = [
  {
    id: "01",
    eyebrow: "INDUSTRY 4.0 / ANALYTICS",
    title: "The AI Workforce Divide",
    copy: "A large-scale analysis of 30,000+ job profiles to quantify automation risk, task replacement and projected net job change from 2025 to 2030.",
    proof: ["30,000+ profiles", "Risk modeling", "Workforce strategy"],
    accent: "cyan",
  },
  {
    id: "02",
    eyebrow: "MACHINE LEARNING / NLP",
    title: "Food Recipe Rating Prediction",
    copy: "A multi-class prediction pipeline combining TF-IDF, encoded identity features and six model families. Support Vector Classification led the recorded comparison.",
    proof: ["13,636 train rows", "6 models", "78.47% validation"],
    accent: "lime",
    href: "https://github.com/PriyangshuBala/FoodRecipeRater",
  },
  {
    id: "03",
    eyebrow: "UNITY / C# / MOTION",
    title: "LaserFit",
    copy: "A motion-controlled fitness game where an Android phone becomes a sword controller for a Windows game, with 60 Hz UDP streaming and instant mouse fallback.",
    proof: ["20 C# files", "34-byte protocol", "60 Hz motion"],
    accent: "coral",
    href: "https://github.com/PriyangshuBala/MotionControlledFitnessGame",
  },
  {
    id: "04",
    eyebrow: "PRODUCT / NEXT.JS / GAMIFICATION",
    title: "AIR 1 Study OS",
    copy: "A gamified GATE Data Science study system with prerequisite-aware planning, XP, streaks, question analytics, recovery mode and an optional AI coach.",
    proof: ["Next.js 16", "Adaptive planning", "Live on Vercel"],
    accent: "violet",
    href: "https://github.com/PriyangshuBala/GATE-DA-Prep-App-Gamified",
  },
];

const labProjects = [
  ["Splitwave", "Local Demucs vocal and instrumental separation", "Python / PyTorch"],
  ["Student Performance Dashboard", "Academic outcome analysis with KPI storytelling", "Power BI / DAX"],
  ["VirtualMouse", "Hand-landmark control mapped to desktop interaction", "OpenCV / MediaPipe"],
  ["TicketShow", "Role-based booking workflows for venues and movies", "Flask / SQLite"],
  ["ForgeLevel Fitness", "Workout, nutrition and progression tracking", "HTML / CSS / JS"],
];

const skillLoop = [
  "BUSINESS ANALYSIS",
  "PRODUCT ANALYTICS",
  "MACHINE LEARNING",
  "POWER BI",
  "LLM EVALUATION",
  "PRODUCT BUILDING",
  "SQL & PYTHON",
  "DATA STORYTELLING",
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Portrait() {
  const cardRef = useRef<HTMLDivElement>(null);

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--portrait-rx", `${-y * 5}deg`);
    cardRef.current.style.setProperty("--portrait-ry", `${x * 7}deg`);
  }

  function reset() {
    cardRef.current?.style.setProperty("--portrait-rx", "0deg");
    cardRef.current?.style.setProperty("--portrait-ry", "0deg");
  }

  return (
    <div ref={cardRef} className="portrait-stage" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="portrait-orbit orbit-one" />
      <div className="portrait-orbit orbit-two" />
      <div className="portrait-frame">
        <Image
          src="/priyangshu-professional-portrait.png"
          alt="Professional portrait of Priyangshu Bala"
          fill
          priority
          sizes="(max-width: 900px) 88vw, 42vw"
          className="portrait-image"
        />
        <div className="portrait-wash" />
      </div>
      <div className="portrait-label-stack">
        <div className="portrait-label"><BrainCircuit size={16} /> Data thinking. Product instinct.</div>
        <div className="portrait-label"><span className="pulse-dot" /> Available for high-impact analytics roles</div>
      </div>
    </div>
  );
}

function SkillMarquee() {
  return (
    <div className="signal-marquee" aria-label="Core skills">
      <div className="signal-track">
        {[0, 1].map((group) => (
          <div className="signal-group" aria-hidden={group === 1} key={group}>
            {skillLoop.map((skill) => (
              <span className="signal-item" key={skill}>{skill}<i /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  useReveal();

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <a href="#top" className="monogram" aria-label="Priyangshu Bala home">PB<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact" className="nav-cta">Let&apos;s connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability" data-reveal><span /> Data · Business · Product · AI</div>
          <h1 className="hero-title" data-reveal>
            I turn complex data into
            <span className="hero-emphasis">decisions people can act on.</span>
          </h1>
          <p className="hero-intro" data-reveal>
            I&apos;m <strong>Priyangshu Bala</strong>an IIT Madras Data Science graduate and multidisciplinary analyst specializing in business analytics, product thinking, applied machine learning and AI evaluation—turning complex data into clear, actionable decisions.

          </p>
          <div className="hero-actions" data-reveal>
            <a href="#work" className="button button-primary">Explore my work <ArrowDown size={17} /></a>
            <a href="https://github.com/PriyangshuBala" className="button button-ghost" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
          </div>
          <div className="micro-proof" data-reveal>
            <div><strong>7.01</strong><span>IITM CGPA</span></div>
            <div><strong>11</strong><span>public repositories</span></div>
            <div><strong>2026</strong><span>graduating cohort</span></div>
          </div>
        </div>
        <Portrait />
        <a className="scroll-cue" href="#story" aria-label="Scroll to my story"><MousePointer2 size={15} /> Scroll to decode the story</a>
      </section>

      <SkillMarquee />

      <section className="story section-shell" id="story">
        <div className="section-index">01 / STORY</div>
        <div className="story-grid">
          <div className="story-heading" data-reveal>
            <p className="eyebrow">FROM SANTRAGACHI TO SYSTEMS THINKING</p>
            <h2>Curiosity became a discipline. Data became the language.</h2>
          </div>
          <div className="story-copy" data-reveal>
            <p className="lead">My work sits at the intersection of <em>analysis, human judgment and building.</em></p>
            <p>At IIT Madras, I learned to look past the obvious number. I&apos;ve studied revenue and inventory, mapped the effect of AI across tens of thousands of jobs, built dashboards for academic decisions, evaluated model behavior and guided students through real business problems.</p>
            <p>The pattern is consistent: understand the system, find the signal, communicate what matters, and build the most useful next step.</p>
            <a className="text-link" href="https://bsinsider.in/from-santragachi-to-staggering-solutions-the-priyangshu-bala-story/" target="_blank" rel="noreferrer">Read my IIT Madras community feature <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="metric-ribbon">
          <article data-reveal><span>30,000+</span><p>job profiles analyzed for AI workforce risk</p></article>
          <article data-reveal><span>1,000+</span><p>LLM responses evaluated across real scenarios</p></article>
          <article data-reveal><span>200+</span><p>hallucinations and reasoning issues identified</p></article>
          <article data-reveal><span>30+</span><p>students mentored through business projects</p></article>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-index">02 / EXPERIENCE</div>
        <div className="section-heading" data-reveal>
          <p className="eyebrow">WORK THAT TRAINED THE JUDGMENT</p>
          <h2>Three lenses.<br />One analytical mindset.</h2>
          <p>Data quality, AI evaluation and business mentoring taught me to reason carefully and communicate clearly.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-row" data-reveal key={item.role}>
              <div className="experience-no">0{index + 1}</div>
              <div className="experience-role"><span>{item.period}</span><h3>{item.role}</h3><p className="company">{item.company}</p></div>
              <p className="experience-copy">{item.copy}</p>
              <div className="signal-pill">{item.signal}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-index">03 / SELECTED WORK</div>
        <div className="work-intro" data-reveal>
          <div><p className="eyebrow">PROJECTS THAT REVEAL HOW I THINK</p><h2>Analysis is the start.<br />Utility is the finish.</h2></div>
          <p>I move comfortably between business questions, model experiments and usable software—because strong insight deserves a strong delivery mechanism.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const content = <>
              <div className="project-top"><span>{project.id}</span>{project.href ? <ArrowUpRight size={22} /> : <Sparkles size={22} />}</div>
              <p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-copy">{project.copy}</p>
              <div className="project-proof">{project.proof.map((proof) => <span key={proof}>{proof}</span>)}</div>
            </>;
            return project.href ? (
              <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" data-reveal key={project.title}>{content}</a>
            ) : (
              <article className={`project-card ${project.accent}`} data-reveal key={project.title}>{content}</article>
            );
          })}
        </div>
      </section>

      <section className="capability-section section-shell">
        <div className="section-index">04 / CAPABILITY</div>
        <div className="capability-stage">
          <div className="capability-core" data-reveal><span>THE HYBRID EDGE</span><strong>DATA<br />× PRODUCT</strong><p>Insight that survives contact with the real world.</p></div>
          <div className="capability-ring" aria-hidden="true" />
          <div className="capability-card cap-a"><BarChart3 /><span>ANALYZE</span><p>SQL · Excel · Power BI · Python</p></div>
          <div className="capability-card cap-b"><BrainCircuit /><span>MODEL</span><p>ML · NLP · LLM evaluation</p></div>
          <div className="capability-card cap-c"><Code2 /><span>BUILD</span><p>Next.js · Flask · Unity · APIs</p></div>
          <div className="capability-card cap-d"><Target /><span>DECIDE</span><p>KPIs · Strategy · Storytelling</p></div>
        </div>
      </section>

      <section className="lab section-shell">
        <div className="section-index">05 / PROJECT LAB</div>
        <div className="lab-heading" data-reveal><p className="eyebrow">THE REST OF THE BUILD LOG</p><h2>Exploring the whole stack,<br />one useful problem at a time.</h2></div>
        <div className="lab-list">
          {labProjects.map(([name, description, stack], index) => (
            <div className="lab-row" data-reveal key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p><strong>{stack}</strong><MoveRight size={22} /></div>
          ))}
        </div>
      </section>

      <section className="education section-shell">
        <div className="section-index">06 / FOUNDATION</div>
        <div className="education-grid">
          <div className="education-main" data-reveal><p className="eyebrow">ACADEMIC FOUNDATION</p><h2>BS in Data Science</h2><p className="institution">Indian Institute of Technology Madras</p><div className="education-meta"><span>2026 cohort</span><span>CGPA 7.01</span></div></div>
          <div className="credential-stack" data-reveal>
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <aside className="credential-summary">
              <strong>27</strong>
              <div><span>certifications</span><p>Selected credentials from a wider LinkedIn record spanning analytics, AI, BI, SQL and business problem-solving.</p></div>
            </aside>
            <div><span>2026</span><p>Master SQL for Data/Business Analytics with AI · WsCube Tech</p></div>
            <div><span>2026</span><p>Gen AI Engineering Mastermind · Outskill</p></div>
            <div><span>2025</span><p>SQL Intermediate · HackerRank</p></div>
            <div><span>2025</span><p>Generative AI Powered Data Analytics · Tata Group</p></div>
            <div><span>2025</span><p>Microsoft Power BI · IIT Madras</p></div>
            <div><span>2024</span><p>Excel with Copilot: AI-Driven Data Analysis · LinkedIn Learning</p></div>
            <a className="credential-link" href="https://www.linkedin.com/in/priyangshu-bala-230973263" target="_blank" rel="noreferrer">View the complete credential record on LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing-orbit" aria-hidden="true" />
        <div className="closing-copy" data-reveal>
          <p className="eyebrow">THE NEXT DATASET COULD BE YOURS</p>
          <h2>Have a hard problem?<br /><em>Let&apos;s make it legible.</em></h2>
          <p>I&apos;m interested in data, business and product analytics opportunities where rigorous thinking can create visible impact.</p>
          <div className="closing-actions"><a className="button button-light" href="mailto:priyangshubala@gmail.com"><Mail size={17} /> Email me</a><a className="button button-outline-light" href="https://www.linkedin.com/in/priyangshu-bala-230973263" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a></div>
        </div>
        <div className="closing-signature">PRIYANGSHU BALA</div>
      </section>

      <footer><p>Designed around evidence, curiosity and momentum.</p><div><a href="https://github.com/PriyangshuBala" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/priyangshu-bala-230973263" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
