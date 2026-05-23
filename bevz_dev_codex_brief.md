# Технический бриф для Codex: сайт `bevz.dev`

## 1. Цель проекта

Нужно создать персональный сайт-визитку для домена `bevz.dev`.

Сайт должен позиционировать Aleksey Bevz как DevOps / Platform Engineer с фокусом на:

- Kubernetes
- Infrastructure as Code
- CI/CD
- Observability
- Cloudflare / DNS / edge infrastructure
- Go automation
- homelab / production-like infrastructure

Главная задача сайта — не просто показать резюме, а быстро объяснить потенциальному работодателю, рекрутеру или техническому человеку:

1. У владельца сайта есть реальный инфраструктурный опыт.
2. Он работает с Kubernetes, IaC, CI/CD и observability.
3. У него есть практические проекты, а не только список технологий.
4. Он осознанно движется в сторону DevOps / Platform Engineering.
5. Его можно пригласить на интервью или посмотреть его GitHub-проекты.

## 2. Хостинг и инфраструктура

### Основной вариант

Использовать:

- Cloudflare Pages
- GitHub repository
- custom domain `bevz.dev`
- DNS already managed by Cloudflare
- HTTPS via Cloudflare
- Cloudflare Web Analytics

Причины выбора:

- DNS уже находится в Cloudflare.
- Custom domain подключается нативно.
- SSL, CDN, redirects и cache будут в одном месте.
- Для статического сайта хостинг может быть бесплатным.
- Деплой можно делать автоматически из GitHub по push в `main`.

### Рекомендуемая доменная структура

```text
bevz.dev              -> главная визитка
www.bevz.dev          -> redirect на bevz.dev
cv.bevz.dev           -> CV / resume, опционально позже
projects.bevz.dev     -> проекты, опционально позже
docs.bevz.dev         -> технические заметки / knowledge base, опционально позже
lab.bevz.dev          -> homelab/platform demo page, опционально позже
```

На первом этапе достаточно сделать только:

```text
bevz.dev
www.bevz.dev -> bevz.dev
```

## 3. Технологический стек

Рекомендуемый стек:

```text
Framework: Astro
Styling: Tailwind CSS
Content: Markdown / MDX
Deployment: Cloudflare Pages
Repository: GitHub
Analytics: Cloudflare Web Analytics
Forms: mailto на первом этапе
```

Почему Astro:

- отлично подходит для быстрых content-focused сайтов;
- можно сделать статический сайт без лишнего JavaScript;
- удобно добавлять страницы проектов и технические заметки в Markdown / MDX;
- легко деплоить на Cloudflare Pages;
- проще и легче, чем Next.js для такой задачи.

## 4. Стоимость

Целевая стоимость первой версии:

```text
$0/month
```

Что входит бесплатно:

- Cloudflare DNS — уже используется
- Cloudflare Pages для статического сайта
- SSL
- CDN
- GitHub repo
- Astro / Tailwind
- Cloudflare Web Analytics
- mailto contact link

Платные возможности могут понадобиться только позже, если появятся:

- backend API;
- динамическая contact form через Worker;
- database / KV / D1 / R2;
- server-side logic.

На первом этапе backend не нужен.

## 5. Дизайн-направление

Пользователю нравится цветовая тема Ayu.

Дизайн сайта должен быть вдохновлён:

```text
Ayu Mirage / Ayu Dark
terminal aesthetic
infrastructure dashboard
calm DevOps portfolio
```

Важно: не делать кислотный зелёный terminal hacker style. Нужен спокойный, профессиональный, тёплый dark theme.

### Основное настроение

```text
Dark background
Warm yellow/orange accent
Soft cyan links
Green success/status accents
Code/editor-like panels
Minimal animations
Clean engineering layout
```

## 6. Цветовая палитра

Использовать CSS variables.

```css
:root {
  --bg: #0f1419;
  --bg-soft: #131721;
  --panel: #1f2430;
  --panel-soft: #232834;

  --text: #e6e1cf;
  --text-muted: #b8b4a7;
  --text-dim: #7f8490;

  --accent: #ffcc66;
  --accent-orange: #ffb454;
  --accent-blue: #5ccfe6;
  --accent-green: #bae67e;
  --accent-red: #f28779;
  --accent-purple: #d4bfff;

  --border: #2d3343;
}
```

### Использование цветов

```text
Background:       --bg
Cards/panels:     --panel / --panel-soft
Main text:        --text
Muted text:       --text-muted
Headings/accent:  --accent / --accent-orange
Links:            --accent-blue
Status/success:   --accent-green
Warnings/errors:  --accent-red
Borders:          --border
```

## 7. Шрифты

Рекомендуемые шрифты:

