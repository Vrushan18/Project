# Feedback Collector

A simple GCP-powered feedback collection app.

## Frontend

- HTML + JavaScript hosted on GitHub Pages
- Calls backend function deployed on Google Cloud Functions

## Backend

- Node.js function using Firestore
- Deploy with:

```bash
gcloud functions deploy collectFeedback \
  --runtime nodejs20 \
  --trigger-http \
  --allow-unauthenticated \
  --entry-point=collectFeedback
```

## Firestore

Ensure Firestore is enabled in your GCP project.

Replace `<YOUR_CLOUD_FUNCTION_URL>` in `index.html` with your function's public URL.
