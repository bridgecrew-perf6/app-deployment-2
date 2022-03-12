# Udagram App Infrastructure

| Tier       | AWS               | Description                                     |
| ---------- | ----------------- | ----------------------------------------------- |
| API Server | Elastic Beanstalk | Host server & handle API calls. (PaaS)          |
| UI/FE      | S3                | Host UI artifacts & serve the website pages.    |
| Database   | RDS               | Host & handle requests to PostgreSQL DB server. |

[Infrastructure diagram](docs/diagrams/architecture.png)
