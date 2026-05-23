# bevz.dev Structure

## Information Architecture

### V1 routes

```text
/             Main landing page
/projects     Project overview page
/cv           CV / resume page
```

### Later routes

```text
/notes
/projects/platform-iac
/projects/kubernetes-observability
/projects/harbor-registry
/projects/go-automation-bot
```

## Content Model

### Core profile content

- name
- title
- tagline
- summary
- contact links
- location
- open-to-work status

### Project data

Each featured project should support:

- title
- description
- stack
- status
- links
- short evidence / outcome framing

## Proposed Source Layout

```text
public/
  favicon/
  images/

src/
  components/
    ContactBlock.astro
    Footer.astro
    Header.astro
    Hero.astro
    ProjectCard.astro
    SectionHeading.astro
    SkillGroup.astro
    TerminalCard.astro
  data/
    profile.ts
    projects.ts
    skills.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    projects.astro
    cv.astro
  styles/
    global.css
```

## Design System Direction

- dark Ayu-inspired palette
- code/editor-like panels
- warm accent color for headings and CTA
- soft cyan for links
- green for status labels and prompts
- restrained motion only

## Implementation Sequence

1. Add Astro scaffolding and scripts.
2. Add global CSS variables and base layout.
3. Add page skeletons with placeholder content.
4. Add reusable section components.
5. Fill project and profile data.
6. Refine copy and responsive layout.
