# TASK.md — Benjamin Levy Portfolio Build

## Project Goal

Build a polished, recruiter-facing portfolio website for **Benjamin Levy** inside:

```bash
/Downloads/benportfolio
```

The site should feel like the same product family as **portfolio.davishiggins.com**, but it must be fully converted into Benjamin Levy's portfolio. Keep the **layout, page structure, tab flow, component behavior, navigation style, animation pacing, card hierarchy, section spacing, and overall premium portfolio feel almost exactly the same** as the Davis Higgins portfolio. Change the identity, colors, text, links, project data, resume information, and visual branding so the finished site belongs entirely to Ben.

This is not a redesign from scratch. This is a controlled conversion/re-skin of the existing portfolio experience into a finance-focused Benjamin Levy portfolio.

---

## Non-Negotiable Requirements

1. **Use `/Downloads/benportfolio` as the working project folder.**
2. **Preserve the Davis portfolio structure as closely as possible.**
   - Same general section order.
   - Same tab-style navigation behavior.
   - Same premium animated feel.
   - Same card-based project/experience presentation.
   - Same responsive layout logic.
   - Same polished spacing and transitions.
3. **Replace all Davis Higgins content with Benjamin Levy content.**
   - No Davis bio text.
   - No Davis resume bullets.
   - No Davis project descriptions.
   - No Davis social links unless they are part of Higgins Digital as Ben's employer/project context.
4. **Use completely different colors from the Davis portfolio.**
   - Do not use the same blue-forward Davis palette.
   - Do not make this look like a copy with only the name changed.
   - The site should feel finance-focused, premium, calm, trustworthy, and analytical.
5. **Do not invent facts.**
   - Use only the information in this task file, Ben's resume, the attached project files, and any assets already present in the repo.
   - If a specific asset is missing, create a tasteful placeholder or monogram rather than inventing a fake image.
6. **Keep the site production-ready.**
   - No broken links.
   - No placeholder lorem ipsum.
   - No console errors.
   - No unused Davis routes, imports, or data objects.
   - No outdated references to Davis AI, Davis Intelligence, Propify, or Davis-specific resume content unless those sections are being replaced intentionally.
7. **Visible website copy should be clean, concise, and professional.**
   - Avoid em dashes in visible copy.
   - Avoid exaggerated claims.
   - Prioritize recruiter-facing clarity.

---

## Source of Truth for Benjamin Levy

Use the following as Ben's portfolio identity and content.

### Primary Identity

**Name:** Benjamin Levy  
**Location:** Charlotte, NC  
**Email:** benjamin.levy2005@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/benjaminlevy1/  
**Primary Role Title:** Finance Student | Financial Analyst | Financial Modeling  
**Alternate Title Options:**
- Finance Student & Financial Analyst
- Financial Analyst | Valuation & Pricing Strategy
- Finance Student | Business Valuation | Excel Modeling
- Financial Analyst focused on pricing strategy, valuation, and business reporting

Use one clean title throughout the hero and metadata. Recommended:

```text
Finance Student | Financial Analyst | Financial Modeling
```

### Short Bio

Use this as the main hero/about summary:

```text
Benjamin Levy is a finance student at UNC Charlotte and Financial Analyst at Higgins Digital, focused on financial modeling, valuation, pricing strategy, revenue tracking, and Excel-based decision systems. He builds clean, practical analyses that turn financial data into clearer business decisions.
```

Shorter hero version:

```text
Finance student and analyst building Excel-based models, valuation analyses, pricing systems, and financial reports that turn numbers into better business decisions.
```

### Contact Policy

Use email and LinkedIn as the main public contact methods. Do not prominently display Ben's phone number on the live site unless the existing resume PDF already includes it in a downloadable resume file.

---

## Recommended Color System

Create a color palette that is fully different from Davis's portfolio while still feeling premium and professional.

### Theme Direction

**Finance / valuation / analytics aesthetic**

Use:
- Deep green-black background
- Emerald accents
- Muted antique gold highlights
- Ivory text
- Soft graphite cards
- Subtle spreadsheet/grid/chart-inspired background details

### CSS Variable Palette

Implement the palette through global CSS variables so the full site can be tuned easily.

```css
:root {
  --bg-primary: #07110D;
  --bg-secondary: #0B1C15;
  --bg-elevated: #10241C;
  --card-bg: rgba(13, 31, 24, 0.78);
  --card-bg-strong: rgba(17, 42, 32, 0.92);

  --text-primary: #F4F1E8;
  --text-secondary: #C6C7BA;
  --text-muted: #8F9A91;

  --accent-primary: #C8A96A;
  --accent-secondary: #2F8F6B;
  --accent-tertiary: #78D6A5;

  --border-soft: rgba(200, 169, 106, 0.20);
  --border-strong: rgba(200, 169, 106, 0.42);

  --shadow-soft: 0 18px 60px rgba(0, 0, 0, 0.32);
  --shadow-accent: 0 0 34px rgba(47, 143, 107, 0.22);
}
```

