import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { users, password } from '../../data/login-users';

test('UC-004: Login fails with locked out user', async ({ loginPage }) => {
  await loginPage.login(users.lockedOut, password);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Epic sadface: Sorry, this user has been locked out.');
});