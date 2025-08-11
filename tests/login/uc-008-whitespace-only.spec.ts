import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { whitespace } from '../../data/login-users';

test('UC-008: Login fails with whitespace-only username and password', async ({ loginPage }) => {
  await loginPage.login(whitespace, whitespace);
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Username and password do not match any user in this service');
});
