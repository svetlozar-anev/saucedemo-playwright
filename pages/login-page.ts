import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) { }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async loginWithNoCredentials() {
    await this.page.fill('#user-name', '');
    await this.page.fill('#password', '');
    await this.page.click('#login-button');
  }

  async loginWithOnlyUsername(username: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', '');
    await this.page.click('#login-button');
  }

  async getErrorMessage(): Promise<string | null> {
    return this.page.textContent('[data-test="error"]');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
