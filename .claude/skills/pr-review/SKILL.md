---
name: pr-review
description: Reviews code changes for quality, security, and convention compliance. Use when reviewing PRs or code diffs.
user-invocable: true
allowed-tools: Read, Grep, Glob, Bash
argument-hint: "[branch or file]"
---

# PR Review Skill

## Context
Current diff:
!`git diff main --stat`

Detailed changes:
!`git diff main`

## Review Process
1. **Security scan**: Check for injection vulnerabilities, exposed secrets, unsafe eval/exec
2. **Convention check**: Verify against project CLAUDE.md standards
3. **Logic review**: Look for edge cases, off-by-one errors, missing null checks
4. **Test coverage**: Flag any new code paths without corresponding tests

## Output Format
Use this structure for every review:

### Summary
[1-2 sentence overview]

### Issues Found
| Severity | File:Line | Issue | Suggestion |
|----------|-----------|-------|------------|
| ... | ... | ... | ... |

### Positive Notes
[Things done well]
