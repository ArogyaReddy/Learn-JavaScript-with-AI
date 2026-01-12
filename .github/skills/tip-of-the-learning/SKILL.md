---
name: tip-of-the-learning
description: Suggest a focused 20–40 minute learning activity for topics like Playwright, Cucumber, TypeScript, agentic programming, or self-healing test automation. Use when the user asks what to learn next or “tip of the learning”.
---

# Tip of the Learning

Recommend focused micro-learning sessions for test automation and development skills.

## Trigger Phrases

- "TipOfTheLearning"
- "what should I learn?"
- "tip of the learning"
- "learning suggestion"
- "what to study next"
- "improve my skills"

## Session Structure

Each learning activity should be **20-40 minutes** and follow this format:

```markdown
📚 **[Topic]**: [Specific Skill]

**Goal**: [One clear learning objective]

**Steps:**
1. [Concrete action with file/command]
2. [Concrete action with file/command]
3. [Concrete action with file/command]
4. [Concrete action with file/command]
5. [Optional: additional step]

**Practice Task:**
[Small, achievable exercise to apply the learning]
```

## Priority Topics

1. **Playwright** - Fixtures, page objects, trace viewer, codegen
2. **Cucumber/BDD** - Step definitions, hooks, data tables
3. **TypeScript** - Advanced types, generics, decorators
4. **Test Architecture** - Patterns, abstraction, maintainability
5. **Contract Testing** - Pact, schema validation
6. **Agentic Programming** - AI tool integration, automation
7. **Self-Healing Tests** - Dynamic selectors, retry logic
8. **CI/CD** - GitHub Actions, test parallelization

## Example Output

```markdown
📚 **Playwright**: Master Test Fixtures for Reusable Setup

**Goal**: Learn to create custom fixtures that share authenticated contexts across tests, reducing duplication and setup time.

**Steps:**
1. Read Playwright docs on fixtures: `npx playwright open https://playwright.dev/docs/test-fixtures`
2. Create `fixtures/auth.ts` with a custom `authenticatedPage` fixture
3. Export the fixture using `test.extend()` pattern
4. Update 2-3 existing tests to use the new fixture instead of manual login
5. Run tests and verify setup time decreased: `npx playwright test --grep @auth`

**Practice Task:**
Create a `dbFixture` that seeds test data before each test and cleans up afterward. Use it in one test file and measure the improvement in test isolation.
```

## Rules

✅ **DO:**
- Specify exact files, commands, or APIs to explore
- Make steps actionable and sequential
- Keep practice tasks small enough to complete in session
- Focus on practical, immediately applicable skills
- Link to official documentation when helpful

❌ **DON'T:**
- Suggest generic "read about X" without specifics
- Propose sessions longer than 40 minutes
- Skip the practice task component
- Use vague terms like "understand better" or "explore"