### Color Usage Rules

- Background: deep green-black gradient, not flat black.
- Cards: translucent dark green/graphite with soft borders.
- Primary accent: antique gold for key labels, section numbers, small dividers, active tabs, and CTA emphasis.
- Secondary accent: emerald for glow, chart lines, hover states, and active indicators.
- Text: ivory for headings, soft grey-green for body copy.
- Avoid bright blue, Carolina blue, neon cyan, or the exact Davis color system.
- Keep the same layout from Davis's portfolio, but the new color palette should make Ben's version feel like its own brand.

---

## Visual Identity

### Monogram / Logo

If a Ben-specific logo or headshot is not already present in the project assets, create a clean text-based monogram:

```text
BL
```

Recommended style:
- Circular or rounded-square mark
- Deep green background
- Antique gold border
- Ivory or gold letters
- Subtle emerald glow on hover

Use the monogram where Davis's DH logo or headshot brand mark currently appears if no Ben asset exists.

### Background Design

Keep the Davis portfolio's animated, premium, technical background pattern, but re-theme it for finance:

- Subtle financial grid lines
- Faint chart/candlestick-style vertical marks
- Small glowing dots at intersections
- Minimal animated gradient or light sweep
- Very subtle movement, never distracting
- No loud particles
- No crypto/trading gimmicks
- No excessive market imagery

The background should communicate:
- analysis
- precision
- financial systems
- confidence
- professionalism

---

## Site Structure to Preserve

Use the same section order and navigation pattern as the Davis portfolio unless the current repo already has a slightly different but intentional order.

Recommended final navigation:

```text
Home
Experience
Projects
Education
Skills
Impact
Resume
Contact
```

If the existing portfolio already has this order, keep it exactly. If it differs, update it to this order while preserving the same visual tab style and responsive hamburger/mobile behavior.

### Required Sections

1. Home
2. Experience
3. Projects
4. Education
5. Skills
6. Impact
7. Resume
8. Contact

Do not add unrelated pages. Do not add blog, services, AI assistant, or link hub sections.

---

## Page / Section Content

### 1. Home Section

#### Hero Heading

```text
Benjamin Levy
```

#### Hero Subtitle

```text
Finance Student | Financial Analyst | Financial Modeling
```

#### Hero Description

```text
Finance student and analyst building Excel-based models, valuation analyses, pricing systems, and financial reports that turn numbers into better business decisions.
```

#### Hero CTAs

Use the same button style/placement as Davis's portfolio.

Primary CTA:

```text
View Projects
```

Secondary CTA:

```text
View Resume
```

Tertiary/social CTA:

```text
LinkedIn
```

CTA link behavior:
- View Projects scrolls/routes to Projects.
- View Resume scrolls/routes to Resume.
- LinkedIn opens `https://www.linkedin.com/in/benjaminlevy1/` in a new tab.

#### Hero Supporting Stats

Use compact stat cards if the Davis portfolio has them. Recommended values:

```text
3.7 GPA
UNC Charlotte Finance
1x Chancellor's List
3x Dean's List
2 Finance Models
```

Do not overload the hero. Keep it clean.

---

### 2. Experience Section

Keep the same Experience card design from Davis's portfolio, but replace all content.

#### Experience 1

**Title:** Financial Analyst  
**Company:** Higgins Digital  
**Location:** Charlotte, NC  
**Dates:** May 2026 - Present  
**Company Link:** https://higginsd.com/

Bullets:

```text
Manage financial planning, pricing strategy, and revenue tracking for a web development company.
Build Excel-based dashboards to monitor client pipeline, payment status, project expenses, and monthly cash-flow projections.
Research agency pricing benchmarks, hosting/domain expenses, and small-business budget ranges to recommend competitive package structures while protecting company margins.
Develop financial summaries that improve proposal consistency, internal decision-making, and overall business professionalism.
```

Suggested tags:

```text
Financial Planning
Pricing Strategy
Revenue Tracking
Excel Dashboards
Cash Flow
Business Reporting
```

Design notes:
- This should be the featured experience card.
- Use Higgins Digital as an employer, not as Davis's personal brand.
- If a Higgins Digital logo exists in assets, use it tastefully in the card. If not, use a text badge.

#### Experience 2

