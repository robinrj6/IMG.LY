import { test, expect } from '@playwright/test';

test('has cookie banner', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('We Would Love To Use Cookies')).toBeVisible();
});

test('can accept cookies', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await expect(
    page.getByText('We Would Love To Use Cookies'),
  ).not.toBeVisible();
});

test('can reject cookies', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Reject all cookies' }).click();

  await expect(
    page.getByText('We Would Love To Use Cookies'),
  ).not.toBeVisible();
});

test('has header', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByTestId('imgly-website-components-header'),
  ).not.toBeEmpty();

  await expect(
    page.getByTestId('imgly-website-components-header').locator('div').first(),
  ).toBeVisible();
});

test('has footer', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByTestId('imgly-website-components-footer'),
  ).not.toBeEmpty();

  await expect(
    page.getByTestId('imgly-website-components-footer').locator('div').first(),
  ).toBeVisible();
});
