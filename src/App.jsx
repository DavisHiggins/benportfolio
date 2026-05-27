import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Briefcase,
  ExternalLink,
  FileText,
  GraduationCap,
  Home,
  LineChart,
  Linkedin,
  Mail,
  Medal,
  NotebookText,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

import benLogo from './assets/benlogo.png'
import benHeadshot from './assets/benheadshot.png'
import hdLogo from './assets/hdlogo.png'
import unccLogo from './assets/uncclogotrans.png'

// Logo colors: navy #1B2F5E, gold #C4963B
const GOLD = '#C4963B'
const GOLD_LIGHT = '#D4A84B'
const NAVY = '#1B2F5E'
const NAVY_MID = '#1E3570'
const BG_CARD = '#0D1630'
const BG_ELEVATED = '#111F40'

// CSS filter that converts a raster image to the portfolio gold (#C4963B)
const GOLD_FILTER = 'brightness(0) saturate(100%) invert(66%) sepia(42%) saturate(780%) hue-rotate(2deg) brightness(90%)'

const NAV_ITEMS = [
  { label: 'Home', key: 'home', icon: Home },
  { label: 'Experience', key: 'experience', icon: Briefcase },
  { label: 'Projects', key: 'projects', icon: LineChart },
  { label: 'Education', key: 'education', icon: GraduationCap },
  { label: 'Skills', key: 'skills', icon: BookOpen },
  { label: 'Resume', key: 'resume', icon: NotebookText },
  { label: 'Contact', key: 'contact', icon: Mail },
]

// Update 9: "Finance GPA" → "UNCC GPA"; "1x Chancellor's List" → "2028 Graduation Date"
const STATS = [
  { value: '3.7', label: 'UNCC GPA' },
  { value: '4x', label: 'Academic Honors' },
  { value: '2', label: 'Finance Models Built' },
  { value: '2028', label: 'Graduation Date' },
]

const EXPERIENCE = [
  {
    period: 'May 2026 – Present',
    title: 'Financial Analyst',
    company: 'Higgins Digital',
    website: 'https://higginsd.com/',
    detail: 'Financial Planning · Pricing Strategy · Revenue Tracking',
    bullets: [
      'Manage financial planning, pricing strategy, and revenue tracking for a web development company.',
      'Build Excel-based dashboards to monitor client pipeline, payment status, project expenses, and monthly cash-flow projections.',
      'Research agency pricing benchmarks, hosting/domain expenses, and small-business budget ranges to recommend competitive package structures while protecting company margins.',
      'Develop financial summaries that improve proposal consistency, internal decision-making, and overall business professionalism.',
    ],
    tags: ['Financial Planning', 'Pricing Strategy', 'Revenue Tracking', 'Excel Dashboards', 'Cash Flow', 'Business Reporting'],
  },
  {
    period: 'October 2025 – Present',
    title: 'Food Service Worker',
    company: 'Piada Italian Street Food',
    detail: 'Operations · Customer Service · Team Coordination',
    bullets: [
      'Process high-volume customer transactions accurately in a fast-paced environment while maintaining service quality, operational efficiency, and attention to detail.',
      'Coordinate with team members across register, prep, and order fulfillment to reduce wait times, resolve guest needs, and support smooth daily operations.',
    ],
    tags: ['Operations', 'Customer Service', 'Team Coordination', 'Efficiency', 'Attention to Detail'],
  },
  {
    period: 'Campus Involvement',
    title: 'Event Hospitality Volunteer',
    company: 'Phi Delta Theta',
    detail: 'Hospitality · Service · Event Support',
    bullets: [
      'Prepared and served meals for philanthropy, fellowship, and Bible study events run by Phi Delta Theta.',
      'Supported event setup, food coordination, guest hospitality, and cleanup for recurring campus gatherings.',
      'Coordinated with fraternity members to ensure meals were prepared on time and events ran smoothly.',
    ],
    tags: ['Hospitality', 'Service', 'Event Support', 'Coordination', 'Campus Involvement'],
  },
]