**Title:** Food Service Worker  
**Company:** Piada Italian Street Food  
**Location:** Charlotte, NC  
**Dates:** October 2025 - Present  

Bullets:

```text
Process high-volume customer transactions accurately in a fast-paced environment while maintaining service quality, operational efficiency, and attention to detail.
Coordinate with team members across register, prep, and order fulfillment to reduce wait times, resolve guest needs, and support smooth daily operations.
```

Suggested tags:

```text
Operations
Customer Service
Team Coordination
Efficiency
Attention to Detail
```

#### Volunteer Experience

If the Davis portfolio has leadership, service, or involvement cards, add this as a supporting experience card. If not, place it in Experience or Impact.

**Title:** Event Hospitality Volunteer  
**Organization:** Phi Delta Theta  
**Location:** Charlotte, NC  

Bullets:

```text
Prepared and served meals for philanthropy, fellowship, and Bible study events run by Phi Delta Theta.
Supported event setup, food coordination, guest hospitality, and cleanup for recurring campus gatherings.
Coordinated with fraternity members to ensure meals were prepared on time and events ran smoothly.
```

Suggested tags:

```text
Hospitality
Service
Event Support
Coordination
Campus Involvement
```

---

### 3. Projects Section

Keep the same project-card layout and animations from Davis's portfolio. Replace project data with Ben's finance projects.

Each project card should include:
- Project title
- Short description
- Skills/tools used
- Key outcomes
- Buttons for details and/or workbook downloads
- A clean finance-style thumbnail/mockup if no screenshot exists

#### Project 1: Business Pricing & Revenue Model

**Title:** Business Pricing & Revenue Model  
**Category:** Financial Modeling | Pricing Strategy | Excel  
**Related Organization:** Higgins Digital  
**Suggested Featured Badge:** Featured Finance Model  

Short description:

```text
Built a dynamic Excel model for a service-based business that combines package pricing, labor estimates, software costs, recurring expenses, margin targets, break-even logic, and scenario analysis.
```

Expanded description:

```text
This project models Higgins Digital's website packages and modification tiers using official pricing inputs, estimated direct costs, recurring operating assumptions, and conservative, base, and growth scenarios. The workbook translates service pricing into projected gross margin, client savings, monthly cash flow, tax reserve, and 12-month ending cash.
```

Key highlights:

```text
Modeled official package prices for Essential Presence, Growth Standard, and Enterprise Logic.
Created pricing logic for Quick Fix, Standard Mod, Advanced Mod, and Full Transformation modification tiers.
Built conservative, base, and growth operating cases.
Created a 12-month cash-flow forecast using base-case assumptions.
Summarized KPI outputs in an executive dashboard.
Compared official package pricing against market averages to show estimated client savings.
```

Metric callouts from the workbook:

```text
Entry Package: $1,000
Most Popular Package: $2,500
Enterprise Starting Price: $5,000+
Average Savings vs Market: ~71.4%
Base Monthly Net Cash Flow: ~$2,838.60
12-Month Ending Cash: ~$35,563.20
```

Tools/skills tags:

```text
Microsoft Excel
Pricing Strategy
Scenario Analysis
Break-Even Analysis
Cash-Flow Forecasting
Revenue Tracking
Margin Analysis
Dashboarding
```

Suggested project buttons:
- `View Summary`
- `Download Workbook`

Asset/file guidance:
- If available, place the workbook in `/public/documents/`.
- Use the existing file name or a clean web-safe renamed version:
  - `business-pricing-revenue-model-ben-levy.xlsx`
- Link the download button to the workbook.
- If there is no visual screenshot, create a CSS-based thumbnail that resembles a dark financial dashboard with KPI cards, grid lines, and a small line chart.

#### Project 2: Investment Valuation & Financial Statement Analysis

**Title:** Investment Valuation & Financial Statement Analysis  
**Category:** Valuation | DCF | Comparable Company Analysis  
**Company Analyzed:** Apple Inc.  
**Suggested Badge:** Valuation Model  

Short description:

```text
Completed a company valuation project using financial statement analysis, cash-flow forecasting, DCF methodology, sensitivity analysis, and comparable company multiples.
```

Expanded description:

```text
This project evaluates Apple Inc. through a student-built valuation model that combines profitability, liquidity, leverage, cash-flow quality, a DCF forecast, WACC and terminal growth sensitivity, and comparable company multiple analysis. The output is presentation-ready and intended for educational analysis, not investment advice.
```

Key highlights:

```text
Analyzed revenue growth, gross margin, operating margin, net income margin, free-cash-flow margin, current ratio, debt/equity, ROA, and ROE.
Built a DCF model using forecast revenue, operating margin, tax rate, D&A, capex, working capital, WACC, and terminal growth assumptions.
Created a WACC and terminal growth sensitivity table.
Built a comparable company analysis using large-cap technology peers.
Summarized strengths, risks, liquidity/leverage, valuation view, and conclusion framing in a presentation-ready summary tab.
```

Metric callouts from the workbook:

```text
DCF Implied Value / Share: ~$134.29
Current Reference Price Placeholder: $250.00
EV/Revenue Comps Implied Price: ~$264.35
P/E Comps Implied Price: ~$243.04
FY2025 Free Cash Flow Margin: ~23.7%
WACC Assumption: 8.5%
Terminal Growth Assumption: 2.5%
```

Important disclaimer to include in detail view or small footer text:

```text
Educational analysis only. Not investment advice.
```

Tools/skills tags:

```text
DCF Analysis
Financial Statement Analysis
Comparable Company Analysis
WACC
Sensitivity Analysis
Cash-Flow Forecasting
Equity Valuation
Microsoft Excel
```

Suggested project buttons:
- `View Summary`
- `Download Workbook`

Asset/file guidance:
- If available, place the workbook in `/public/documents/`.
- Use the existing file name or a clean web-safe renamed version:
  - `investment-valuation-analysis-ben-levy.xlsm`
- Link the download button to the workbook.
- If there is no visual screenshot, create a CSS-based thumbnail that resembles a valuation summary dashboard with a DCF sensitivity grid and valuation cards.

---

### 4. Education Section

Use the same Education design pattern as Davis's portfolio.

**School:** University of North Carolina at Charlotte  
**Degree:** Bachelor of Business Administration in Finance  
**Dates:** August 2024 - Present  
**Expected Graduation:** May 2028  
**GPA:** 3.7  
**Honors:** 1x Chancellor's List, 3x Dean's List  

Suggested copy:

```text
Pursuing a Bachelor of Business Administration in Finance at UNC Charlotte with academic honors and a focus on financial modeling, valuation, business analysis, and decision-focused reporting.
```

Suggested tags:

```text
Finance
Business Administration
UNC Charlotte
Financial Modeling
Valuation
Academic Honors
```

If the Davis portfolio uses logos in Education, use a UNC Charlotte mark only if an approved asset already exists in the repo. Otherwise use a clean text badge.

---

### 5. Skills Section

Keep the same skill-card grid structure as Davis's portfolio. Replace with Ben's skills.

#### Skill Group 1: Finance & Accounting

```text
Financial Modeling
DCF Analysis
Budgeting & Forecasting
Pricing Strategy
Revenue Tracking
Cost Analysis
Margin Analysis
Cash Flow Management
Business Valuation
```

#### Skill Group 2: Analytics & Reporting

```text
KPI Reporting
Scenario Analysis
Trend Analysis
Market Research
Financial Statement Analysis
Risk Assessment
Stakeholder Reporting
```

#### Skill Group 3: Tools & Platforms

```text
Microsoft Excel
PivotTables
XLOOKUP
INDEX/MATCH
Scenario Manager
PowerPoint
Word
Google Workspace
QuickBooks
Generative AI
```

Recommended visual treatment:
- Use compact skill chips.
- Group chips under finance-themed section cards.
- Add subtle hover glow in emerald/gold.
- Keep it less tech-heavy than Davis's site.
- Do not include web development skills unless directly tied to Higgins Digital finance work.

---

### 6. Impact Section

Keep the same Impact layout and card styling from Davis's portfolio, but convert it to finance/recruiter-facing outcomes.

Recommended impact cards:

#### Impact Card 1

**Number / Label:** 2  
**Title:** Finance Models Built  
**Description:** Built workbook-based financial models for business pricing, revenue planning, valuation, and financial statement analysis.

#### Impact Card 2

**Number / Label:** 3.7  
**Title:** Finance GPA  
**Description:** Maintains strong academic performance while pursuing a BBA in Finance at UNC Charlotte.

#### Impact Card 3

**Number / Label:** 4x  
**Title:** Academic Honors  
**Description:** Earned 1x Chancellor's List and 3x Dean's List recognition.

#### Impact Card 4

**Number / Label:** 71%  
**Title:** Pricing Model Savings Benchmark  
**Description:** Modeled Higgins Digital package pricing against market averages, showing an estimated average client savings of roughly 71% in the workbook.

#### Impact Card 5

**Number / Label:** $35.6K  
**Title:** 12-Month Ending Cash Projection  
**Description:** Built a base-case cash-flow forecast projecting year-end cash from the business pricing model assumptions.

Keep the impact claims grounded in the provided resume and workbooks.

---

