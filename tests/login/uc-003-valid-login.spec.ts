import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { users, password } from '../../data/login-users';

test.describe('UC-003: Valid login', () => {
  for (const username of [
    users.standard,
    users.problem,
    users.glitch,
    users.error,
    users.visual]) {
    test(`should log in as ${username}`, async ({ loginPage }) => {
      await loginPage.login(username, password);
      expect(await loginPage.getTitle()).toBe('Swag Labs');
    });
  }
});
