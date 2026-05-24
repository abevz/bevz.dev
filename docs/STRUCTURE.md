# bevz.dev Structure

## Information Architecture

### V1 routes

```text
/             Main landing page
/projects     Project overview page
/notes        Engineering notes index
/cv           CV / resume page
```

### Later routes

```text
/notes/[slug]
/projects/platform-iac
/projects/kubernetes-monitoring
/projects/harbor-registry-integration
/projects/go-automation
```

## Content Model

### Core profile content

- name
- title
- tagline
- summary
- contact links
- location
- legal-safe public profile status

### Project data

Each selected work item should support:

- title
- label
- description
- focus tags
- links

### Notes data

The notes index currently supports:

- slug
- title
- description
- tags
- outline

Future full note pages should also support:

- published / draft state
- publish date
- optional updated date
- body content in Markdown / MDX

## Proposed Source Layout

```text
public/
  dragon-mark.png
  favicon.png
  og-image.png

src/
  components/
    ContactBlock.astro
    Footer.astro
    Header.astro
    Hero.astro
    NoteCard.astro
    ProjectCard.astro
    SectionHeading.astro
    ServiceCard.astro
    SkillGroup.astro
    TerminalCard.astro
  content/
    notes/
  data/
    notes.ts
    profile.ts
    projects.ts
    services.ts
    skills.ts
  layouts/
    BaseLayout.astro
  pages/
    cv.astro
    index.astro
    notes.astro
    notes/[slug].astro
    projects.astro
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

1. Keep concise site content in typed data modules.
2. Keep future long-form notes in `src/content/notes/`.
3. Promote a note from listing-only to full article only when real content exists.
4. Keep `/notes` useful even without a full article for every topic.
5. Prefer honest status labels over fake read links or placeholder copy.
