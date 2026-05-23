export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Kubernetes & DevOps Review",
    description:
      "A practical review of your Kubernetes setup, deployment flow, monitoring, registry usage, DNS/TLS configuration, and operational weak points. Best suited for small teams, early-stage projects, and homelab-to-production transitions.",
  },
  {
    title: "CI/CD Automation",
    description:
      "Design or clean up pipelines for building, testing, and deploying applications to Kubernetes with safer releases, clearer environments, rollback thinking, and better notifications.",
  },
  {
    title: "Observability Setup",
    description:
      "Prometheus, Grafana, Alertmanager, Loki, dashboards, alerts, and logs so your team can understand what is happening before users report problems.",
  },
  {
    title: "Infrastructure Automation",
    description:
      "OpenTofu/Terraform, Ansible, Cloudflare, SOPS/Age, and Git-based workflows for more reproducible infrastructure.",
  },
];