### 7. Resume Section

Replace Davis's resume section with Ben's.

Recommended section heading:

```text
Resume
```

Recommended section copy:

```text
A concise overview of Ben's finance education, financial analysis experience, Excel modeling projects, and business reporting skills.
```

Buttons:
- `Open Resume`
- `Download Resume`
- `Email Ben`

Asset/file guidance:
- Place Ben's resume PDF in `/public/documents/` if available.
- Recommended web-safe file name:
  - `benjamin-levy-resume.pdf`
- Update all resume iframe/embed/download links to use Ben's resume.
- If the PDF is not in the project folder, do not leave a broken button. Use the Contact CTA instead and add a TODO comment in the code.

Resume content to reflect in the page:
- BBA Finance, UNC Charlotte, expected May 2028
- GPA 3.7
- 1x Chancellor's List, 3x Dean's List
- Financial Analyst at Higgins Digital
- Finance modeling projects
- Excel, valuation, pricing, reporting, and QuickBooks skill set

---

### 8. Contact Section

Use the same Contact layout from Davis's portfolio, but simplify for Ben.

Heading:

```text
Let's Connect
```

Description:

```text
Reach out for finance internships, analyst opportunities, project collaboration, or professional networking.
```

Contact methods:
- Email: `benjamin.levy2005@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/benjaminlevy1/`

Suggested contact cards:
- Email Ben
- View LinkedIn
- View Resume

Do not include a contact form unless the existing Davis portfolio already has one and it is fully functional. If a form exists but is not connected to a backend, either remove it or make it a mailto link. No dead forms.

---

## Metadata / SEO

Update all site metadata.

### Title

```text
Benjamin Levy | Finance Portfolio
```

### Description

```text
Finance portfolio for Benjamin Levy, a UNC Charlotte finance student and financial analyst focused on financial modeling, valuation, pricing strategy, and Excel-based business reporting.
```

### Keywords

```text
Benjamin Levy, finance portfolio, financial analyst, UNC Charlotte finance, financial modeling, DCF analysis, business valuation, pricing strategy, Excel modeling, revenue tracking
```

### Open Graph

Update:
- `og:title`
- `og:description`
- `og:url`
- `og:image` if an image exists
- favicon or tab icon if the repo supports it

Do not leave Davis's name in `index.html`, metadata, manifest, SEO files, or structured data.

---

## Data / Code Refactor Requirements

Before editing UI, inspect the repo structure. Determine whether content is centralized in files such as:

```text
src/data/*
src/content/*
src/pages/*
src/components/*
src/App.jsx
src/App.tsx
src/main.jsx
src/main.tsx
```

Then update content in the most centralized way possible.

### Replace Davis-Specific Data

Search the entire repo for:

```text
Davis
Davis Higgins
DH
davishiggins
portfolio.davishiggins.com
Higgins Digital Founder
Data Analyst Intern
Propify
Kewaunee
Davis Intelligence
Davis AI
Ask My Portfolio
links.davishiggins.com
ai.davishiggins.com
```

Replace or remove every Davis-specific instance unless it is intentionally kept as:
- Higgins Digital employer link: `https://higginsd.com/`
- Portfolio reference in a developer comment only, not visible UI

### Content Architecture

Prefer a single data object such as:

```js
const profile = {
  name: "Benjamin Levy",
  location: "Charlotte, NC",
  email: "benjamin.levy2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjaminlevy1/",
  title: "Finance Student | Financial Analyst | Financial Modeling",
  summary: "Finance student and analyst building Excel-based models, valuation analyses, pricing systems, and financial reports that turn numbers into better business decisions."
};
```

If the existing Davis portfolio uses centralized arrays for experience, projects, skills, education, and impact, keep that pattern and simply replace the data.

---

## Recommended Project Data Objects

Use or adapt the following if the repo has data-driven cards.

```js
export const profile = {
  name: "Benjamin Levy",
  shortName: "Ben Levy",
  initials: "BL",
  location: "Charlotte, NC",
  email: "benjamin.levy2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjaminlevy1/",
  title: "Finance Student | Financial Analyst | Financial Modeling",
  summary:
    "Finance student and analyst building Excel-based models, valuation analyses, pricing systems, and financial reports that turn numbers into better business decisions.",
};
```