// Update 2: workbookHref updated to Google Sheets URLs; button label → "View Workbook"
const PROJECTS = [
  {
    tag: 'Featured Finance Model',
    title: 'Business Pricing & Revenue Model',
    category: 'Financial Modeling | Pricing Strategy | Excel',
    subtitle:
      'Dynamic Excel model combining package pricing, cost structure, scenario analysis, and 12-month cash-flow forecasting for a service-based business.',
    description:
      "This project models Higgins Digital's website packages and modification tiers using official pricing inputs, estimated direct costs, recurring operating assumptions, and conservative, base, and growth scenarios. The workbook translates service pricing into projected gross margin, client savings, monthly cash flow, tax reserve, and 12-month ending cash.",
    highlights: [
      'Modeled official package prices for Essential Presence, Growth Standard, and Enterprise Logic.',
      'Created pricing logic for Quick Fix, Standard Mod, Advanced Mod, and Full Transformation modification tiers.',
      'Built conservative, base, and growth operating cases.',
      'Created a 12-month cash-flow forecast using base-case assumptions.',
      'Summarized KPI outputs in an executive dashboard.',
      'Compared official package pricing against market averages to show estimated client savings.',
    ],
    metrics: [
      { label: 'Entry Package', value: '$1,000' },
      { label: 'Most Popular', value: '$2,500' },
      { label: 'Enterprise Starting', value: '$5,000+' },
      { label: 'Avg. Savings vs Market', value: '~71.4%' },
      { label: 'Base Monthly Net Cash Flow', value: '~$2,838.60' },
      { label: '12-Month Ending Cash', value: '~$35,563.20' },
    ],
    tags: [
      'Microsoft Excel', 'Pricing Strategy', 'Scenario Analysis', 'Break-Even Analysis',
      'Cash-Flow Forecasting', 'Revenue Tracking', 'Margin Analysis', 'Dashboarding',
    ],
    accentFrom: 'rgba(27,47,94,0.35)',
    accentTo: 'rgba(196,150,59,0.18)',
    workbookHref: 'https://docs.google.com/spreadsheets/d/16apOj8IIzPGqFkFvHIwrObDSTcFZB123/edit?usp=sharing&ouid=100983707533631985610&rtpof=true&sd=true',
    ProjectIcon: BarChart2,
  },
  {
    tag: 'Valuation Model',
    title: 'Investment Valuation & Financial Statement Analysis',
    category: 'Valuation | DCF | Comparable Company Analysis',
    subtitle:
      'Company valuation analyzing Apple Inc. through DCF methodology, financial statement analysis, sensitivity tables, and comparable company multiples.',
    description:
      "This project evaluates Apple Inc. through a student-built valuation model that combines profitability, liquidity, leverage, cash-flow quality, a DCF forecast, WACC and terminal growth sensitivity, and comparable company multiple analysis. The output is presentation-ready and intended for educational analysis, not investment advice.",
    highlights: [
      'Analyzed revenue growth, gross margin, operating margin, net income margin, free-cash-flow margin, current ratio, debt/equity, ROA, and ROE.',
      'Built a DCF model using forecast revenue, operating margin, tax rate, D&A, capex, working capital, WACC, and terminal growth assumptions.',
      'Created a WACC and terminal growth sensitivity table.',
      'Built a comparable company analysis using large-cap technology peers.',
      'Summarized strengths, risks, liquidity/leverage, valuation view, and conclusion framing in a presentation-ready summary tab.',
    ],
    metrics: [
      { label: 'DCF Value / Share', value: '~$134.29' },
      { label: 'Reference Price', value: '$250.00' },
      { label: 'EV/Revenue Comps', value: '~$264.35' },
      { label: 'P/E Comps Price', value: '~$243.04' },
      { label: 'FY2025 FCF Margin', value: '~23.7%' },
      { label: 'WACC', value: '8.5%' },
      { label: 'Terminal Growth', value: '2.5%' },
    ],
    disclaimer: 'Educational analysis only. Not investment advice.',
    tags: [
      'DCF Analysis', 'Financial Statement Analysis', 'Comparable Company Analysis', 'WACC',
      'Sensitivity Analysis', 'Cash-Flow Forecasting', 'Equity Valuation', 'Microsoft Excel',
    ],
    accentFrom: 'rgba(196,150,59,0.22)',
    accentTo: 'rgba(27,47,94,0.28)',
    workbookHref: 'https://docs.google.com/spreadsheets/d/15XXEzKcjVFqcBTf1r7wek5EUE739RMLM/edit?usp=sharing&ouid=100983707533631985610&rtpof=true&sd=true',
    ProjectIcon: TrendingUp,
  },
]

