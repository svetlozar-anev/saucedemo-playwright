import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('UC-001: Login fails with empty credentials', async ({ loginPage }) => {
  await loginPage.loginWithNoCredentials();
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Username is required');
});
