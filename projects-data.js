const projects = [
  {
    id: "kafka-security",
    icon: "🔴",
    title: "Real-Time AI Security Analytics Platform",
    desc: "Real-time log processing pipeline with ML-based anomaly detection and threat identification.",
    tags: ["Kafka", "Apache NiFi", "Spark", "Elasticsearch", "Kibana", "Python"],
    github: "https://github.com/saadcnx/legendary-potato"
  },
  {
    id: "ansible-webserver",
    icon: "⚙️",
    title: "Ansible Web Server Role Automation",
    desc: "Role-based Ansible automation to install, configure, and manage Apache web servers on Ubuntu.",
    tags: ["Ansible", "Apache", "UFW", "Jinja2", "Bash"],
    github: "https://github.com/saadcnx/ansible-role-webserver-automation"
  },
  {
    id: "ansible-vault",
    icon: "🔐",
    title: "Ansible Vault Enterprise Secrets Management",
    desc: "Enterprise-grade secrets management and automation using Ansible Vault.",
    tags: ["Ansible", "Vault", "Security", "Automation"],
    github: "https://github.com/saadcnx/Ansible-Vault-Enterprise-Secrets-Management-Automation"
  },
  {
    id: "ansible-dynamic",
    icon: "🔧",
    title: "Ansible Dynamic Config System",
    desc: "Dynamic configuration management system using Ansible for scalable infrastructure.",
    tags: ["Ansible", "Configuration Management", "Infrastructure"],
    github: "https://github.com/saadcnx/ansible-dynamic-config-system"
  },
  {
    id: "k8s-multi-tier",
    icon: "☸️",
    title: "Kubernetes Multi-Tier Application",
    desc: "Multi-tier app on Kubernetes with Nginx frontend, Flask API backend, and MySQL database.",
    tags: ["Kubernetes", "Nginx", "Flask", "MySQL", "ConfigMaps"],
    github: "https://github.com/saadcnx/kubernetes-multi-tier-app-kcna"
  },
  {
    id: "k8s-security",
    icon: "🛡️",
    title: "Kubernetes Security Best Practices",
    desc: "KCNA-aligned Kubernetes security implementation covering RBAC, network policies, and pod security.",
    tags: ["Kubernetes", "RBAC", "Security", "KCNA"],
    github: "https://github.com/saadcnx/k8s-security-best-practices-kcna"
  },
  {
    id: "k8s-storage",
    icon: "💾",
    title: "Kubernetes Persistent Storage",
    desc: "Practical implementation of persistent volumes, claims, and storage classes in Kubernetes.",
    tags: ["Kubernetes", "PVC", "Storage", "StatefulSets"],
    github: "https://github.com/saadcnx/kubernetes-persistent-storage-practical"
  },
  {
    id: "k8s-blocks",
    icon: "🧱",
    title: "Kubernetes Building Blocks",
    desc: "Core Kubernetes concepts: Deployments, Services, ConfigMaps, Secrets, and Ingress.",
    tags: ["Kubernetes", "Deployments", "Services", "Ingress"],
    github: "https://github.com/saadcnx/kubernetes-building-blocks"
  },
  {
    id: "docker-cicd",
    icon: "🚀",
    title: "Docker CI/CD with GitHub Actions",
    desc: "Automated Docker image build and deployment pipeline using GitHub Actions.",
    tags: ["Docker", "GitHub Actions", "CI/CD", "Automation"],
    github: "https://github.com/saadcnx/docker-cicd-github-actions"
  },
  {
    id: "docker-orchestration",
    icon: "🐳",
    title: "Docker Complex App Orchestration",
    desc: "Multi-service Docker Compose orchestration for complex application stacks.",
    tags: ["Docker", "Docker Compose", "Orchestration"],
    github: "https://github.com/saadcnx/docker-complex-app-orchestration"
  },
  {
    id: "docker-multi",
    icon: "🌐",
    title: "Multi-Container Web Application",
    desc: "Production-style multi-container web application with Docker networking and volumes.",
    tags: ["Docker", "Nginx", "Flask", "Networking"],
    github: "https://github.com/saadcnx/multi-container-web-application"
  },
  {
    id: "nginx-lb",
    icon: "⚡",
    title: "Production Nginx Reverse Proxy & Load Balancer",
    desc: "Production-grade Nginx setup with reverse proxy, load balancing, and SSL termination.",
    tags: ["Nginx", "Load Balancing", "Reverse Proxy", "SSL"],
    github: "https://github.com/saadcnx/production-nginx-reverse-proxy-lb"
  },
  {
    id: "flask-docker",
    icon: "🐍",
    title: "Dockerized Flask Application",
    desc: "Flask web application containerized with Docker for consistent deployment.",
    tags: ["Docker", "Flask", "Python", "Containerization"],
    github: "https://github.com/saadcnx/docker-deploy-flask-app"
  },
  {
    id: "jira-automation",
    icon: "🎫",
    title: "JIRA Automation Suite (Python)",
    desc: "Python automation using JIRA REST API for auto-ticketing, health monitoring, and DevOps workflows.",
    tags: ["Python", "JIRA API", "Automation", "DevOps"],
    github: "https://github.com/saadcnx/jira-automation-scripts"
  },
  {
    id: "flask-jira",
    icon: "🔗",
    title: "Flask JIRA API Project",
    desc: "Flask-based web interface integrated with JIRA API for project and issue management.",
    tags: ["Flask", "JIRA", "REST API", "Python"],
    github: "https://github.com/saadcnx/Flask-jira-api-project"
  },
  {
    id: "trainer-mgmt",
    icon: "📋",
    title: "Trainer Management System",
    desc: "Full-stack Flask web app for managing trainer records with MySQL and CRUD operations.",
    tags: ["Flask", "MySQL", "Jinja2", "CRUD"],
    github: "https://github.com/saadcnx/trainer-management-flask"
  },
  {
    id: "aws-arch",
    icon: "☁️",
    title: "AWS Solution Architecture",
    desc: "AWS infrastructure architecture designs covering EC2, VPC, IAM, S3, and cloud best practices.",
    tags: ["AWS", "EC2", "VPC", "IAM", "S3", "Terraform"],
    github: "https://github.com/saadcnx/AWS-Solution-Architecture"
  }
];