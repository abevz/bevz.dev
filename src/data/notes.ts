export type Note = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  outline: string[];
};

export const notes: Note[] = [
  {
    slug: "harbor-registry-container-runtime-troubleshooting",
    title: "Harbor Registry & Container Runtime Troubleshooting",
    description:
      "Notes on Harbor registry setup, containerd mirror configuration, proxy cache, TLS, and S3-backed registry issues.",
    tags: ["Harbor", "containerd", "Kubernetes", "S3", "TLS"],
    outline: [
      "Common Harbor deployment and reverse proxy/TLS pitfalls",
      "How containerd mirror configuration affects Kubernetes image pulls",
      "Operational issues around proxy cache, robot accounts, and S3-backed storage",
    ],
  },
  {
    slug: "kube-prometheus-stack-troubleshooting",
    title: "kube-prometheus-stack Troubleshooting",
    description:
      "Operational notes around Prometheus Operator, CRDs, admission webhooks, Alertmanager, and Grafana dashboards.",
    tags: ["Prometheus", "Grafana", "Alertmanager", "Kubernetes"],
    outline: [
      "CRD and webhook issues that can block installs or upgrades",
      "How to reason about ServiceMonitor, Alertmanager, and dashboard wiring",
      "What usually breaks first in day-2 operations and how to debug it",
    ],
  },
  {
    slug: "sqlite-concurrency-in-go-automation-tools",
    title: "SQLite Concurrency in Go Automation Tools",
    description:
      "Why SQLite can still be a good fit for small Go automation projects when WAL, busy_timeout, and connection limits are configured correctly.",
    tags: ["Go", "SQLite", "automation"],
    outline: [
      "When SQLite is still the right operational choice for small automation tools",
      "How WAL, busy_timeout, and connection limits change runtime behavior",
      "Trade-offs between simplicity, reliability, and future scale",
    ],
  },
  {
    slug: "kitty-tmux-workflow",
    title: "Kitty + tmux Workflow",
    description:
      "Notes on local terminal workflow, session management, and practical terminal ergonomics.",
    tags: ["Linux", "terminal", "kitty", "tmux"],
    outline: [
      "How terminal layout, sessions, and keybindings affect day-to-day engineering flow",
      "When tmux adds clarity and when it just adds another layer",
      "Practical conventions for local terminal ergonomics on Linux",
    ],
  },
];
