export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Kubernetes Review",
    description:
      "Review cluster structure, deployment flow, DNS/TLS, registry usage, and operational risks.",
  },
  {
    title: "CI/CD Cleanup",
    description:
      "Improve build and deployment pipelines, environment handling, rollback thinking, and notifications.",
  },
  {
    title: "Observability Setup",
    description:
      "Set up or improve metrics, logs, dashboards, and alerting.",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Make infrastructure more reproducible with IaC, Ansible, Cloudflare, and Git-based workflows.",
  },
];
