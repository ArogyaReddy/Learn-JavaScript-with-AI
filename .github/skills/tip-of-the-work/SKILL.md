---
name: tip-of-the-work
description: Recommend the next high-leverage work item in the current repository for a senior automation architect, based on files and recent changes. Use when the user asks what to work on or requests a focused next task.
---

# Tip of the Work

Suggest context-aware, high-impact work items based on the current repository state.

## Trigger Phrases

- "TipOfTheWork"
- "what should I work on?"
- "tip of the work"
- "next task"
- "what's the most important thing to do?"
- "suggest a task"

## Analysis Process

1. **Gather Context**
   - Check file tree structure
   - Review recently opened files
   - Check git status for uncommitted changes
   - Look for TODOs, FIXMEs in codebase
   - Identify missing tests or incomplete features

2. **Prioritize by Impact**
   - **High**: Broken tests, critical bugs, missing core functionality
   - **Medium**: Code debt, missing docs, test coverage gaps
   - **Low**: Nice-to-haves, cosmetic improvements

3. **Filter by Time Constraint**
   - Suggest tasks completable in **25-45 minutes**
   - Break larger tasks into smaller chunks if needed

## Response Format

```markdown
🎯 **Next Task**: [Specific, actionable task title]

**Why it matters:**
[2-3 sentences explaining business/technical value]

**Estimated time:** [25-45 minutes]

**Checklist:**
- [ ] [Specific step with file/command]
- [ ] [Specific step with file/command]
- [ ] [Specific step with file/command]
- [ ] [Specific step with file/command]
- [ ] [Optional: verification step]

**Success criteria:**
[How to verify the task is complete]
```

## Task Categories

| Category | Examples |
|----------|----------|
| **Tests** | Add missing test coverage, fix flaky tests, improve test data |
| **Refactoring** | Extract duplicated code, improve naming, simplify complexity |
| **Documentation** | Add JSDoc, update README, document APIs |
| **Tooling** | Add helper utilities, improve scripts, configure linters |
| **Bug Fixes** | Address errors, fix edge cases, improve error handling |
| **Performance** | Optimize slow tests, reduce bundle size, cache improvements |

## Example Output

```markdown
🎯 **Next Task**: Add error boundary to async test utilities

**Why it matters:**
Several test files have duplicated try-catch blocks around async operations. Creating a reusable error boundary will improve consistency, reduce boilerplate, and make debugging easier when tests fail unexpectedly.

**Estimated time:** 30 minutes

**Checklist:**
- [ ] Create `utils/test-helpers.ts` with `safeAsync()` wrapper function
- [ ] Add TypeScript generics for type safety
- [ ] Replace 3-4 try-catch blocks in `tests/integration/*.spec.ts`
- [ ] Add unit tests in `utils/test-helpers.spec.ts`
- [ ] Run test suite to verify: `npm test`

**Success criteria:**
All tests pass, code coverage stays above 80%, and at least 3 test files use the new helper.
```

## Rules

✅ **DO:**
- Base recommendations on actual repository contents
- Provide specific file paths and commands
- Explain the "why" clearly
- Keep scope reasonable (25-45 min)
- Include verification/success criteria

❌ **DON'T:**
- Suggest tasks without checking repo context first
- Propose vague improvements like "make code better"
- Recommend massive refactors taking hours/days
- Skip the "why it matters" explanation
- Forget to check if files/paths actually exist
