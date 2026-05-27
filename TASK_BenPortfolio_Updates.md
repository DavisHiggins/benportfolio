# TASK.md - Benjamin Levy Portfolio Update Pass

## Project
Benjamin Levy portfolio project

## Local project path
`/Downloads/benportfolio`

## Objective
Implement the following targeted updates to the Benjamin Levy portfolio while preserving the current structure, layout, animation style, responsiveness, and overall design system. This is an update pass only. Do not rebuild the site from scratch. Do not redesign unrelated sections. Do not remove working functionality unless explicitly requested below.

The site should remain almost identical in structure to the existing Davis Higgins portfolio style, but with Benjamin Levy branding, finance-focused content, and the current gold/navy visual system already established in this Ben portfolio.

---

## Claude Code operating instructions

1. Start from the current repo state in `/Downloads/benportfolio`.
2. Inspect the existing file structure before editing.
3. Identify where content is stored first. It may be in React page components, shared data files, constants, assets, or route config.
4. Make the smallest safe changes necessary.
5. Do not create duplicate components if an existing component can be updated cleanly.
6. Do not change route names, tab behavior, spacing systems, animations, or page structure except where this task explicitly says to remove or reroute something.
7. Keep the portfolio professional, polished, finance-oriented, and recruiter-facing.
8. Preserve the existing gold/navy color palette unless a specific change is requested.
9. Use existing assets from `src/assets` whenever possible.
10. After changes, run the project build command and fix all errors.
11. Confirm there are no broken imports, missing assets, console errors, or dead navigation links.
12. Do not ask for permission before modifying files. Implement the full task.

---

# Required updates

## 1. Update the main professional headline text

Find the current headline text:

```text
Finance Student | Financial Analyst |
Financial Modeling | UNC Charlotte
```

Replace it with:

```text
Finance Student | Financial Analyst |
Pricing & Investment | UNC Charlotte
```

### Requirements
- Keep the same placement, typography, line-break behavior, and animation.
- Only change the wording.
- Do not change the surrounding hero/home layout.
- If the text is stored as a single string, use:
  `Finance Student | Financial Analyst | Pricing & Investment | UNC Charlotte`
- If the text is split across lines or spans, preserve the current line break pattern and replace only `Financial Modeling` with `Pricing & Investment`.

---

## 2. Update the two project workbook links to point to the actual Google Sheets workbooks

The two project cards currently have links labeled something like:

```text
Download Workbook
```

These should no longer feel like local downloadable files unless the code is intentionally opening the Google Sheets workbook. Update each project link so it opens the correct actual workbook.

### Investment Valuation project
For the project titled:

```text
Investment Valuation & Financial Statement Analysis
```

Set the workbook link URL to:

```text
https://docs.google.com/spreadsheets/d/15XXEzKcjVFqcBTf1r7wek5EUE739RMLM/edit?usp=sharing&ouid=100983707533631985610&rtpof=true&sd=true
```

### Business Pricing project
For the project titled:

```text
Business Pricing & Revenue Model
```

Set the workbook link URL to:

```text
https://docs.google.com/spreadsheets/d/16apOj8IIzPGqFkFvHIwrObDSTcFZB123/edit?usp=sharing&ouid=100983707533631985610&rtpof=true&sd=true
```

### Link text requirement
Replace the visible link/button text from:

```text
Download Workbook
```

with a clearer external-workbook label, preferably:

```text
View Workbook
```

or, if the existing button style works better with slightly longer text:

```text
Open Workbook
```

### Behavior requirements
- Links must open in a new browser tab.
- Use:
  - `target="_blank"`
  - `rel="noopener noreferrer"`
- Do not route these links through React Router.
- Do not point to local files.
- Do not remove project descriptions, metrics, tags, icons, animations, or card layout.

---

## 3. Remove email and LinkedIn links from the footer

Remove the email and LinkedIn links from the footer only.

