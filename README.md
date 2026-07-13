# ShipStack Node.js Express Docker Template

A production-ready Node.js Express starter template using Docker and Docker Compose.

ShipStack templates help developers move applications from local development to containerized environments quickly with DevOps best practices included.

## 🚀 Features

* Node.js 22 Alpine Docker image
* Express.js API application
* Docker Compose workflow
* Environment variable configuration
* Non-root Docker container user
* Container health check
* Docker build automation with GitHub Actions
* Clean production Docker structure

---

## 📁 Project Structure

```text
nodejs-express/

├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
│
├── .github/
│   └── workflows/
│       └── docker-ci.yml
│
└── app/
    ├── package.json
    ├── package-lock.json
    └── server.js
```

---

# 🛠 Requirements

Install:

* Docker
* Docker Compose

Verify:

```bash
docker --version
```

```bash
docker compose version
```

---

# ⚙️ Environment Configuration

Create your environment file:

```bash
cp .env.example .env
```

Example:

```env
APP_NAME=ShipStack
APP_PORT=3000
NODE_ENV=production
```

Do not commit `.env` files containing secrets.

---

# 🐳 Run Application

Build and start:

```bash
docker compose up --build
```

Application runs on:

```text
http://localhost:3000
```

---

# 🧪 Test API

Using curl:

```bash
curl localhost:3000
```

Response:

```json
{
  "message": "ShipStack Docker Template Running",
  "environment": "production"
}
```

---

# 🔍 Docker Commands

View running containers:

```bash
docker ps
```

View logs:

```bash
docker compose logs
```

Stop application:

```bash
docker compose down
```

Rebuild:

```bash
docker compose up --build
```

---

# 🔐 Security Features

This template includes:

## Non-root container execution

The application runs using a dedicated Docker user instead of root.

Verify:

```bash
docker exec -it shipstack-node-api whoami
```

Expected:

```text
nodeuser
```

---

## Health Check

Docker monitors application health automatically.

Check:

```bash
docker ps
```

Expected:

```text
healthy
```

---

# 🔄 CI/CD Workflow

Every push to the main branch triggers GitHub Actions:

```text
Developer
    |
    |
Git Push
    |
    ↓
GitHub Actions
    |
    ↓
Docker Build Test
    |
    ↓
Success / Failure
```

Workflow file:

```text
.github/workflows/docker-ci.yml
```

---

# 🏗 Docker Architecture

```text
Developer Code

      |

 Dockerfile

      |

 Docker Image

      |

 Docker Container

      |

 Node.js Express API

      |

 Health Monitoring
```

---

# 🚀 Future Improvements

Planned ShipStack upgrades:

* PostgreSQL database integration
* Nginx reverse proxy
* Redis caching
* Kubernetes deployment manifests
* Helm charts
* Terraform AWS deployment
* Monitoring with Prometheus and Grafana

---

# 📦 Version

Current version:

```text
v1.0.0
```

---

# 📄 License

MIT License

---

## About ShipStack

ShipStack creates reusable DevOps templates that help developers ship applications faster.
