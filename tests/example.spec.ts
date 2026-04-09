import { test, expect } from '@playwright/test';
import { sixCitiesLoginPage } from './sixCitiesLoginPage';
import { sixCitiesMainPage } from './sixCitiesMainPage';

test('user can sign in', async ({ page }) => {
  const sixCitiesPage = new sixCitiesLoginPage(page);
  await sixCitiesPage.load();

  await sixCitiesPage.emailInput.fill('yanakor@gmai.com');
  await sixCitiesPage.passwordInput.fill('password2');
  await sixCitiesPage.submitButton.click();
  await expect(sixCitiesPage.signOut).toBeVisible({ timeout: 5000 });
  await expect(page).toHaveURL('http://localhost:5173/');
});

test('user can sort offers', async ({ page }) => {
  const mainPage = new sixCitiesMainPage(page);
  await mainPage.load();

  await mainPage.sortDropdown.click();
  await mainPage.sortByRatingDesc.click();

  const isSortedByRating = await mainPage.isSortedByRatingDesc();
  expect(isSortedByRating).toBe(true);

  await mainPage.sortDropdown.click();
  await mainPage.sortByPriceAsc.click();

  const isSortedByPriceAsc = await mainPage.isSortedByPriceAsc();
  expect(isSortedByPriceAsc).toBe(true);

  await mainPage.sortDropdown.click();
  await mainPage.sortByPriceDesc.click();

  const isSortedByPriceDesc = await mainPage.isSortedByPriceDesc();
  expect(isSortedByPriceDesc).toBe(true);
});

test('user can filter offers by city', async ({ page }) => {
  const mainPage = new sixCitiesMainPage(page);
  await mainPage.load();

  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  for (const city of cities) {
    const cityLink = mainPage.getCityLink(city);
    await cityLink.click();

    await expect(page.getByTestId('offers-list-header')).toContainText(city);
  }
});