### Requirements
- Do not remove email or LinkedIn links from the header, contact section, hero section, resume/contact area, or anywhere else unless they are specifically inside the footer.
- Preserve the footer layout and visual balance after removing them.
- If the footer has social/contact icon buttons, remove the email and LinkedIn buttons.
- If the footer has text links, remove only those two links.
- Do not leave awkward gaps, orphan dividers, empty link wrappers, or unused icons.

---

## 4. Remove the Impact tab completely

Remove the `Impact` tab from the entire portfolio.

### Requirements
- Remove it from the main navigation.
- Remove it from mobile navigation.
- Remove it from any sticky/section navigation.
- Remove the route if the app uses React Router routes.
- Remove or disable any data/config object that creates the Impact tab.
- Remove any Impact page import if it becomes unused.
- Do not leave broken links to `/impact`, `#impact`, or any Impact route.
- If the site has route transitions, do not break them.
- If Impact content was part of a single-page section, remove that section entirely.
- Ensure the rest of the tabs still work in the same order and style.

### Do not remove
- Experience
- Projects
- Skills
- Education
- Resume
- Contact
- Any other existing non-Impact tabs

Only remove Impact.

---

## 5. Replace the briefcase icon in the home page current-role bubble with the Higgins Digital logo

On the home page, find the current role bubble/card. It currently uses a briefcase icon.

Replace the briefcase icon with the Higgins Digital logo found in `src/assets`.

### Requirements
- Use the existing Higgins Digital logo asset already present in `src/assets`.
- Do not import a new external image.
- Do not use an emoji.
- Do not use the briefcase icon anywhere inside that role bubble after this change.
- Keep the same bubble/card size, spacing, and alignment.
- The logo should fit cleanly where the icon was.
- It should not appear pixelated, stretched, cropped, or off-center.
- Add a small logo image class if necessary, such as:
  - `object-contain`
  - fixed width/height matching the previous icon size
  - `alt="Higgins Digital logo"`

### Visual intent
The current role bubble should feel more branded and specific to Ben’s Financial Analyst role at Higgins Digital.

---

## 6. Increase the size of the BL logo across the entire portfolio without increasing the surrounding white square

Across the entire portfolio, the BL logo appears inside a white square or white logo tile. Increase the BL mark itself, but do not increase the outer white square.

### Requirements
- Do not enlarge the white square/tile/container.
- Do not change the white square dimensions, border radius, padding, or placement unless the current implementation makes the inner logo impossible to adjust.
- Increase only the BL logo/letters inside the square.
- The BL mark should appear more prominent and fill more of the available inner space.
- Do this everywhere the BL logo is used:
  - Header/nav
  - Footer if present
  - Hero/home
  - Loading screen if present
  - Any project cards or page headers where the BL logo appears
- Keep it sharp and centered.
- Do not crop the BL mark.
- If the logo is an image, adjust the image sizing inside its wrapper.
- If the logo is SVG/component text, adjust the internal scale/font size/viewBox/group transform while preserving the outer wrapper.

### Suggested implementation approach
Search for:
- `BL`
- `Logo`
- `logo`
- `brand`
- `BrandLogo`
- `LogoMark`
- `src/assets`
- white square wrapper classes

Then update the inner element size only.

---

## 7. Replace the Resume tab button from “Download Resume” to “View Skills”

In the Resume tab/page, find the button currently labeled:

```text
Download Resume
```

Replace it with:

```text
View Skills
```

### Behavior requirement
The `View Skills` button should take the user to the Skills tab.

### Implementation requirements
- If the app uses React Router, navigate to the Skills route.
  - Example: `/skills`
- If the app uses anchor sections, scroll/navigate to the Skills section.
  - Example: `#skills`
- If tabs are controlled by state, trigger the Skills tab state.
- Do not download the resume.
- Do not link to a PDF.
- Do not keep download attributes.
- Keep the same button styling, animation, hover behavior, and placement.
- Make sure the button works from desktop and mobile.
- Make sure the active tab/nav state updates correctly if applicable.

