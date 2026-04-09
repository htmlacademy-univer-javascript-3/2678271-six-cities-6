import { Locator, Page } from '@playwright/test';

export class sixCitiesMainPage {

  constructor(page: Page, url = 'http://localhost:5173') {
    this.url = url;
    this.page = page;
    this.sortDropdown = page.getByTestId('sort-dropdown');
    this.sortByPriceAsc = page.getByTestId('Price: low to high');
    this.sortByPriceDesc = page.getByTestId('Price: high to low');
    this.sortByPopular = page.getByTestId('Popular');
    this.sortByRatingDesc = page.getByTestId('Top rated first');

    this.priceElements = page.getByTestId('price');
    this.ratingElements = page.getByTestId('rating-stars');
  }

  public readonly url: string;

  private readonly page: Page;

  public readonly sortByPriceAsc: Locator;

  public readonly sortDropdown: Locator;
  public readonly sortByPriceDesc: Locator;
  public readonly sortByPopular: Locator;
  public readonly sortByRatingDesc: Locator;

  public readonly priceElements: Locator;
  public readonly ratingElements: Locator;

  async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  async getAllPrices(): Promise<number[]> {
    const priceTexts = await this.priceElements.allTextContents();
    return priceTexts.map((text) => parseInt(text.replace('€', ''), 10));
  }

  getCityLink(city: string): Locator {
    return this.page.getByTestId(city);
  }

  async getAllRatings(): Promise<number[]> {
    const ratings = await this.ratingElements.evaluateAll((elements) =>
      elements.map((el) => {
        const ratingValue = el.getAttribute('data-rating');
        return ratingValue ? parseFloat(ratingValue) : 0;
      })
    );
    return ratings;
  }

  async isSortedByPriceAsc(): Promise<boolean> {
    const prices = await this.getAllPrices();
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < prices[i - 1]){
        return false;
      }
    }
    return true;
  }

  async isSortedByPriceDesc(): Promise<boolean> {
    const prices = await this.getAllPrices();
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]){
        return false;
      }
    }
    return true;
  }

  async isSortedByRatingDesc(): Promise<boolean> {
    const ratings = await this.getAllRatings();
    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]){
        return false;
      }
    }
    return true;
  }
}
