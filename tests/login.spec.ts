import { test, expect } from '@playwright/test';

test.describe('Home page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

test('visual test', async ({ page }) => {
  await expect(page).toHaveScreenshot('home-page.png');
});

test('check sign in link', async ({ page }) => {
  await expect(page.locator('[data-test="nav-sign-in"]')).toContainText('Sign in');
});

test('validate page title', async ({ page }) => {
  await expect (page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});

test('grid load with 9 items', async ({ page }) => {
  const productGrid = page.locator(".col-md-9");
  await expect(productGrid.getByRole("link")).toHaveCount(9);
  expect(await productGrid.getByRole("link").count()).toBe(9);
});

  test('Thor hammer search', async ({ page }) => {
   
  await page.locator('[data-test="search-query"]').fill('Thor Hammer');
   await page.locator('[data-test="search-submit"]').click();
   const productGrid = page.locator(".col-md-9");
  await expect (productGrid.getByRole("link")).toHaveCount(1);
  await expect (page.getByAltText('Thor Hammer')).toBeVisible();
  });
  });

  test.describe("home page customer Auth0 tests", () => {
    test.use ({ storageState: ".auth/customer01.json" });
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practicesoftwaretesting.com/');
    });

      test('validate user is logged in', async ({ page }) => {
      await expect(page.locator('[data-test="nav-sign-in"]')).not.toBeVisible();
      await expect(page.locator('[data-test="nav-menu"]')).toContainText('Bob Smith');
      page.close();
        
    });
    });