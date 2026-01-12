# Playwright Tips Collection

## Flaky Test Reduction

### Use data-testid over CSS selectors
Flaky tests often break when designers change class names. Add `data-testid` attributes to critical UI elements.

```typescript
// ❌ Fragile
await page.locator('.btn-primary.submit-form').click();

// ✅ Stable
await page.getByTestId('submit-form').click();
```

### Auto-wait instead of manual waits
Playwright auto-waits for elements to be ready before interaction.

```typescript
// ❌ Unnecessary
await page.waitForTimeout(3000);
await page.click('#button');

// ✅ Auto-waits
await page.click('#button');
```

## VS Code Workflows

### Multi-cursor editing for test data
Use `Cmd+D` (Mac) or `Ctrl+D` (Windows) to select next occurrence.

```typescript
// Select 'expect' and press Cmd+D three times
expect(result1).toBeTruthy();
expect(result2).toBeTruthy();
expect(result3).toBeTruthy();
```

### Command Palette shortcuts
- `Cmd+Shift+P` → Type "Playwright" → Run specific test
- `Cmd+K Cmd+S` → View all keyboard shortcuts
- `Cmd+P` → Quick file navigation with `@` for symbols

## Debugging

### Use trace viewer for failures
```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

### Console log filtering
```typescript
page.on('console', msg => {
  if (msg.type() === 'error') {
    console.log('Browser error:', msg.text());
  }
});
```

## CI/CD

### Parallelize tests by file
```yaml
# .github/workflows/tests.yml
- name: Run Playwright tests
  run: npx playwright test --workers=4
```

### Cache Playwright browsers
```yaml
- uses: actions/cache@v3
  with:
    path: ~/.cache/ms-playwright
    key: playwright-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
```
