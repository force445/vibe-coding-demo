export const portfolio = {
  personal: {
    name: "Force Devops",
    role: "DevOps Engineer",
    bio: "Passionate DevOps Engineer with 5+ years of experience in automating and optimizing mission-critical deployments over large infrastructure. Expert in Azure, Kubernetes, and GitLab CI/CD pipelines.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    github: "https://github.com/force445",
    linkedin: "https://www.linkedin.com/in/naphat-chaiyakarn/",
  },
  skills: [
    { name: "Azure", level: "Expert" },
    { name: "Kubernetes", level: "Expert" },
    { name: "Docker", level: "Expert" },
    { name: "Terraform", level: "Advanced" },
    { name: "GitLab CI", level: "Advanced" },
    { name: "Azure DevOps", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Go", level: "Intermediate" },
    { name: "Linux Administration", level: "Expert" },
    { name: "Prometheus/Grafana", level: "Advanced" },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "2023",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "2022",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
    },
  ],
  experience: [
    {
      company: "TechScale Inc.",
      role: "Senior DevOps Engineer",
      period: "2021 - Present",
      description:
        "Led the migration of legacy monolithic applications to a microservices architecture on Azure AKS. Implemented GitOps workflows with ArgoCD, reducing deployment times by 70%.",
    },
    {
      company: "CloudNative Startup",
      role: "DevOps Engineer",
      period: "2019 - 2021",
      description:
        "Designed and maintained highly available infrastructure using Terraform. Built automated CI/CD pipelines using GitLab CI.",
    },
  ],
  projects: [
    {
      name: "K8s Auto-Scaler",
      description:
        "An open-source custom Kubernetes controller written in Go to automatically scale down development environments during off-hours, saving 40% on cloud costs.",
      link: "https://github.com/alexdevops/k8s-scaler",
      tags: ["Go", "Kubernetes", "Controller"],
    },
    {
      name: "Azure Infrastructure Modules",
      description:
        "A comprehensive library of reusable Terraform modules for Azure services, following security best practices and compliance standards.",
      link: "https://github.com/force445/terraform-modules",
      tags: ["Terraform", "Azure", "Security"],
    },
    {
      name: "Serverless Monitoring Dashboard",
      description:
        "A real-time monitoring dashboard for serverless applications using Azure Functions and React/Next.js.",
      link: "https://github.com/force445/serverless-dash",
      tags: ["Next.js", "Azure Functions", "Serverless"],
    },
  ],
};
