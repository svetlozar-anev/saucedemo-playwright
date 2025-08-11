import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { users, password } from '../../data/login-users';

test('UC-005: Login fails with wrong password', async ({ loginPage }) => {
  await loginPage.login(users.standard, password);
  const error = await loginPage.getErrorMessage();
  expect(error).toBe('Epic sadface: Username and password do not match any user in this service');

  test.describe('UC-005: Login fails with wrong password', () => {
    for (const username of [
      users.standard,
      users.problem,
      users.glitch,
      users.error,
      users.visual
    ]) {
      test(`should log in as ${username}`, async ({ loginPage }) => {
        await loginPage.login(username, password);
        expect(await loginPage.getTitle()).toBe('Swag Labs');
      });
    }
  });
});