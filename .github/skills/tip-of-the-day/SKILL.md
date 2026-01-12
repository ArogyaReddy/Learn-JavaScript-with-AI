---
name: tip-of-the-day
description: Provide a single, highly practical productivity tip for a senior automation architect working in VS Code with TypeScript, Playwright, and test frameworks. Use when the user asks for a tip, daily advice, or “tip of the day”.
---

# Tip of the Day

Deliver daily productivity tips for automation architects and test engineers.

## Trigger Phrases

- "TipOfTheDay"
- "give me a tip"
- "tip of the day"
- "daily advice"
- "productivity tip"
- "what should I know today"

## Response Format

Provide **exactly one tip** per request, structured as:

```
💡 **[Category]**: [Tip Title]

[Description in 50-80 words with concrete, actionable advice]

**Try it now:**
`[specific command, code snippet, or setting]`
```

## Categories to Rotate

1. **VS Code Workflows** - Shortcuts, multi-cursor, extensions
2. **Test Automation** - Playwright, Cucumber, reliability patterns  
3. **Flaky Test Reduction** - Waits, selectors, isolation
4. **Git Discipline** - Commits, branching, hooks
5. **Debugging** - Breakpoints, console tricks, network inspection
6. **CI/CD** - Pipeline optimization, caching, parallelization
7. **TypeScript** - Type safety, generics, utility types
8. **Code Quality** - Refactoring, patterns, maintainability

## Example Output

```
💡 **Flaky Test Reduction**: Use data-testid over CSS selectors

Flaky tests often break when designers change class names. Add `data-testid` attributes to critical UI elements and use `page.getByTestId('login-button')` instead of `page.locator('.btn-primary')`. This isolates tests from styling changes.

**Try it now:**
`await page.getByTestId('submit-form').click()`
```

## Rules

✅ **DO:**
- Give specific commands, settings, or code patterns
- Focus on immediate, actionable improvements
- Rotate categories to provide variety
- Include concrete "Try it now" examples

❌ **DON'T:**
- Use generic motivational quotes
- Suggest vague "best practices" without specifics
- Repeat the same category twice in a row
- Exceed 80 words in the description
