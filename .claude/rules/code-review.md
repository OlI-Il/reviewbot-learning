---
paths:
  - "src/**/*.js"
---
# Code Review Rules for Source Files
- Check for missing input validation on request parameters
- Flag any hardcoded strings that should be constants
- Ensure error responses use format: { error: string, status: number }
