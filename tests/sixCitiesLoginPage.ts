import { Locator, Page } from '@playwright/test';

export class sixCitiesLoginPage {
  constructor(page: Page, url = 'http://localhost:5173/login') {
    this.url = url;
    this.page = page;
    this.submitButton = this.page.getByTestId('submit-btn');
    this.emailInput = this.page.getByTestId('login-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.signOut = this.page.getByTestId('signout-link');
  }

  public readonly url: string;

  private readonly page: Page;

  public readonly submitButton: Locator;

  public readonly emailInput: Locator;

  public readonly passwordInput: Locator;

  public readonly signOut: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
