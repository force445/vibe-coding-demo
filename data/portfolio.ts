export const portfolio = {
  personal: {
    name: "Force Devops",
    role: "DevOps Engineer",
    bio: "Passionate DevOps Engineer with 1 year 7 months of experience in automating and optimizing mission-critical deployments over large infrastructure. Expert in Azure, Kubernetes, and GitLab CI/CD pipelines.",
    location: "San Francisco, CA",
    email: "naphatnaphat85@gmail.com",
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
    { name: "Ansible", level: "Intermediate" },
    { name: "K3s", level: "Advanced" },
    { name: "Helm", level: "Advanced" },
    { name: "Django", level: "Intermediate" },
  ],
  certifications: [
    {
      name: "Introduction to C++",
      issuer: "SoloLearn",
      date: "Issued",
      link: "https://www.sololearn.com/certificates/CC-HMCLZSHW",
    },
    {
      name: "C++ Intermediate",
      issuer: "SoloLearn",
      date: "Issued",
      link: "https://www.sololearn.com/certificates/CC-HMCLZSHW",
    },
    {
      name: "Introduction to Python",
      issuer: "SoloLearn",
      date: "Issued",
      link: "https://www.sololearn.com/certificates/CC-HMCLZSHW",
    },
    {
      name: "Python Intermediate",
      issuer: "SoloLearn",
      date: "Issued",
      link: "https://www.sololearn.com/certificates/CC-HMCLZSHW",
    },
  ],
  experience: [
    {
      company: "Digital Storemesh Co. Ltd.",
      role: "Backend Developer/Devops",
      period: "June 2024 - Present",
      points: [
        "Developed and maintained backend APIs using Python and Django to support frontend applications",
        "Provisioned virtual machines and deployed Kubernetes (k3s) clusters using Terraform and Ansible",
        "Deployed and maintained applications across staging and production Kubernetes clusters using Helm",
        "Maintained and monitored company infrastructure",
        "Integrated HPE Alletra 5000 storage with Kubernetes",
        "Enabled NVIDIA GPU workloads for JupyterHub environments",
        "Implemented monitoring using Prometheus and Grafana to track cluster health and system metrics",
        "Built CI/CD pipelines using Azure DevOps for MPT (Magnecomp Precision Technology)",
        "Integrated Prometheus monitoring for Mikrotik routers",
        "Operated and maintained production infrastructure, including monitoring, storage integration, and GPU workloads",
      ],
    },
    {
      company: "Swift Dynamics Co. Ltd.",
      role: "Backend Developer Internship",
      period: "May 2023 - Oct 2023",
      points: [
        "Maintenance Backend API to communicate with Frontend using Python, Django Framework",
        "Optimize database queries",
        "Debug and fix problems in the backend code",
        "Handle real-time data using Websocket Protocol",
        "Handle data storage, retrieval, and manipulation",
        "Handle data from IoT devices to store in the databases",
      ],
    },
  ],
  projects: [
    {
      name: "Ansible K3s Playground",
      description:
        "Automated provisioning of lightweight Kubernetes (K3s) clusters using Ansible roles and playbooks, streamlining local development environments.",
      link: "https://github.com/force445/ansible_k3s_playground",
      tags: ["Ansible", "Kubernetes", "K3s", "Automation"],
    },
    {
      name: "Ansible Lab",
      description:
        "A comprehensive Ansible testing environment for developing, testing, and validating automation scripts and roles before production deployment.",
      link: "https://github.com/force445/ansiblelab",
      tags: ["Ansible", "DevOps", "CI/CD"],
    },
    {
      name: "Terraform Lab",
      description:
        "Collection of Terraform configurations and modules for experimenting with Infrastructure as Code patterns across different providers.",
      link: "https://github.com/force445/terraformlab",
      tags: ["Terraform", "IaC", "Cloud Infrastructure"],
    },
    {
      name: "Proxmox Lab",
      description:
        "Infrastructure automation for Proxmox VE environments, managing Virtual Machines and LXC containers via code/API.",
      link: "https://github.com/force445/proxmoxlab",
      tags: ["Proxmox", "Virtualization", "Homelab", "Linux"],
    },
  ],
};