```js
export const experience = [
  {
    role: "Financial Analyst",
    company: "Higgins Digital",
    location: "Charlotte, NC",
    dates: "May 2026 - Present",
    link: "https://higginsd.com/",
    bullets: [
      "Manage financial planning, pricing strategy, and revenue tracking for a web development company.",
      "Build Excel-based dashboards to monitor client pipeline, payment status, project expenses, and monthly cash-flow projections.",
      "Research agency pricing benchmarks, hosting/domain expenses, and small-business budget ranges to recommend competitive package structures while protecting company margins.",
      "Develop financial summaries that improve proposal consistency, internal decision-making, and overall business professionalism."
    ],
    tags: [
      "Financial Planning",
      "Pricing Strategy",
      "Revenue Tracking",
      "Excel Dashboards",
      "Cash Flow",
      "Business Reporting"
    ]
  },
  {
    role: "Food Service Worker",
    company: "Piada Italian Street Food",
    location: "Charlotte, NC",
    dates: "October 2025 - Present",
    bullets: [
      "Process high-volume customer transactions accurately in a fast-paced environment while maintaining service quality, operational efficiency, and attention to detail.",
      "Coordinate with team members across register, prep, and order fulfillment to reduce wait times, resolve guest needs, and support smooth daily operations."
    ],
    tags: [
      "Operations",
      "Customer Service",
      "Team Coordination",
      "Efficiency",
      "Attention to Detail"
    ]
  },
  {
    role: "Event Hospitality Volunteer",
    company: "Phi Delta Theta",
    location: "Charlotte, NC",
    dates: "Campus Involvement",
    bullets: [
      "Prepared and served meals for philanthropy, fellowship, and Bible study events run by Phi Delta Theta.",
      "Supported event setup, food coordination, guest hospitality, and cleanup for recurring campus gatherings.",
      "Coordinated with fraternity members to ensure meals were prepared on time and events ran smoothly."
    ],
    tags: [
      "Hospitality",
      "Service",
      "Event Support",
      "Coordination",
      "Campus Involvement"
    ]
  }
];
```

```js
export const projects = [
  {
    title: "Business Pricing & Revenue Model",
    category: "Financial Modeling | Pricing Strategy | Excel",
    badge: "Featured Finance Model",
    description:
      "Built a dynamic Excel model for a service-based business that combines package pricing, labor estimates, software costs, recurring expenses, margin targets, break-even logic, and scenario analysis.",
    details:
      "This project models Higgins Digital's website packages and modification tiers using official pricing inputs, estimated direct costs, recurring operating assumptions, and conservative, base, and growth scenarios.",
    highlights: [
      "Modeled official package prices for Essential Presence, Growth Standard, and Enterprise Logic.",
      "Created pricing logic for Quick Fix, Standard Mod, Advanced Mod, and Full Transformation modification tiers.",
      "Built conservative, base, and growth operating cases.",
      "Created a 12-month cash-flow forecast using base-case assumptions.",
      "Summarized KPI outputs in an executive dashboard.",
      "Compared official package pricing against market averages to show estimated client savings."
    ],
    metrics: [
      { label: "Entry Package", value: "$1,000" },
      { label: "Most Popular", value: "$2,500" },
      { label: "Enterprise Starting", value: "$5,000+" },
      { label: "Avg. Savings vs Market", value: "~71.4%" },
      { label: "Base Monthly Net Cash Flow", value: "~$2,838.60" },
      { label: "12-Month Ending Cash", value: "~$35,563.20" }
    ],
    tags: [
      "Microsoft Excel",
      "Pricing Strategy",
      "Scenario Analysis",
      "Break-Even Analysis",
      "Cash-Flow Forecasting",
      "Revenue Tracking",
      "Margin Analysis",
      "Dashboarding"
    ],
    links: [
      { label: "View Summary", href: "#business-pricing-summary" },
      { label: "Download Workbook", href: "/documents/business-pricing-revenue-model-ben-levy.xlsx" }
    ]
  },
  {
    title: "Investment Valuation & Financial Statement Analysis",
    category: "Valuation | DCF | Comparable Company Analysis",
    badge: "Valuation Model",
    description:
      "Completed a company valuation project using financial statement analysis, cash-flow forecasting, DCF methodology, sensitivity analysis, and comparable company multiples.",
    details:
      "This project evaluates Apple Inc. through a student-built valuation model that combines profitability, liquidity, leverage, cash-flow quality, a DCF forecast, WACC and terminal growth sensitivity, and comparable company multiple analysis.",
    highlights: [
      "Analyzed revenue growth, gross margin, operating margin, net income margin, free-cash-flow margin, current ratio, debt/equity, ROA, and ROE.",
      "Built a DCF model using forecast revenue, operating margin, tax rate, D&A, capex, working capital, WACC, and terminal growth assumptions.",
      "Created a WACC and terminal growth sensitivity table.",
      "Built a comparable company analysis using large-cap technology peers.",
      "Summarized strengths, risks, liquidity/leverage, valuation view, and conclusion framing in a presentation-ready summary tab."
    ],
    metrics: [
      { label: "DCF Value / Share", value: "~$134.29" },
      { label: "Reference Price Placeholder", value: "$250.00" },
      { label: "EV/Revenue Comps Price", value: "~$264.35" },
      { label: "P/E Comps Price", value: "~$243.04" },
      { label: "FY2025 FCF Margin", value: "~23.7%" },
      { label: "WACC", value: "8.5%" },
      { label: "Terminal Growth", value: "2.5%" }
    ],
    tags: [
      "DCF Analysis",
      "Financial Statement Analysis",
      "Comparable Company Analysis",
      "WACC",
      "Sensitivity Analysis",
      "Cash-Flow Forecasting",
      "Equity Valuation",
      "Microsoft Excel"
    ],
    disclaimer: "Educational analysis only. Not investment advice.",
    links: [
      { label: "View Summary", href: "#investment-valuation-summary" },
      { label: "Download Workbook", href: "/documents/investment-valuation-analysis-ben-levy.xlsm" }
    ]
  }
];
```

