# ReviewBot Learning Project

## Build & Run
- `npm start` to run the server
- `npm test` to run tests (when added)

## Code Conventions
- Use camelCase for variables and functions
- Use async/await over callbacks
- All route handlers must have error handling (try/catch)
- No magic numbers — use named constants

## Review Standards
- Every PR must have: no console.log left behind, input validation on routes, consistent error response format
- Error responses must use format: `{ error: string, status: number }`
