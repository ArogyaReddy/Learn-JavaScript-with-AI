# Learning Session Templates

## Template 1: Tool/Feature Deep Dive

```markdown
📚 **[Tool]**: [Specific Feature]

**Goal**: [One sentence learning objective]

**Steps:**
1. Read official docs: [specific URL or command]
2. Create practice file: [filename]
3. Implement [specific feature]
4. Test with [command]
5. Verify [expected outcome]

**Practice Task:**
[Small exercise applying the learning]
```

## Template 2: Pattern Implementation

```markdown
📚 **Pattern**: [Design Pattern Name]

**Goal**: Implement [pattern] to solve [specific problem]

**Steps:**
1. Review [file] to understand current approach
2. Create [new file] with pattern structure
3. Refactor [specific function] to use pattern
4. Add tests in [test file]
5. Compare before/after with git diff

**Practice Task:**
Apply the same pattern to [another similar case]
```

## Template 3: Debugging Skill

```markdown
📚 **Debugging**: [Specific Technique]

**Goal**: Learn to debug [type of issue] faster

**Steps:**
1. Break working code in [file]: [specific breakage]
2. Use [debugging tool/technique] to investigate
3. Set breakpoint at [location]
4. Inspect [specific variable/state]
5. Fix and document the technique used

**Practice Task:**
Find and fix [existing bug] using this technique
```

## Example: Playwright Fixtures

```markdown
📚 **Playwright**: Master Test Fixtures for Reusable Setup

**Goal**: Create custom fixtures that share authenticated contexts across tests, reducing duplication.

**Steps:**
1. Read Playwright docs: `npx playwright open https://playwright.dev/docs/test-fixtures`
2. Create `tests/fixtures/auth.ts` with custom `authenticatedPage` fixture
3. Implement using `test.extend({ authenticatedPage: async ({ page }, use) => {...} })`
4. Update `tests/login.spec.ts` to use new fixture instead of manual login
5. Run tests: `npx playwright test tests/login.spec.ts`

**Practice Task:**
Create a `dbFixture` that seeds test data before each test and cleans up afterward. Use it in `tests/user.spec.ts` and verify data isolation.
```

## Example: TypeScript Generics

```markdown
📚 **TypeScript**: Write Type-Safe Helper Functions with Generics

**Goal**: Create reusable utility functions that preserve type information

**Steps:**
1. Create `src/utils/array-helpers.ts`
2. Implement `findFirst<T>(array: T[], predicate: (item: T) => boolean): T | undefined`
3. Add tests in `src/utils/array-helpers.test.ts` with different types
4. Use the helper in 2 existing files, noting IntelliSense improvements
5. Run type checker: `npx tsc --noEmit`

**Practice Task:**
Create a generic `groupBy<T, K>()` function that groups array items by a key selector.
```