```text
Main font: Inter or Geist Sans
Code font: JetBrains Mono
```

Для технических блоков, terminal cards и маленьких меток использовать `JetBrains Mono`.

## 8. Структура сайта первой версии

Минимальный набор страниц:

```text
/
/projects
/cv
```

Опционально позже:

```text
/notes
/projects/platform-iac
/projects/kubernetes-observability
/projects/harbor-registry
/projects/go-automation-bot
```

Для первой версии можно сделать всё на одной главной странице, но заложить структуру компонентов так, чтобы потом легко вынести проекты в отдельные страницы.

## 9. Главная страница

### 9.1 Hero section

Текст:

```text
Aleksey Bevz
DevOps / Platform Engineer

I build Kubernetes-based platforms, infrastructure automation, and CI/CD workflows using OpenTofu/Terraform, Ansible, Jenkins, GitHub Actions, Cloudflare, and Go.
```

Кнопки:

```text
View Projects
Download CV
GitHub
LinkedIn
```

Вариант короткого tagline:

```text
Kubernetes • IaC • CI/CD • Observability • Go Automation
```

### 9.2 Terminal card в hero

Справа или под hero сделать terminal-style карточку:

```bash
$ whoami
aleksey-bevz

$ focus
kubernetes
infrastructure-as-code
platform-engineering
go-automation

$ status
open-to-devops-opportunities
```

Визуально:

- card background: `--panel`
- title bar как у терминала/editor window
- monospace font
- prompt символ `$` цветом `--accent-green`
- команды цветом `--accent-blue`
- вывод цветом `--text`

## 10. Блок Featured Projects

Сделать 3–4 project cards.

### Project 1: Platform-IaC

```text
Title: Platform-IaC
Description: Modular infrastructure automation framework for homelab and production-like environments.
Stack: OpenTofu / Terraform, Ansible, Kubernetes, SOPS, Age, Cloudflare
Links: GitHub, Case Study
```

Описание должно показывать, что это не просто pet project, а демонстрация DevOps мышления:

- modular infrastructure;
- reproducible environments;
- provider-agnostic approach;
- secrets management;
- Kubernetes automation.

### Project 2: Kubernetes Observability Stack

```text
Title: Kubernetes Observability Stack
Description: Prometheus Operator, Grafana, Alertmanager, Loki and Grafana Alloy for production-like Kubernetes monitoring and logs.
Stack: kube-prometheus-stack, Grafana, Alertmanager, Loki, Alloy, ServiceMonitor
Links: Case Study
```

### Project 3: Harbor Registry Platform

```text
Title: Harbor Registry Platform
Description: Private container registry setup with Kubernetes integration, containerd mirror configuration and S3 backend troubleshooting.
Stack: Harbor, Kubernetes, containerd, S3, reverse proxy, TLS
Links: Case Study
```

### Project 4: Go Automation Bot

```text
Title: Go Automation Bot
Description: Go-based automation project focused on practical agent workflows, storage decisions and reliable task execution.
Stack: Go, SQLite, NATS JetStream, CLI, automation
Links: GitHub, Case Study
```

If some projects are not ready yet, still create cards but mark them as:

```text
Status: In progress
```

## 11. Блок Skills / Stack

Сделать не плоский список технологий, а группы.

```text
Kubernetes Platform
Deployments, Helm, Gateway API, Istio, MetalLB, cert-manager, Harbor

Infrastructure as Code
OpenTofu, Terraform, Ansible, Proxmox, Cloudflare DNS, SOPS, Age

Observability
Prometheus, Grafana, Alertmanager, Loki, Grafana Alloy

CI/CD
Jenkins pipelines, GitHub Actions, GitLab Runner

Programming
Go for DevOps tools, automation bots, CLIs and Kubernetes-related utilities

Linux / Networking
Arch Linux, Nginx, DNS, TLS, reverse proxy, containerd
```

## 12. Блок Current Focus

Добавить блок:

```text
Current Focus

- Transitioning deeper into DevOps / Platform Engineering
- Building Go-based automation tools
- Preparing CKAD / CKA / Terraform / AWS certifications
- Developing production-like homelab infrastructure
```

Этот блок важен, потому что честно показывает направление развития.

## 13. Блок Contact

Контакты:

```text
GitHub
LinkedIn
Email
Location: Poland / Warsaw
Open to: DevOps, Platform Engineering, Infrastructure Automation roles
```

Email можно сделать как обычный `mailto:`.

Не делать contact form на первом этапе.

## 14. Компоненты

Предлагаемая структура компонентов:

```text
src/components/Hero.astro
src/components/TerminalCard.astro
src/components/ProjectCard.astro
src/components/SectionHeading.astro
src/components/SkillGroup.astro
src/components/ContactBlock.astro
src/components/Header.astro
src/components/Footer.astro
```

