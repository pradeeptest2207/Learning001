import {test, expect} from '@playwright/test';

test('Home page test', async ({page}) => { 
    await page.goto('await page.goto('https://practicesoftwaretesting.com/');
    await expect(page.locator('[data-test="nav-sign-in"]')).toContainText('Sign in');
  
    // Ensure the sign up button is visible

    await expect(page.locator('[data-testid="nav-contact"]')).toContainText('Contact');
    //await expect(page.locator('[data-test="nav-invoices"]')).toContainText('Invoices');

    // checck the title of the page
    });