```js
export const education = {
  school: "University of North Carolina at Charlotte",
  degree: "Bachelor of Business Administration in Finance",
  dates: "August 2024 - Present",
  expectedGraduation: "May 2028",
  gpa: "3.7",
  honors: ["1x Chancellor's List", "3x Dean's List"],
  summary:
    "Pursuing a Bachelor of Business Administration in Finance at UNC Charlotte with academic honors and a focus on financial modeling, valuation, business analysis, and decision-focused reporting."
};
```

```js
export const skills = [
  {
    group: "Finance & Accounting",
    items: [
      "Financial Modeling",
      "DCF Analysis",
      "Budgeting & Forecasting",
      "Pricing Strategy",
      "Revenue Tracking",
      "Cost Analysis",
      "Margin Analysis",
      "Cash Flow Management",
      "Business Valuation"
    ]
  },
  {
    group: "Analytics & Reporting",
    items: [
      "KPI Reporting",
      "Scenario Analysis",
      "Trend Analysis",
      "Market Research",
      "Financial Statement Analysis",
      "Risk Assessment",
      "Stakeholder Reporting"
    ]
  },
  {
    group: "Tools & Platforms",
    items: [
      "Microsoft Excel",
      "PivotTables",
      "XLOOKUP",
      "INDEX/MATCH",
      "Scenario Manager",
      "PowerPoint",
      "Word",
      "Google Workspace",
      "QuickBooks",
      "Generative AI"
    ]
  }
];
```

```js
export const impact = [
  {
    value: "2",
    label: "Finance Models Built",
    description:
      "Built workbook-based financial models for business pricing, revenue planning, valuation, and financial statement analysis."
  },
  {
    value: "3.7",
    label: "Finance GPA",
    description:
      "Maintains strong academic performance while pursuing a BBA in Finance at UNC Charlotte."
  },
  {
    value: "4x",
    label: "Academic Honors",
    description:
      "Earned 1x Chancellor's List and 3x Dean's List recognition."
  },
  {
    value: "71%",
    label: "Pricing Model Savings Benchmark",
    description:
      "Modeled Higgins Digital package pricing against market averages, showing an estimated average client savings of roughly 71% in the workbook."
  },
  {
    value: "$35.6K",
    label: "12-Month Ending Cash Projection",
    description:
      "Built a base-case cash-flow forecast projecting year-end cash from the business pricing model assumptions."
  }
];
```

---

## Workbook / Document Asset Instructions

The portfolio should showcase Ben's two attached finance projects.

### Project Files to Add

If the files exist locally, copy them into:

```text
public/documents/
```

Recommended names:

```text
public/documents/business-pricing-revenue-model-ben-levy.xlsx
public/documents/investment-valuation-analysis-ben-levy.xlsm
public/documents/benjamin-levy-resume.pdf
```

If the files are not currently inside `/Downloads/benportfolio`, do not create broken links. Add clear TODO comments in the code and keep the visible UI button hidden or disabled until the file exists.

### Download Button Rules

- Buttons must work.
- Buttons must open/download the correct asset.
- Use `target="_blank"` and `rel="noopener noreferrer"` for external/new-tab links.
- Use `download` where appropriate for workbook files.
- No dead buttons.
- No placeholder `#` links unless they scroll to a real in-page project summary.

---

## Design Implementation Notes

### Preserve These From Davis Portfolio

Keep these unless they are broken:
- Overall page rhythm
- Section spacing
- Tab navigation
- Route/scroll transition behavior
- Card hover effects
- Project card layout
- Experience card layout
- Resume display pattern
- Contact card pattern
- Mobile responsive behavior
- Hamburger menu, if present
- Background animation system, but recolored/re-themed

