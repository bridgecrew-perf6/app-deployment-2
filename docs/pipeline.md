# Deployment Pipeline

With every pushed commit to the main branch, CircleCi will:

    1 - Intall Node.js
    2 - Install AWS CLI
    3 - Install AWS EB CLI
    4 - Build API server:
        - Install dependencies.
        - Build artifacts.
        - run Tests.
        - Deploy artifacts to AWS EB.
    5 - Build UI/FE SPA:
        - Install dependencies.
        - Build artifacts.
        - run Tests.
        - Deploy artifacts to AWS S3 Bucket.

[Pipeline diagram](docs/diagrams/pipeline.png)
