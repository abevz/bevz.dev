export type SkillGroupData = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroupData[] = [
  {
    title: "Kubernetes Platform",
    items: [
      "Kubernetes",
      "Helm",
      "Istio",
      "Harbor",
      "cert-manager",
      "Production on-prem clusters",
    ],
  },
  {
    title: "Infrastructure as Code",
    items: [
      "OpenTofu / Terraform",
      "Ansible",
      "Proxmox",
      "Cloudflare DNS",
      "SOPS",
      "Age",
    ],
  },
  {
    title: "Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "ELK",
      "Loki",
      "Platform monitoring",
    ],
  },
  {
    title: "CI/CD",
    items: [
      "Jenkins",
      "GitLab CI",
      "Git workflows",
      "Artifact and registry pipelines",
    ],
  },
  {
    title: "Programming",
    items: [
      "Go automation",
      "Bash scripting",
      "Python debugging",
      "Operator-adjacent tooling",
    ],
  },
  {
    title: "Infrastructure Leadership",
    items: [
      "Platform design",
      "Architecture trade-offs",
      "DevOps team leadership",
      "Stakeholder translation",
    ],
  },
];