### Change These For Ben

- Name
- Role/title
- Bio
- Resume content
- Experience
- Projects
- Skills
- Education
- Impact cards
- Accent colors
- Logos/monograms
- Metadata
- Favicon/title
- Social links
- Document download links

### Animation Rules

- Animations should be smooth and professional.
- Use the same animation library already in the project.
- Do not add heavy animation dependencies.
- Avoid distracting movement in finance project cards.
- Hover states should slightly lift cards and brighten borders.
- Active tab should have a clean gold/emerald treatment.

### Typography

Keep the Davis portfolio's type hierarchy if it is already polished. Re-tune only if necessary for Ben's copy.

Recommended feel:
- Strong, clean headings
- Slightly condensed or polished professional heading treatment
- Easy-to-read body text
- Finance-dashboard feel without looking like a bank template

---

## Responsive Requirements

Test and fix:
- Desktop
- Laptop
- Tablet
- Mobile

On mobile:
- Navigation should collapse cleanly.
- Hero should not overflow.
- Project metrics should wrap cleanly.
- Skills chips should stay readable.
- Resume buttons should stack gracefully.
- No sideways scrolling.

---

## Accessibility Requirements

- Use semantic headings.
- Buttons and links need clear accessible labels.
- Maintain contrast between text and dark background.
- Do not rely on color alone for meaning.
- Add `aria-label` to icon-only links.
- External links should indicate purpose through accessible text.
- Respect reduced-motion preferences if the existing site supports it.

---

## Quality Control Checklist

Before finalizing, complete this checklist.

### Content Audit

- [ ] No visible Davis Higgins name remains.
- [ ] No Davis-specific project remains.
- [ ] No Davis-specific AI assistant content remains.
- [ ] No Propify/Kewaunee/Davis link content remains unless intentionally removed.
- [ ] Benjamin Levy's name appears correctly in hero, metadata, resume section, and footer.
- [ ] Email is `benjamin.levy2005@gmail.com`.
- [ ] LinkedIn URL is `https://www.linkedin.com/in/benjaminlevy1/`.
- [ ] Higgins Digital is included only as Ben's employer/project context.
- [ ] UNC Charlotte education details are accurate.
- [ ] GPA is 3.7.
- [ ] Expected graduation is May 2028.
- [ ] Honors are 1x Chancellor's List and 3x Dean's List.
- [ ] Project metrics match the task file.
- [ ] Investment valuation project includes educational/not investment advice disclaimer.

### Visual Audit

- [ ] The layout still closely matches portfolio.davishiggins.com.
- [ ] The color palette is clearly different from Davis's site.
- [ ] Cards, tabs, buttons, and section spacing feel consistent.
- [ ] Background is premium and subtle.
- [ ] Mobile design is clean.
- [ ] No awkward wrapping in project metrics.
- [ ] No tiny unreadable text.
- [ ] No visual artifacts from replaced logos/images.
- [ ] Footer is updated for Benjamin Levy.

### Technical Audit

- [ ] Run dependency install if needed.
- [ ] Run the production build.
- [ ] Fix all build errors.
- [ ] Fix all import/export errors.
- [ ] Remove unused Davis assets/imports if they break build or appear visibly.
- [ ] Confirm all internal navigation targets work.
- [ ] Confirm all external links work.
- [ ] Confirm document links do not 404.
- [ ] Confirm no console errors.
- [ ] Confirm no broken image paths.

---

## Commands

Run the appropriate commands for the project. Start with:

```bash
cd /Downloads/benportfolio
```

Inspect package scripts:

```bash
cat package.json
```

Install dependencies if needed:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build before final response:

```bash
npm run build
```

If the project uses a different package manager, follow the existing lockfile:
- `package-lock.json` -> npm
- `pnpm-lock.yaml` -> pnpm
- `yarn.lock` -> yarn

Do not switch package managers unless the repo is already configured for it.

---

## Final Deliverable Expectations

When done, the portfolio should feel like:

```text
The Davis Higgins portfolio architecture, rebuilt for Benjamin Levy as a premium finance portfolio.
```

It should immediately communicate:
- Ben is a finance student at UNC Charlotte.
- Ben has financial analysis experience at Higgins Digital.
- Ben can build practical Excel-based finance models.
- Ben understands pricing strategy, valuation, reporting, and cash-flow analysis.
- Ben has strong academic performance and professionalism.
- Ben is ready for finance internships, analyst roles, and business-facing opportunities.

The finished site should be clean, impressive, minimal, finance-focused, and recruiter-ready.