---

## 8. Replace the UNC icon in the Education tab with the UNCC transparent logo asset and recolor it gold

In the Education tab/page, replace the current generic/UNC icon with the file:

```text
uncclogotrans
```

This file should already be in `src/assets`.

### Requirements
- Locate the exact asset file in `src/assets`. The filename may include an extension, such as:
  - `uncclogotrans.png`
  - `uncclogotrans.webp`
  - `uncclogotrans.svg`
  - or similar
- Import and use that asset in the Education tab where the current UNC icon appears.
- Replace the current icon completely.
- The logo should be the same gold color used throughout the portfolio.
- If the asset is SVG and can accept CSS coloring, use the portfolio gold color via `currentColor`, `fill`, `filter`, or CSS mask if appropriate.
- If the asset is PNG/WebP and green by default, recolor it visually using the cleanest available method:
  1. Prefer using an SVG version if present.
  2. If only raster image exists, use a CSS filter to match the portfolio gold as closely as possible.
  3. If CSS filter is not accurate, create a gold monochrome version from the existing asset and save it in `src/assets` with a clear name such as `uncclogotrans-gold.png`.
- Do not leave the logo green.
- Do not use the official green color.
- Do not distort the logo.
- Use `object-contain` and preserve aspect ratio.
- Add meaningful alt text:
  `alt="UNC Charlotte logo"`

### Visual intent
The Education page should feel fully integrated into Ben’s gold/navy portfolio theme.

---

## 9. Update two home page stat bubbles

On the home page, update the text of two statistic/summary bubbles.

### First bubble update
Change:

```text
Finance GPA
```

to:

```text
UNCC GPA
```

Keep the numerical GPA value if one exists.

### Second bubble update
Replace the entire bubble currently showing:

```text
1x Chancellor's List
```

with:

```text
2028 Graduation Date
```

### Requirements
- The second bubble should no longer mention Chancellor’s List.
- Keep the same bubble/card design, layout, animation, and icon style unless the text requires minor sizing.
- Do not remove the Dean’s List mention elsewhere unless requested.
- Make sure the new text fits cleanly on mobile and desktop.
- If the bubble has a label/value split, choose the cleanest fit. For example:
  - Value: `2028`
  - Label: `Graduation Date`
  
  or:
  - Label text only: `2028 Graduation Date`

Use whichever pattern best matches the existing stat bubble component.

---

## 10. Replace the three UNCC education tab bubbles with finance/coursework-focused learning areas

In the UNCC Education tab/card, there are currently three bubbles:

```text
GPA: 3.7
1x Chancellor's List
3x Dean's List
```

Remove those three bubbles and replace them with three new bubbles describing what Ben is learning in class.

### Replace with these three education-learning bubbles

#### Bubble 1
```text
Financial Statement Analysis
```

#### Bubble 2
```text
Corporate Finance Foundations
```

#### Bubble 3
```text
Business Analytics & Reporting
```

### Requirements
- Do not remove the GPA from the entire site if it appears elsewhere, such as the home stats. This instruction only applies to the three bubbles inside the UNCC Education tab/card.
- Preserve the same bubble component styling.
- Preserve spacing, wrapping, hover effects, and responsive behavior.
- These new bubbles should feel academic and finance-focused.
- Do not include long paragraphs inside the bubbles.
- Do not use generic words like `Learning`, `Coursework`, or `Classes` unless the existing component requires a label.
- If the component supports icons, keep icons consistent and professional.

---

## 11. Adjust Ben’s headshot framing so the surrounding box stays the same, but Ben appears smaller with more dark navy background space

On the page where Ben’s headshot appears, modify the image presentation so Ben’s figure is smaller and less prominent, with more dark navy background visible around him.

