import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { config } from '../../utils/config';

test.describe('UC-3: Valid login', () => {
  for (const username of config.legitUsers) {
    test(`should log in as ${username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();

      await loginPage.login(username, 'secret_sauce');
      expect(await loginPage.getTitle()).toBe('Swag Labs');
    });
  }
});
