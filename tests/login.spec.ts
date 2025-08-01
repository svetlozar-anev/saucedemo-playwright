import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { config } from '../utils/config';

test.describe('Login Tests - SauceDemo', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('UC-1: Login with empty credentials', async () => {
    await loginPage.login('someuser', 'somepass');
    await loginPage.clearUsername();
    await loginPage.clearPassword();
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username is required');
  });

  test('UC-2: Login with missing password', async () => {
    await loginPage.login('someuser', 'somepass');
    await loginPage.clearPassword();
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Password is required');
  });

  test('UC-3: Valid login', async () => {
    await loginPage.login(config.username, config.password);
    const title = await loginPage.getTitle();
    expect(title).toBe('Swag Labs');
  });
});
