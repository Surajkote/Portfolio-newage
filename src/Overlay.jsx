import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CONTACT, EDUCATION, EXPERIENCE,
  PROJECTS, SKILLS, EXTRACURRICULAR, POSITIONS,
} from './resumeData'
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger)

/* ─── Reusable section wrapper ──────────────────────────────────── */
function Reveal({ id, children }) {
  const ref = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.ac'), {
        scrollTrigger: { trigger: ref.current, start: 'top 95%', toggleActions: 'play none none none' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section id={id} ref={ref} className="section">{children}</section>
}

/* ─── Label helper ──────────────────────────────────────────────── */
const Label = ({ children }) => (
  <p className="ac section-label" style={{ marginBottom: '0.5rem' }}>{children}</p>
)
const Heading = ({ children, size = 'clamp(2rem,5vw,3.2rem)' }) => (
  <h2 className="ac section-heading" style={{ fontSize: size, marginBottom: '2.5rem' }}>{children}</h2>
)

/* ─── Tag chip ──────────────────────────────────────────────────── */
const Chip = ({ label, color = 'var(--neon-blue)' }) => (
  <span className="skill-tag" style={{ fontSize: '0.68rem', padding: '3px 10px', color, borderColor: color, background: `${color}14` }}>
    {label}
  </span>
)

/* ─── Glass card ────────────────────────────────────────────────── */
const Card = ({ children, accent = 'var(--neon-blue)', style = {} }) => (
  <div className="ac glass-card" style={{ padding: '1.75rem 2rem', marginBottom: '1.25rem', borderLeft: `3px solid ${accent}`, ...style }}>
    {children}
  </div>
)

/* ══════════════════════════════════════════════════════════════════
   SECTIONS
══════════════════════════════════════════════════════════════════ */

/* ─── Hero ──────────────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hl', { y: 30, opacity: 0, duration: 0.7 })
        .from('.hn', { y: 60, opacity: 0, duration: 1 }, '-=0.3')
        .from('.hs', { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hd', { scaleX: 0, opacity: 0, duration: 0.6, transformOrigin: 'left' }, '-=0.2')
        .from('.hi', { y: 20, opacity: 0, duration: 0.6 }, '-=0.2')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={ref} className="section" style={{ minHeight: '100vh', flexDirection: 'column', position: 'relative' }}>
      <div className="spline-container" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'auto' }}>
        <Spline scene="https://prod.spline.design/d3WOnFTqxOI9QvtJ/scene.splinecode" />
      </div>
      <div style={{ textAlign: 'center', maxWidth: '900px', zIndex: 1, pointerEvents: 'none' }}>
        <p className="hl section-label" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          Data Science &amp; AI Engineer
        </p>
        <h1 className="hn section-heading glow-text" style={{ fontSize: 'clamp(2.8rem,8vw,6.5rem)', marginBottom: '1.5rem' }}>
          Suraj S Kote
        </h1>
        <p className="hs" style={{ fontFamily: 'var(--font-sub)', fontSize: 'clamp(0.9rem,2vw,1.25rem)', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Passionate about{' '}
          <span style={{ color: 'var(--neon-blue)' }}>Machine Learning</span>,{' '}
          <span style={{ color: 'var(--neon-purple)' }}>AI</span> &amp;{' '}
          <span style={{ color: 'var(--neon-cyan)' }}>Computer Vision</span>
          <br />
          <span style={{ fontSize: '0.9em' }}>with a knack for Data Analysis &amp; ML Modelling</span>
        </p>
        <div className="hd neon-divider" style={{ maxWidth: '380px', margin: '0 auto 3rem' }} />
        <div className="hi scroll-indicator" style={{ margin: '0 auto' }}>
          <div className="scroll-mouse" />
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  )
}

/* ─── About ─────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <Reveal id="about">
      <div style={{ maxWidth: '820px', width: '100%' }}>
        <Label>About Me</Label>
        <Heading>Who I Am</Heading>
        <div className="ac glass-card slant-border" style={{ padding: '2.25rem 2.25rem 2.25rem 2rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            I'm an Undergraduate in{' '}
            <span style={{ color: 'var(--neon-blue)' }}>Data Science &amp; Artificial Intelligence</span> at{' '}
            <span style={{ color: 'var(--neon-purple)' }}>Masters' Union, Gurugram</span> — one of India's most
            forward-thinking institutions for applied tech education.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Member of the <span style={{ color: 'var(--neon-cyan)' }}>Ambassadors Council</span> — mentored 10+
            students for AI Hackathons, led campus tours and career fairs across cities, and volunteered for
            networking events. I've built autonomous agents, RAG pipelines, computer vision systems, and shipped
            production-grade AI tools from the ground up.
          </p>
          <div className="neon-divider" />
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Degree', value: 'B.Sc. Data Science & AI' },
              { label: 'Institute', value: "Masters' Union" },
              { label: 'Batch', value: '2025 – 2029' },
              { label: 'Location', value: 'Gurugram, India' },
            ].map(i => (
              <div key={i.label}>
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--neon-blue)', marginBottom: '4px' }}>{i.label}</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', color: '#fff' }}>{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Education ─────────────────────────────────────────────────── */
function EducationSection() {
  return (
    <Reveal id="education">
      <div style={{ maxWidth: '820px', width: '100%' }}>
        <Label>Academic Background</Label>
        <Heading>Education</Heading>
        {EDUCATION.map((edu, i) => (
          <Card key={i} accent={i === 0 ? 'var(--neon-blue)' : 'var(--border-neon)'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#fff', marginBottom: '2px' }}>{edu.institution}</p>
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.82rem', color: 'var(--neon-blue)', letterSpacing: '0.05em' }}>{edu.degree}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>{edu.period}</p>
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.72rem', color: 'var(--neon-purple)' }}>{edu.location}</p>
              </div>
            </div>
            <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
              {edu.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2px' }}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Reveal>
  )
}

/* ─── Experience ─────────────────────────────────────────────────── */
function ExperienceSection() {
  return (
    <Reveal id="experience">
      <div style={{ maxWidth: '820px', width: '100%' }}>
        <Label>Work Experience</Label>
        <Heading>Startups I Built</Heading>
        {EXPERIENCE.map((exp, i) => (
          <Card key={i} accent={exp.color}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: exp.color, marginBottom: '4px' }}>// {exp.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', letterSpacing: '0.05em' }}>{exp.company}</h3>
              </div>
              <span style={{ fontFamily: 'var(--font-sub)', fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', alignSelf: 'flex-start' }}>{exp.period}</span>
            </div>
            <ul style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '6px' }}>{b}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {exp.tags.map(t => <Chip key={t} label={t} color={exp.color} />)}
            </div>
          </Card>
        ))}
      </div>
    </Reveal>
  )
}

/* ─── Projects ──────────────────────────────────────────────────── */
function ProjectsSection() {
  return (
    <Reveal id="projects">
      <div style={{ maxWidth: '960px', width: '100%' }}>
        <Label>Academic &amp; Personal Projects</Label>
        <Heading>Highlight Reel</Heading>
        {PROJECTS.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '2.5rem' }}>
            <p className="ac" style={{ fontFamily: 'var(--font-sub)', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase', color: cat.color, marginBottom: '1.25rem' }}>
              {cat.icon} {cat.category}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {cat.items.map((proj, pi) => (
                <div key={pi} className="ac glass-card proj-card"
                  style={{ padding: '1.5rem', borderTop: `2px solid ${cat.color}`, transition: 'box-shadow 0.3s, background 0.3s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 16px 40px ${cat.color}28`;
                    e.currentTarget.style.background = 'rgba(2, 8, 23, 0.95)';
                    const h3 = e.currentTarget.querySelector('h3');
                    if (h3) { h3.style.color = cat.color; h3.style.textShadow = `0 0 10px ${cat.color}80`; }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.background = '';
                    const h3 = e.currentTarget.querySelector('h3');
                    if (h3) { h3.style.color = '#fff'; h3.style.textShadow = 'none'; }
                  }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: '#fff', marginBottom: '0.6rem', letterSpacing: '0.04em', transition: 'color 0.3s, text-shadow 0.3s' }}>{proj.name}</h3>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem', transition: 'color 0.3s' }}>{proj.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {proj.tags.map(t => <Chip key={t} label={t} color={cat.color} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

/* ─── Skills ────────────────────────────────────────────────────── */
function SkillsSection() {
  const ref = useRef()
  useEffect(() => {
    const tags = ref.current.querySelectorAll('.skill-tag')
    gsap.set(tags, { scale: 0.4, opacity: 0 })
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        gsap.to(tags, { scale: 1, opacity: 1, duration: 0.45, stagger: 0.04, ease: 'back.out(1.7)' })
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="section">
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        <p className="section-label" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>Arsenal</p>
        <h2 className="section-heading" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', marginBottom: '2.5rem' }}>Skills &amp; Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '3rem' }}>
          {SKILLS.map(s => (
            <span key={s} className="skill-tag" style={{ fontSize: '0.82rem', padding: '7px 18px' }}>
              <span style={{ color: 'var(--neon-cyan)', fontSize: '0.55em', marginRight: '4px' }}>◆</span>{s}
            </span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '1rem' }}>
          {[
            { num: '2+',  label: 'AI Startups' },
            { num: '10+', label: 'ML Projects' },
            { num: '90%', label: 'CNN Accuracy' },
            { num: '60+', label: 'POs Automated' },
            { num: '50+', label: 'Codeforces Programs' },
            { num: '5+',  label: 'Kaggle Datasets' },
          ].map(s => (
            <div key={s.label} className="glass-card" style={{ padding: '1.25rem 0.75rem' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--neon-blue)', marginBottom: '4px' }}>{s.num}</p>
              <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Extra-Curricular & Positions ─────────────────────────────── */
function ExtrasSection() {
  return (
    <Reveal id="extras">
      <div style={{ maxWidth: '820px', width: '100%' }}>
        <Label>Beyond the Code</Label>
        <Heading>Extra-Curricular &amp; Positions</Heading>

        {/* Positions */}
        {POSITIONS.map((pos, i) => (
          <Card key={i} accent="var(--neon-purple)" style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--neon-purple)', marginBottom: '4px' }}>// Position of Responsibility</p>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#fff', marginBottom: '4px' }}>{pos.org}</h3>
            <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.82rem', color: 'var(--neon-blue)', marginBottom: '0.75rem' }}>{pos.role}</p>
            <ul style={{ paddingLeft: '1rem' }}>
              {pos.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-neon)' }}>
          {EXTRACURRICULAR.map((item, i) => (
            <div key={i} className="ac" style={{ marginBottom: '1.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-1.85rem', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-blue)', boxShadow: '0 0 8px var(--neon-blue)' }} />
              <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--neon-blue)', marginBottom: '4px' }}>{item.date}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Contact ───────────────────────────────────────────────────── */
function ContactSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(e => console.log('Autoplay blocked:', e))
    }
  }, [])

  return (
    <Reveal id="contact">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'bottom',
          zIndex: 0,
          opacity: 1, // Fixed native playback
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)'
        }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4" type="video/mp4" />
      </video>

      <div className="liquid-glass" style={{ maxWidth: '680px', width: '100%', textAlign: 'center', zIndex: 10, padding: '3.5rem 3rem', borderRadius: '1rem' }}>
        <Label>Get In Touch</Label>
        <Heading>Initiate Contact</Heading>
        <p className="ac" style={{ fontFamily: 'var(--font-sub)', fontSize: '1rem', color: 'var(--text-secondary)', letterSpacing: '0.07em', marginBottom: '0.75rem', lineHeight: 1.8 }}>
          Whether you want to collaborate, discuss research, or just geek out about agents — I'm always up for a signal.
        </p>
        <p className="ac" style={{ fontFamily: 'var(--font-sub)', fontSize: '0.9rem', color: 'var(--neon-blue)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
          📞 {CONTACT.phone}
        </p>

        <div className="ac" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <a href="/Resume.docx" download="Resume.docx" className="btn-neon" style={{ padding: '0.8rem 2rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: 'var(--neon-blue)', color: '#000', borderColor: 'var(--neon-blue)', boxShadow: '0 0 15px var(--neon-blue)' }}>
            <svg style={{ marginRight: '8px' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Resume
          </a>
        </div>

        <div className="ac" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn-neon" id="btn-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-neon" id="btn-email" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-neon" id="btn-linkedin" style={{ borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>

        <div className="neon-divider" />
        <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', letterSpacing: '0.15em', color: 'var(--neon-blue)' }}>SURAJ S KOTE</p>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>© 2025 — AI &amp; ML Engineer</p>
        </div>
      </div>
    </Reveal>
  )
}


/* ─── Root export ────────────────────────────────────────────────── */
export default function Overlay() {
  return (
    <div id="overlay">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ExtrasSection />
      <ContactSection />
    </div>
  )
}