### Requirements
- Do not change the outer dimensions of the headshot box/card/container.
- Do not change the page layout around the headshot.
- Do not stretch, distort, or blur Ben’s face.
- Do not crop tighter.
- Do the opposite: make the visible person smaller inside the same box.
- Increase the amount of surrounding dark navy background space.
- Preserve the premium/professional look.
- The final image should still be high quality, centered, and balanced.
- This should look intentional, not like the image is accidentally too small.

### Preferred implementation approach
If the headshot is displayed as an `<img>`:
- Adjust object positioning and sizing with CSS.
- Try reducing visual scale using a wrapper approach:
  - Keep outer container fixed.
  - Add inner image styling such as `scale-90`, `scale-[0.88]`, or equivalent CSS transform.
  - Use `object-contain` if the background is part of the image.
- If the current image uses `object-cover`, consider whether `object-contain` or a custom background layer gives the correct result.
- Ensure the surrounding visible area remains dark navy, not transparent or white.

If the headshot background needs extra navy space:
- Keep the existing headshot asset.
- Place it inside a dark navy wrapper/background.
- Reduce the image scale inside that wrapper.
- Do not change the card/container size.

### CSS guidance
Use a wrapper pattern like this conceptually:

```jsx
<div className="headshot-card existing-size-classes bg-navy">
  <img
    src={benHeadshot}
    alt="Benjamin Levy"
    className="object-contain scale-[0.88]"
  />
</div>
```

Adjust class names to match the existing codebase. This is conceptual only. Use the site’s actual classes and design system.

---

# Quality and consistency requirements

## Navigation QA
After removing the Impact tab and changing the Resume button:
- All remaining nav items must work.
- Mobile nav must work.
- Active tab/route states must work.
- No link should point to Impact.
- `View Skills` should reliably take the user to Skills.

## Visual QA
Check:
- BL logo is larger inside the same white square everywhere.
- The white square around BL is unchanged.
- Higgins Digital logo appears in current-role bubble instead of briefcase.
- UNCC logo appears in Education and is gold.
- Footer no longer has email or LinkedIn links.
- Home stat bubbles display the new labels correctly.
- Ben’s headshot has more dark navy background space and Ben appears smaller inside the same box.

## Content QA
Confirm these exact text changes:
- `Pricing & Investment` appears in the headline.
- `Financial Modeling` no longer appears in that headline.
- `Finance GPA` is replaced with `UNCC GPA`.
- `1x Chancellor's List` is removed from the home bubble.
- Home bubble now says `2028 Graduation Date` or uses a value/label split equivalent.
- Education bubbles now include:
  - `Financial Statement Analysis`
  - `Corporate Finance Foundations`
  - `Business Analytics & Reporting`
- Resume tab button says `View Skills`.
- Project workbook buttons say `View Workbook` or `Open Workbook`.
- Footer no longer shows email or LinkedIn links.

## Technical QA
Before finishing:
1. Run install if dependencies are not installed.
2. Run the project build command.
3. Run lint/typecheck if available.
4. Fix all build/lint/type errors caused by these changes.
5. Remove unused imports, especially:
   - old briefcase icon import if no longer used
   - old UNC icon import
   - Impact page import
   - unused social/contact icons from footer
6. Ensure no broken asset paths.
7. Ensure no `console.error` or runtime crashes.

---

# Suggested commands

Use the commands that match the repo. Start by checking `package.json`.

Common possibilities:

```bash
npm install
npm run build
npm run lint
npm run dev
```

If this is a Vite React project, `npm run build` must pass.

---

# Final response required from Claude Code

When complete, respond with:

1. Summary of the changes made.
2. Files modified.
3. Assets used or created.
4. Commands run.
5. Whether the build passed.
6. Any remaining notes, especially if the UNCC gold logo required a generated/recolored asset.

Do not include unrelated suggestions unless they are critical for preventing a broken deployment.
