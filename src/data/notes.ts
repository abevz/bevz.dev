export type Note = {
  title: string;
  description: string;
  tags: string[];
};

export const notes: Note[] = [
  {
    title: "IRSA vs EKS Pod Identity",
    description:
      "A practical comparison of AWS IAM approaches for Kubernetes workloads.",
    tags: ["AWS", "EKS", "IAM", "Kubernetes"],
  },
  {
    title: "Harbor Registry & Container Runtime Troubleshooting",
    description:
      "Notes on Harbor registry setup, containerd mirror configuration, proxy cache, TLS, and S3-backed registry issues.",
    tags: ["Harbor", "containerd", "Kubernetes", "S3", "TLS"],
  },
  {
    title: "kube-prometheus-stack Troubleshooting",
    description:
      "Operational notes around Prometheus Operator, CRDs, admission webhooks, Alertmanager, and Grafana dashboards.",
    tags: ["Prometheus", "Grafana", "Alertmanager", "Kubernetes"],
  },
  {
    title: "SQLite Concurrency in Go Automation Tools",
    description:
      "Why SQLite can still be a good fit for small Go automation projects when WAL, busy_timeout, and connection limits are configured correctly.",
    tags: ["Go", "SQLite", "automation"],
  },
  {
    title: "Kitty + tmux Workflow",
    description:
      "Notes on local terminal workflow, session management, and practical terminal ergonomics.",
    tags: ["Linux", "terminal", "kitty", "tmux"],
  },
];
