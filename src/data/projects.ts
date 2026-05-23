export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  status: string;
  problem: string;
  approach: string;
  engineeringValue: string;
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Platform-IaC",
    status: "Active",
    problem:
      "Manual infrastructure setup is hard to reproduce, document, and evolve.",
    approach:
      "OpenTofu/Terraform for infrastructure, Ansible for configuration, SOPS/Age for secrets, and Kubernetes automation for platform services.",
    engineeringValue:
      "Shows modular infrastructure thinking, repeatability, documentation, and platform automation.",
    stack: [
      "OpenTofu",
      "Terraform",
      "Ansible",
      "Kubernetes",
      "SOPS",
      "Age",
      "Cloudflare",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/platform-iac" },
      { label: "More context", href: "/projects#platform-iac" },
    ],
  },
  {
    title: "Kubernetes Observability Stack",
    status: "Active",
    problem:
      "Kubernetes environments need clear visibility into workloads, alerts, logs, and operational state.",
    approach:
      "kube-prometheus-stack, Grafana, Alertmanager, Loki, Grafana Alloy, ServiceMonitor patterns, and alert routing for production-like operations.",
    engineeringValue:
      "Shows practical monitoring, alerting, troubleshooting, dashboarding, and production-like operations.",
    stack: [
      "Prometheus Operator",
      "Grafana",
      "Alertmanager",
      "Loki",
      "Alloy",
      "ServiceMonitor",
    ],
    links: [{ label: "More context", href: "/projects#observability" }],
  },
  {
    title: "Harbor Registry Platform",
    status: "In progress",
    problem:
      "Teams need reliable private registry, image distribution, proxy cache, TLS, and Kubernetes integration.",
    approach:
      "Harbor registry setup, reverse proxy and TLS, containerd mirror configuration, image pull integration, and S3 backend troubleshooting.",
    engineeringValue:
      "Shows understanding of container supply chain, registry operations, Kubernetes image pulls, and real infrastructure debugging.",
    stack: ["Harbor", "Kubernetes", "containerd", "S3", "TLS", "reverse proxy"],
    links: [{ label: "More context", href: "/projects#harbor" }],
  },
  {
    title: "Go Automation Bot",
    status: "In progress",
    problem:
      "Automation workflows need reliable task execution, storage choices, and practical Go-based tooling.",
    approach:
      "Go-based automation project with careful choices around SQLite, concurrency, possible NATS JetStream integration, CLI workflows, and agent-like task execution.",
    engineeringValue:
      "Shows Go learning applied to DevOps-style automation instead of abstract programming exercises.",
    stack: ["Go", "SQLite", "NATS JetStream", "CLI", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/abevz" }],
  },
];
