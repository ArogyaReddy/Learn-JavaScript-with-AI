const { test, expect } = require('@playwright/test');
const { injectAxe, checkA11y, getViolations } = require('axe-playwright');

/**
 * Accessibility Testing with axe-core
 * Tests WCAG compliance and accessibility issues
 */

test.describe('Accessibility Tests', () => {
  test('homepage should have no accessibility violations', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Inject axe-core into the page
    await injectAxe(page);
    
    // Run accessibility checks
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Check for h1
    const h1 = page.locator('h1');
    await expect(h1.first()).toBeVisible();
    
    // Verify heading text is meaningful
    const h1Text = await h1.first().textContent();
    expect(h1Text.length).toBeGreaterThan(0);
  });

  test('all images should have alt text', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    // Check each image has alt attribute
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      // Alt can be empty for decorative images, but should exist
      expect(alt).not.toBeNull();
    }
  });

  test('interactive elements should be keyboard accessible', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Tab through elements
    await page.keyboard.press('Tab');
    
    // Check if focused element is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    await injectAxe(page);
    
    // Check specifically for color contrast issues
    await checkA11y(page, null, {
      rules: {
        'color-contrast': { enabled: true }
      }
    });
  });

  test('forms should have proper labels', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    await injectAxe(page);
    
    // Check form labels
    await checkA11y(page, 'form', {
      rules: {
        'label': { enabled: true },
        'label-title-only': { enabled: true }
      }
    });
  });

  test('should have valid ARIA attributes', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    await injectAxe(page);
    
    // Check ARIA compliance
    await checkA11y(page, null, {
      rules: {
        'aria-valid-attr': { enabled: true },
        'aria-valid-attr-value': { enabled: true }
      }
    });
  });
});

test.describe('Screen Reader Support', () => {
  test('should have proper page title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
    expect(title).not.toBe('Untitled');
  });

  test('should have lang attribute on html', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).not.toBeNull();
    expect(lang.length).toBeGreaterThan(0);
  });

  test('links should have descriptive text', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Get all links
    const links = page.locator('a[href]');
    const count = await links.count();
    
    // Check first 10 links have text content
    const checkCount = Math.min(count, 10);
    for (let i = 0; i < checkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      
      // Link should have either text or aria-label
      const hasDescription = (text && text.trim().length > 0) || (ariaLabel && ariaLabel.length > 0);
      expect(hasDescription).toBeTruthy();
    }
  });
});