Страницы:

```text
src/pages/index.astro
src/pages/projects.astro
src/pages/cv.astro
```

Стили:

```text
src/styles/global.css
```

Данные проектов можно вынести в:

```text
src/data/projects.ts
```

Пример структуры данных:

```ts
export const projects = [
  {
    title: "Platform-IaC",
    description: "Modular infrastructure automation framework for homelab and production-like environments.",
    stack: ["OpenTofu", "Ansible", "Kubernetes", "SOPS", "Cloudflare"],
    status: "Active",
    links: {
      github: "https://github.com/abevz/platform-iac",
      caseStudy: "/projects/platform-iac"
    }
  }
];
```

## 15. Layout requirements

### Desktop

- Max content width: around `1120px` or `1200px`
- Hero: two-column layout
- Project cards: responsive grid, 2 columns or 3 columns depending on width
- Skills: grouped cards

### Mobile

- Single column
- Large readable text
- Buttons stacked or wrapped
- Terminal card should not overflow
- No horizontal scroll

## 16. Accessibility

Codex should ensure:

- semantic HTML;
- good contrast;
- visible focus states;
- buttons and links are keyboard accessible;
- no tiny text on mobile;
- `aria-label` where needed;
- reduced motion support if animations are added.

## 17. SEO / metadata

Add metadata:

```text
Title: Aleksey Bevz — DevOps / Platform Engineer
Description: DevOps and Platform Engineering portfolio focused on Kubernetes, Infrastructure as Code, CI/CD, Observability and Go automation.
Canonical: https://bevz.dev
```

Open Graph:

```text
og:title: Aleksey Bevz — DevOps / Platform Engineer
og:description: Kubernetes, IaC, CI/CD, Observability and Go automation portfolio.
og:type: website
og:url: https://bevz.dev
```

Later generate `og-image.png` with Ayu-style card.

## 18. Deployment requirements

### Cloudflare Pages build settings

```text
Build command: npm run build
Build output directory: dist
Node version: latest LTS
```

### package scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

### Redirects

Configure:

```text
www.bevz.dev -> bevz.dev
```

Can be done in Cloudflare dashboard or via redirects.

## 19. First implementation task for Codex

Codex should generate a complete Astro + Tailwind project with:

1. Ayu-inspired global theme.
2. Responsive landing page.
3. Hero section.
4. Terminal card.
5. Featured Projects section.
6. Skills grouped section.
7. Current Focus section.
8. Contact section.
9. Basic `/projects` page.
10. Basic `/cv` page.
11. SEO metadata.
12. Clean component structure.
13. No placeholder lorem ipsum.
14. No heavy animations.
15. No backend.
16. No contact form yet.

## 20. Acceptance criteria

Project is considered successful when:

- `npm install` works;
- `npm run dev` starts local server;
- `npm run build` completes successfully;
- site is responsive on mobile and desktop;
- design visually resembles Ayu Mirage / Ayu Dark;
- site clearly communicates DevOps / Platform Engineering direction;
- projects are visible above or shortly after the fold;
- there are no lorem ipsum placeholders;
- deployment to Cloudflare Pages requires only connecting GitHub repo and setting build command/output directory.

## 21. Suggested first Codex prompt

```text
Create a complete Astro + Tailwind CSS static portfolio website for bevz.dev.

Use an Ayu Mirage / Ayu Dark inspired color palette. The site is for Aleksey Bevz, a DevOps / Platform Engineer focused on Kubernetes, Infrastructure as Code, CI/CD, Observability, Cloudflare and Go automation.

Requirements:
- Use Astro components.
- Use Tailwind CSS.
- Create a responsive landing page.
- Add Hero section with name, role, tagline and CTA buttons.
- Add a terminal-style card in the hero.
- Add Featured Projects cards for Platform-IaC, Kubernetes Observability Stack, Harbor Registry Platform and Go Automation Bot.
- Add grouped skills section.
- Add Current Focus section.
- Add Contact section with GitHub, LinkedIn, Email and location Poland/Warsaw.
- Add /projects and /cv pages.
- Add SEO metadata and Open Graph metadata.
- Use semantic HTML and accessible links/buttons.
- Avoid lorem ipsum and generic placeholder content.
- Keep the site static. No backend and no contact form.
- Prepare it for deployment to Cloudflare Pages with build command `npm run build` and output directory `dist`.

Generate all files needed for a working project.
```

## 22. Important design reminder

The site should not look like a generic developer template.

It should feel like:

```text
calm engineering console
Ayu-themed infrastructure dashboard
professional DevOps portfolio
```

The site should communicate competence, clarity and practical infrastructure experience.

