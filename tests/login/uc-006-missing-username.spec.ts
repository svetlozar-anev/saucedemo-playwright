import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { password } from '../../data/login-users';

test('UC-006: Login fails with missing username', async ({ loginPage }) => {
  await loginPage.loginWithOnlyPassword(password);
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Username is required');
});
