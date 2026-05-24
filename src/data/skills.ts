export type SkillGroupData = {
  title: string;
  description: string;
};

export const skillGroups: SkillGroupData[] = [
  {
    title: "Kubernetes Operations",
    description:
      "Deployments, Helm, ingress/gateway, cert-manager, registry integration, troubleshooting.",
  },
  {
    title: "Infrastructure Automation",
    description:
      "OpenTofu/Terraform, Ansible, Cloudflare DNS, SOPS/Age, reproducible environments.",
  },
  {
    title: "Monitoring",
    description:
      "Prometheus, Grafana, ELK/OpenSearch, logs, dashboards, resource usage, and incident troubleshooting.",
  },
  {
    title: "CI/CD",
    description:
      "Jenkins, GitLab CI, GitHub Actions, artifact flow, Kubernetes deployment pipelines.",
  },
  {
    title: "Platform Thinking",
    description:
      "Operational clarity, documentation, trade-offs, maintainability, debugging.",
  },
];
