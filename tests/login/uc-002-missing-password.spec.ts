import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { users } from '../../data/login-users';

test('UC-002: Login fails with missing password', async ({ loginPage }) => {
  await loginPage.loginWithOnlyUsername(users.standard);
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Password is required');
});
