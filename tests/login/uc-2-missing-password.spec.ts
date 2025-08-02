import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { config } from '../../utils/config';

test('UC-2: Login with missing password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.loginWithOnlyUsername(config.standardUser);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Password is required');
});
