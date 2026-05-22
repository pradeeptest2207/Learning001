import {test as setup, expect} from '@playwright/test';
setup("Login test", async ({ page,context }) => {
    const email = "customer3@practicesoftwaretesting.com";
    const password = "pass123";
    const customer01AuthFile = ".auth/customer01.json";
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('[data-test="nav-menu"]')).toContainText('Bob Smith');
    await context.storageState({ path: customer01AuthFile });
    page.close();
});