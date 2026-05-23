export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  label: string;
  description: string;
  focus: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Platform-IaC",
    label: "GitHub Project / Lab Work",
    description:
      "Modular infrastructure automation for Kubernetes-oriented environments.",
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
    title: "Kubernetes Observability",
    label: "Lab Work / Case Study",
    description:
      "Monitoring and alerting patterns for Kubernetes environments using Prometheus, Grafana, Alertmanager, Loki, and Alloy.",
    focus: [
      "Prometheus Operator",
      "Grafana",
      "Alertmanager",
      "Loki",
      "Alloy",
    ],
    links: [{ label: "More context", href: "/projects#observability" }],
  },
  {
    title: "Harbor Registry Integration",
    label: "Case Study / Troubleshooting",
    description:
      "Private registry, container runtime configuration, TLS, proxy cache, and Kubernetes image pull troubleshooting.",
    focus: [
      "Harbor",
      "containerd",
      "Kubernetes",
      "S3",
      "TLS",
      "Cloudflare DNS",
    ],
    links: [{ label: "More context", href: "/projects#harbor" }],
  },
  {
    title: "Go Automation",
    label: "GitHub Project / In Progress",
    description:
      "Go-based automation work focused on reliable task execution, storage decisions, and practical DevOps tooling.",
    focus: ["Go", "SQLite", "CLI", "automation", "NATS JetStream"],
    links: [{ label: "GitHub", href: "https://github.com/abevz" }],
  },
];