const SKILLS = [
  {
    group: 'Finance & Accounting',
    icon: TrendingUp,
    items: [
      'Financial Modeling', 'DCF Analysis', 'Budgeting & Forecasting',
      'Pricing Strategy', 'Revenue Tracking', 'Cost Analysis',
      'Margin Analysis', 'Cash Flow Management', 'Business Valuation',
    ],
  },
  {
    group: 'Analytics & Reporting',
    icon: BarChart2,
    items: [
      'KPI Reporting', 'Scenario Analysis', 'Trend Analysis',
      'Market Research', 'Financial Statement Analysis', 'Risk Assessment', 'Stakeholder Reporting',
    ],
  },
  {
    group: 'Tools & Platforms',
    icon: BookOpen,
    items: [
      'Microsoft Excel', 'PivotTables', 'XLOOKUP', 'INDEX/MATCH',
      'Scenario Manager', 'PowerPoint', 'Word', 'Google Workspace', 'QuickBooks', 'Generative AI',
    ],
  },
]

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'benjamin.levy2005@gmail.com',
    href: 'mailto:benjamin.levy2005@gmail.com',
    icon: Mail,
    glow: 'rgba(27,47,94,0.30)',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/benjaminlevy1',
    href: 'https://www.linkedin.com/in/benjaminlevy1/',
    icon: Linkedin,
    glow: 'rgba(196,150,59,0.22)',
    external: true,
  },
]

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-4xl">
      <div
        className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.22em]"
        style={{ border: '1px solid rgba(196,150,59,0.30)', background: 'rgba(196,150,59,0.08)', color: GOLD }}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function Pill({ children }) {
  return <span className="chip">{children}</span>
}

function PageShell({ children }) {
  return <div className="section-shell px-6 py-14 sm:px-8 lg:px-12">{children}</div>
}

function BulletDot() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: GOLD }} />
}

