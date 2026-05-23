export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  status: string;
  workLabel: string;
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
    workLabel: "GitHub Project / Lab Work",
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
    workLabel: "Lab Work / Case Study",
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
    title: "Harbor Registry & Container Runtime Integration",
    status: "In progress",
    workLabel: "Case Study / Infrastructure Troubleshooting",
    problem:
      "Kubernetes environments need reliable image delivery, private registry access, DockerHub proxy caching, TLS, and predictable container runtime configuration.",
    approach:
      "Configured and troubleshot Harbor registry behind reverse proxy/TLS, containerd mirror settings, Kubernetes image pull integration, robot account authentication, and S3-backed registry storage issues.",
    engineeringValue:
      "Demonstrates practical understanding of container registry operations, Kubernetes image pulls, container runtime configuration, TLS/reverse proxy behavior, and real infrastructure debugging.",
    stack: [
      "Harbor",
      "Kubernetes",
      "containerd",
      "S3",
      "TLS",
      "reverse proxy",
      "Cloudflare DNS",
    ],
    links: [{ label: "More context", href: "/projects#harbor" }],
  },
  {
    title: "Go Automation Bot",
    status: "In progress",
    workLabel: "GitHub Project / In Progress",
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
