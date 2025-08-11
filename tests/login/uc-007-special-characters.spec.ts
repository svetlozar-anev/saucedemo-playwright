import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { specialChars } from '../../data/login-users';

test('UC-007: Login fails with special characters in username and password', async ({ loginPage }) => {
  await loginPage.login(specialChars, specialChars);
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Username and password do not match any user in this service');
});