// Update 6: img fills full container (h-full w-full) to appear larger inside the same white square
function LogoMark({ size = 'header' }) {
  const dim = size === 'header' ? 'h-14 w-14' : 'h-10 w-10'
  return (
    <div
      className={`flex ${dim} items-center justify-center overflow-hidden rounded-2xl bg-white`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
    >
      <img src={benLogo} alt="Benjamin Levy BL logo" className="h-full w-full object-contain" />
    </div>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const activeTitle = useMemo(() => {
    const item = NAV_ITEMS.find((nav) => nav.key === activePage)
    return item?.label ?? 'Home'
  }, [activePage])

  const pageAnimation = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.28 },
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div key="home" {...pageAnimation}>
            <PageShell>
              <div
                className="relative overflow-hidden rounded-[2.5rem] px-6 py-8 sm:px-8 lg:px-10"
                style={{ border: '1px solid rgba(196,150,59,0.18)', background: 'rgba(13,22,48,0.60)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at top left, rgba(27,47,94,0.22), transparent 35%), radial-gradient(circle at top right, rgba(196,150,59,0.09), transparent 30%), linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))',
                  }}
                />
                <div className="absolute -left-12 top-10 h-44 w-44 rounded-full blur-3xl" style={{ background: 'rgba(27,47,94,0.20)' }} />
                <div className="absolute right-0 top-0 h-52 w-52 rounded-full blur-3xl" style={{ background: 'rgba(196,150,59,0.08)' }} />
                <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full blur-3xl" style={{ background: 'rgba(30,53,112,0.14)' }} />

                <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                  <div>
                    <div
                      className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                      style={{ border: '1px solid rgba(196,150,59,0.28)', background: 'rgba(196,150,59,0.08)', color: GOLD }}
                    >
                      <TrendingUp className="h-4 w-4" />
                      Finance &amp; Valuation · Charlotte, NC
                    </div>

                    <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                      {"Hi, I'm "}
                      <span
                        style={{
                          background: `linear-gradient(to right, ${GOLD}, ${GOLD_LIGHT})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Benjamin Levy
                      </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                      Finance student and analyst building Excel-based models, valuation analyses, pricing systems, and financial reports that turn numbers into better business decisions.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {['FINANCIAL MODELING', 'VALUATION & DCF', 'PRICING STRATEGY', 'EXCEL DASHBOARDS'].map((tag) => (
                        <div
                          key={tag}
                          className="rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300"
                          style={{ border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)' }}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                      Through coursework and hands-on experience, I have developed skills in financial modeling, business valuation, pricing strategy, cash-flow forecasting, scenario analysis, and Excel-based reporting.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <button type="button" onClick={() => setActivePage('projects')} className="primary-btn">
                        View Projects
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => setActivePage('resume')} className="secondary-btn">
                        View Resume
                      </button>
                      <a
                        href="https://www.linkedin.com/in/benjaminlevy1/"
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-btn"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {STATS.map((item) => (
                        <div key={item.label} className="glass rounded-3xl p-5 shadow-soft">
                          <div className="text-2xl font-bold" style={{ color: GOLD_LIGHT }}>{item.value}</div>
                          <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hero right panel — headshot card */}
                  <div className="mx-auto w-full max-w-md">
                    <div
                      className="rounded-[2rem] p-5 shadow-glow"
                      style={{ border: '1px solid rgba(196,150,59,0.22)', background: 'rgba(13,22,48,0.95)' }}
                    >
                      {/* Update 11: outer box unchanged; image scaled down with object-contain so more dark navy shows */}
                      <div
                        className="overflow-hidden rounded-[1.6rem] border border-white/10 flex items-center justify-center"
                        style={{ background: '#0A122A', aspectRatio: '4/5' }}
                      >
                        <img
                          src={benHeadshot}
                          alt="Professional headshot of Benjamin Levy"
                          className="object-contain"
                          style={{ width: '82%', height: '82%', display: 'block' }}
                        />
                      </div>

                      <div className="mt-5 rounded-[1.5rem] border border-white/10 p-5" style={{ background: BG_CARD }}>
                        <div className="flex items-start gap-4">
                          <LogoMark size="sm" />
                          <div>
                            <div className="text-sm uppercase tracking-[0.32em]" style={{ color: GOLD }}>Focus</div>
                            <div className="mt-2 text-base leading-7 text-slate-300">
                              Finance student seeking opportunities in financial analysis, valuation, and business reporting.
                            </div>
                          </div>
                        </div>

                        {/* Update 5: Briefcase icon → Higgins Digital logo */}
                        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                          <div className="flex items-center gap-4">
                            <div
                              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl overflow-hidden"
                              style={{ background: 'rgba(196,150,59,0.10)', border: '1px solid rgba(196,150,59,0.20)' }}
                            >
                              <img
                                src={hdLogo}
                                alt="Higgins Digital logo"
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <div>
                              <div className="text-sm text-slate-400">Current Role</div>
                              <div className="mt-1 text-lg font-semibold text-white">Financial Analyst at Higgins Digital</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageShell>
          </motion.div>
        )

      case 'experience':
        return (
          <motion.div key="experience" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="ANALYSIS → BUSINESS IMPACT"
                title="Experience"
                subtitle="Hands-on experience across financial analysis, operations, and business-facing execution."
              />

              <div className="timeline-line">
                {EXPERIENCE.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${item.company}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="relative pl-12 sm:pl-16"
                  >
                    <div
                      className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center rounded-full sm:left-1.5"
                      style={{ border: '1px solid rgba(196,150,59,0.32)', background: 'rgba(196,150,59,0.10)', color: GOLD }}
                    >
                      <Briefcase className="h-4 w-4" />
                    </div>

                    <div className="glass rounded-[2rem] p-6 shadow-soft">
                      <div className="text-sm font-medium uppercase tracking-[0.18em]" style={{ color: GOLD }}>
                        {item.period}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                      <div className="mt-1 text-base text-slate-300">
                        {item.website ? (
                          <a href={item.website} target="_blank" rel="noreferrer" className="transition hover:text-yellow-300">
                            {item.company}
                          </a>
                        ) : (
                          item.company
                        )}
                      </div>
                      <div className="mt-1 text-sm text-slate-500">{item.detail}</div>

                      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <BulletDot />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.tags && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Pill key={tag}>{tag}</Pill>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </PageShell>
          </motion.div>
        )

      case 'projects':
        return (
          <motion.div key="projects" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="MODELS → FINANCIAL ANALYSIS"
                title="Projects"
                subtitle="Finance models and analyses that translate real data into business decisions and valuation insights."
              />

              <div className="space-y-6">
                {PROJECTS.map((project, index) => {
                  const Icon = project.ProjectIcon
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.32 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft"
                    >
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg,rgba(9,16,31,0.15),rgba(9,16,31,0.88))' }}
                      />
                      <div className="relative">
                        <div className="mb-4 flex items-center gap-4">
                          <div
                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20"
                            style={{ background: 'rgba(196,150,59,0.10)', border: '1px solid rgba(196,150,59,0.25)' }}
                          >
                            <Icon className="h-8 w-8" style={{ color: GOLD }} />
                          </div>
                          <div
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: GOLD }}
                          >
                            {project.tag}
                          </div>
                        </div>

                        <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 mb-2">{project.category}</div>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-sm text-slate-300">{project.subtitle}</p>
                        <p className="mt-5 text-sm leading-7 text-slate-200/90">{project.description}</p>

                        <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                          {project.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <BulletDot />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {project.metrics && (
                          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {project.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="rounded-2xl border border-white/10 p-3"
                                style={{ background: 'rgba(9,16,31,0.72)' }}
                              >
                                <div className="text-xs text-slate-400">{m.label}</div>
                                <div className="mt-1 text-sm font-semibold text-white">{m.value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {project.disclaimer && (
                          <p className="mt-4 text-xs italic text-slate-500">{project.disclaimer}</p>
                        )}

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((t) => (
                            <Pill key={t}>{t}</Pill>
                          ))}
                        </div>

                        {/* Update 2: External Google Sheets link, opens in new tab, "View Workbook" label */}
                        <div className="mt-8 flex flex-wrap gap-3">
                          <a
                            href={project.workbookHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-btn"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Workbook
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </PageShell>
          </motion.div>
        )

      case 'education':
        return (
          <motion.div key="education" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="FOUNDATION → ACADEMIC PERFORMANCE"
                title="Education"
                subtitle="Building a rigorous finance foundation through coursework, academic honors, and applied learning."
              />

              <div className="space-y-6">
                <div className="glass rounded-[2rem] px-6 py-8 shadow-soft">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {/* Update 8: UNCC transparent logo, gold-filtered */}
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl overflow-hidden"
                      style={{ background: 'rgba(196,150,59,0.08)', border: '1px solid rgba(196,150,59,0.28)' }}
                    >
                      <img
                        src={unccLogo}
                        alt="UNC Charlotte logo"
                        className="h-full w-full object-contain"
                        style={{ filter: GOLD_FILTER }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-2xl font-semibold text-white">University of North Carolina at Charlotte</h4>
                      <p className="mt-2 text-sm text-slate-400">
                        Bachelor of Business Administration in Finance · August 2024 – Present · Expected May 2028
                      </p>
                      {/* Update 10: coursework-focused learning area pills */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Pill>Financial Statement Analysis</Pill>
                        <Pill>Corporate Finance Foundations</Pill>
                        <Pill>Business Analytics &amp; Reporting</Pill>
                        <Pill>Finance</Pill>
                        <Pill>Business Administration</Pill>
                      </div>
                      <p className="mt-6 text-sm leading-7 text-slate-300">
                        Pursuing a Bachelor of Business Administration in Finance at UNC Charlotte with academic honors and a focus on financial modeling, valuation, business analysis, and decision-focused reporting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-[2rem] p-7 shadow-soft">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="rounded-2xl p-3 self-start" style={{ background: 'rgba(196,150,59,0.10)', color: GOLD }}>
                      <Medal className="h-8 w-8" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-xl font-semibold text-white">Academic Honors</h4>
                      <p className="mt-2 text-sm text-slate-400">University of North Carolina at Charlotte</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Pill>{"1x Chancellor's List"}</Pill>
                        <Pill>{"3x Dean's List"}</Pill>
                        <Pill>GPA: 3.7</Pill>
                      </div>
                      <p className="mt-6 text-sm leading-7 text-slate-300">
                        {"Recognized for academic excellence with Chancellor's List and Dean's List honors while maintaining a 3.7 GPA in the BBA Finance program."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PageShell>
          </motion.div>
        )

      case 'skills':
        return (
          <motion.div key="skills" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="TOOLS → FINANCIAL CAPABILITY"
                title="Skills"
                subtitle="Finance, analytics, and technology skills applied across modeling, reporting, and business analysis work."
              />

              <div className="space-y-6">
                {SKILLS.map((group, index) => {
                  const Icon = group.icon
                  return (
                    <motion.div
                      key={group.group}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: index * 0.06 }}
                      className="glass rounded-[2rem] p-6 shadow-soft"
                    >
                      <div className="mb-5 flex items-center gap-3">
                        <div className="rounded-2xl p-3" style={{ background: 'rgba(196,150,59,0.10)', color: GOLD }}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{group.group}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <Pill key={skill}>{skill}</Pill>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </PageShell>
          </motion.div>
        )

      case 'resume':
        return (
          <motion.div key="resume" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="SKILLS → PROFESSIONAL READINESS"
                title="Resume"
                subtitle="A concise overview of Ben's finance education, financial analysis experience, Excel modeling projects, and business reporting skills."
              />

              <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="glass rounded-[2rem] p-9 shadow-soft self-start">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/5 p-3" style={{ color: GOLD }}>
                      <NotebookText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Quick access</h3>
                      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
                        Open or download Ben's resume directly, or explore his finance projects and LinkedIn for the full picture.
                      </p>
                      <div className="mt-16 flex flex-wrap gap-3">
                        <a
                          href="/documents/BenResume.docx.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="primary-btn"
                        >
                          <FileText className="h-4 w-4" />
                          Open Resume
                        </a>
                        {/* Update 7: "Download Resume" → "View Skills" — navigates to Skills tab */}
                        <button
                          type="button"
                          onClick={() => setActivePage('skills')}
                          className="secondary-btn"
                        >
                          <BookOpen className="h-4 w-4" />
                          View Skills
                        </button>
                        <a href="mailto:benjamin.levy2005@gmail.com" className="secondary-btn">
                          <Mail className="h-4 w-4" />
                          Email Ben
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="glass rounded-[1.75rem] p-5 shadow-soft">
                    <div className="text-sm text-slate-400">Tools &amp; Platforms</div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Microsoft Excel, PivotTables, XLOOKUP, PowerPoint, QuickBooks, Google Workspace
                    </div>
                  </div>
                  <div className="glass rounded-[1.75rem] p-5 shadow-soft">
                    <div className="text-sm text-slate-400">Technical Strengths</div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Financial Modeling, Valuation, Pricing Strategy, Cash-Flow Forecasting, Scenario Analysis, KPI Reporting
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 glass rounded-[2rem] p-7 shadow-soft">
                <h3 className="text-2xl font-semibold text-white">Resume Highlights</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                  <li className="flex gap-3">
                    <BulletDot />
                    <span>BBA Finance student at UNC Charlotte with a 3.7 GPA, expected graduation May 2028.</span>
                  </li>
                  <li className="flex gap-3">
                    <BulletDot />
                    <span>Financial Analyst at Higgins Digital managing pricing strategy, revenue tracking, and Excel-based dashboards.</span>
                  </li>
                  <li className="flex gap-3">
                    <BulletDot />
                    <span>Built two finance models: a business pricing and revenue model and a full DCF valuation analysis for Apple Inc.</span>
                  </li>
                  <li className="flex gap-3">
                    <BulletDot />
                    <span>{"Academic honors include 1x Chancellor's List and 3x Dean's List recognition at UNC Charlotte."}</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Financial Modeling</Pill>
                  <Pill>DCF Analysis</Pill>
                  <Pill>Pricing Strategy</Pill>
                  <Pill>Excel Dashboards</Pill>
                  <Pill>Business Valuation</Pill>
                </div>
              </div>
            </PageShell>
          </motion.div>
        )

      case 'contact':
        return (
          <motion.div key="contact" {...pageAnimation}>
            <PageShell>
              <SectionHeader
                eyebrow="CONNECTION → OPPORTUNITY"
                title="Contact"
                subtitle="Reach out for finance internships, analyst opportunities, project collaboration, or professional networking."
              />

              <div className="mx-auto max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.32)]"
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(27,47,94,0.18), transparent, rgba(196,150,59,0.09))' }}
                  />
                  <div className="absolute -right-20 top-0 h-56 w-56 rounded-full blur-3xl" style={{ background: 'rgba(27,47,94,0.20)' }} />
                  <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full blur-3xl" style={{ background: 'rgba(196,150,59,0.09)' }} />

                  <div className="relative">
                    <div
                      className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
                      style={{ color: GOLD }}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      {"Let's Connect"}
                    </div>

                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Direct Links</h3>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                      Reach out for finance internships, analyst opportunities, project collaboration, or professional networking.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {CONTACT_LINKS.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noreferrer' : undefined}
                            aria-label={`${item.label}: ${item.value}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.06 }}
                            whileHover={{ y: -4, scale: 1.015 }}
                            className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 p-5 transition duration-300 hover:border-yellow-500/20"
                            style={{ background: 'rgba(9,16,31,0.75)' }}
                          >
                            <div
                              className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                              style={{ background: `radial-gradient(circle at 30% 40%, ${item.glow}, transparent 70%)` }}
                            />
                            <div className="relative">
                              <div className="flex items-center justify-between">
                                <div
                                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110 group-hover:bg-white/10"
                                  style={{ color: GOLD }}
                                >
                                  <Icon className="h-5 w-5" />
                                </div>
                                <ExternalLink className="h-4 w-4 text-slate-500 transition duration-300 group-hover:text-yellow-400" />
                              </div>
                              <div className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
                              <div className="mt-2 break-words text-lg font-semibold text-white">{item.value}</div>
                            </div>
                          </motion.a>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </PageShell>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      {/* Fixed background layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-[0.035]" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'rgba(27,47,94,0.22)' }} />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{ background: 'rgba(196,150,59,0.09)' }} />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full blur-3xl" style={{ background: 'rgba(30,53,112,0.14)' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl" style={{ background: 'rgba(9,16,31,0.88)' }}>
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3.5 sm:flex">
              <LogoMark size="header" />
              <div className="leading-none">
                <div className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: GOLD }}>
                  BENJAMIN LEVY
                </div>
                {/* Update 1: "Financial Modeling" → "Pricing & Investment" */}
                <div className="whitespace-nowrap text-sm text-slate-400">Finance Student | Financial Analyst |</div>
                <div className="whitespace-nowrap text-sm text-slate-400">Pricing &amp; Investment | UNC Charlotte</div>
              </div>
            </div>
            {/* Mobile: logo only */}
            <div className="sm:hidden">
              <LogoMark size="header" />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-glow lg:flex">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const active = activePage === item.key
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActivePage(item.key)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    active ? 'text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                  style={active ? { background: GOLD } : {}}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Mobile active label */}
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 lg:hidden">
            {activeTitle}
          </div>
        </div>

        {/* Mobile scrollable nav */}
        <div className="section-shell pb-4 lg:hidden">
          <div className="flex snap-x gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-2">
            {NAV_ITEMS.map((item) => {
              const active = activePage === item.key
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActivePage(item.key)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    active ? 'text-slate-950' : 'text-slate-300'
                  }`}
                  style={active ? { background: GOLD } : {}}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>

      {/* Footer — Update 3: email and LinkedIn links removed */}
      <footer className="mt-10 border-t border-white/10 py-8" style={{ background: 'rgba(9,16,31,0.55)' }}>
        <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <LogoMark size="sm" />
            <div className="text-sm text-slate-400">
              <span className="font-medium text-white">Benjamin Levy</span>
              {' · Finance Student & Financial Analyst'}
            </div>
          </div>
          <div className="text-xs text-slate-600">{`© ${new Date().getFullYear()} Benjamin Levy`}</div>
        </div>
      </footer>
    </div>
  )
}
