import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  // === Navigation ===
  async goto() {
    await this.page.goto('/');
  }

  // === Login variants ===
  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async loginWithNoCredentials() {
    await this.page.click('#login-button');
  }

  async loginWithOnlyUsername(username: string) {
    await this.page.fill('#user-name', username);
    await this.page.click('#login-button');
  }

  async loginWithOnlyPassword(password: string) {
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  // === Assertions ===
  async getErrorMessage(): Promise<string | null> {
    return this.page.textContent('[data-test="error"]');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
