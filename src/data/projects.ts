export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  /** Stable anchor id; defaults to a slug of the title. */
  anchor?: string;
  label: string;
  description: string;
  focus: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Platform-IaC",
    label: "Public Lab / Infrastructure Automation",
    description:
      "Public lab project covering Proxmox, Kubernetes, OpenTofu, Ansible, SOPS, platform services, security tooling, observability, documentation, and runbooks.",
    focus: [
      "OpenTofu",
      "Ansible",
      "Kubernetes",
      "SOPS/Age",
      "Cloudflare",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/platform-iac" },
      { label: "More context", href: "/projects#platform-iac" },
    ],
  },
  {
    title: "Platform-IaC-GitOps",
    label: "Public Lab / GitOps Portfolio",
    description:
      "Public GitOps portfolio using Argo CD app-of-apps, External Secrets Operator, Vault, and Kyverno policy controls.",
    focus: [
      "ArgoCD",
      "External Secrets",
      "Vault",
      "Kyverno",
      "Istio",
      "cosign",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/platform-iac-gitops" },
      { label: "More context", href: "/projects#platform-iac-gitops" },
    ],
  },
  {
    title: "democicd",
    label: "Public Demo / Software Supply Chain",
    description:
      "Public software-supply-chain demonstration using GitLab CI, Trivy, cosign, digest-based deployment, and admission-policy enforcement.",
    focus: ["Go", "Kaniko", "Trivy", "cosign", "ArgoCD", "Kyverno"],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/democicd" },
      { label: "More context", href: "/projects#democicd" },
    ],
  },
  {
    title: "dibs (formerly af-coordinator)",
    anchor: "af-coordinator",
    label: "GitHub Project / Developer Tooling",
    description:
      "Local-first coordination daemon for AI agents working across many projects, repos, and worktrees. Single write authority over SQLite, HTTP+JSON over a Unix socket, and a lease-based claim protocol so concurrent agents don't collide.",
    focus: ["Go", "SQLite", "Unix socket", "HTTP/JSON", "AI agents"],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/dibs" },
      { label: "More context", href: "/projects#af-coordinator" },
    ],
  },
];
