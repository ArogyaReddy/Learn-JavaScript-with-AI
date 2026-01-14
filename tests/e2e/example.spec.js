const { test, expect } = require('@playwright/test');

/**
 * Example E2E Tests
 * These demonstrate browser automation and user flow testing
 */

test.describe('Example Website Navigation', () => {
  test('should load the homepage', async ({ page }) => {
    // Navigate to a public test site
    await page.goto('https://playwright.dev');
    
    // Expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should navigate to Getting Started', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Click the get started link
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // Expects the URL to contain intro
    await expect(page).toHaveURL(/.*intro/);
  });

  test('should show search functionality', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Click on search button
    const searchButton = page.getByRole('button', { name: 'Search' });
    await expect(searchButton).toBeVisible();
  });
});

test.describe('Form Interactions', () => {
  test('should handle text input', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Open search
    await page.getByRole('button', { name: 'Search' }).click();
    
    // Type in search
    const searchInput = page.getByPlaceholder(/Search/i);
    await searchInput.fill('testing');
    
    // Verify input value
    await expect(searchInput).toHaveValue('testing');
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('https://playwright.dev');
    
    // Check mobile menu is visible
    const mobileMenu = page.getByRole('button', { name: /menu/i }).first();
    await expect(mobileMenu).toBeVisible();
  });
});

test.describe('Performance Checks', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('https://playwright.dev');
    
    const loadTime = Date.now() - startTime;
    
    // Expect page to load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});
