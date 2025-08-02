import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';

test('UC-1: Login with empty credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.loginWithNoCredentials();
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Username is required');
});
