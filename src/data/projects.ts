export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  impact: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Platform-IaC",
    description:
      "Modular infrastructure automation framework for homelab and production-like environments with reproducible provisioning and configuration layers.",
    stack: ["OpenTofu", "Ansible", "Kubernetes", "SOPS", "Cloudflare"],
    status: "Active",
    impact:
      "Shows provider-aware infrastructure thinking, secret handling, and automation discipline instead of one-off lab scripts.",
    links: [
      { label: "GitHub", href: "https://github.com/abevz/platform-iac" },
      { label: "Case Study", href: "/projects#platform-iac" },
    ],
  },
  {
    title: "Kubernetes Observability Stack",
    description:
      "Production-like monitoring and logging stack using Prometheus, Grafana, Alertmanager, Loki, and related exporters.",
    stack: ["Prometheus", "Grafana", "Alertmanager", "Loki", "Alloy"],
    status: "Active",
    impact:
      "Demonstrates practical platform operations: metrics, alerting, dashboards, and troubleshooting visibility.",
    links: [{ label: "Details", href: "/projects#observability" }],
  },
  {
    title: "Harbor Registry Platform",
    description:
      "Private container registry setup with Kubernetes integration, TLS, containerd mirror work, and production-style registry troubleshooting.",
    stack: ["Harbor", "Kubernetes", "containerd", "TLS", "S3"],
    status: "In progress",
    impact:
      "Good signal for supply chain thinking, registry operations, and how platform pieces fit together beyond a simple app deploy.",
    links: [{ label: "Details", href: "/projects#harbor" }],
  },
  {
    title: "Go Automation Bot",
    description:
      "Go-based automation work focused on CLI tools, reliable task execution, and agent-friendly operational workflows.",
    stack: ["Go", "SQLite", "CLI", "Automation"],
    status: "In progress",
    impact:
      "Shows movement from infrastructure operations toward building internal tooling and automation systems.",
    links: [{ label: "GitHub", href: "https://github.com/abevz" }],
  },
];
