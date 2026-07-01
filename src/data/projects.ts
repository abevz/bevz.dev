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
    title: "Platform-IaC-GitOps",
    label: "GitHub Project / GitOps Layer",
    description:
      "GitOps layer for Kubernetes platform operations with ArgoCD, External Secrets, Vault, Kyverno, Istio, and cosign.",
    focus: [
      "ArgoCD",
      "External Secrets",
      "Vault",
      "Kyverno",
      "Istio",
      "cosign",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/platform-iac-gitops" },
      { label: "More context", href: "/projects#platform-iac-gitops" },
    ],
  },
  {
    title: "democicd",
    label: "GitHub Project / Supply Chain Demo",
    description:
      "Demo Go app validating a secure CI/CD supply chain: Kaniko build, Trivy scan, cosign signing, and GitOps deployment via ArgoCD with Kyverno guardrails.",
    focus: ["Go", "Kaniko", "Trivy", "cosign", "ArgoCD", "Kyverno"],
    links: [
      { label: "GitHub", href: "https://github.com/abevz/democicd" },
      { label: "More context", href: "/projects#democicd" },
    ],
  },
];
