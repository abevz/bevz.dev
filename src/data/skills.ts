export type SkillGroupData = {
  title: string;
  description: string;
};

export const skillGroups: SkillGroupData[] = [
  {
    title: "Production Kubernetes Operations",
    description:
      "On-premises Kubernetes and Linux across dev, test, stage, and production: initial cluster/control-plane build, upgrades, node replacement, Istio ingress certificate maintenance, capacity planning, and incident response.",
  },
  {
    title: "Production CI/CD",
    description:
      "Jenkins pipelines, GitLab CI integration, Harbor, shared base images, multi-stage Dockerfiles, blue-green deployments, and maintenance-mode release windows.",
  },
  {
    title: "Production Data Platform",
    description:
      "PostgreSQL/Patroni HA, Ceph, Istio, RabbitMQ, and Redis integrated into the Kubernetes platform foundation.",
  },
  {
    title: "Lab / Portfolio — IaC & GitOps",
    description:
      "Proxmox, Kubernetes, OpenTofu/Terraform, Ansible, SOPS/Age, Argo CD, External Secrets Operator, Vault, Kyverno, and cosign.",
  },
  {
    title: "Lab / Portfolio — Kubernetes & CI Automation",
    description:
      "cert-manager and Istio Gateway configuration; Kubernetes Gateway API CRD and Traefik automation; GitHub Actions workflows for CI, release packaging, and IaC validation.",
  },
  {
    title: "Non-production Observability / Lab",
    description:
      "Prometheus, Grafana, Loki, and Grafana Alloy in development/test and lab environments; dashboards adapted from public examples.",
  },
];
