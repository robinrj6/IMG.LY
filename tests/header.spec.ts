import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
  await page.getByRole('button', { name: 'Reject all cookies' }).click();
});

test('products dropdown on wide screen', async ({ page }) => {
  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: 'Products' }).hover();

  await expect(header.getByText('Starter Kits')).toBeVisible();
});

test('solutions dropdown on wide screen', async ({ page }) => {
  const header = page.getByRole('navigation');

  await header
    .getByLabel('A menu that links to different use cases for the CE.SDK')
    .hover();

  await expect(header.getByText('by industry')).toBeVisible();
});

test('docs dropdown on wide screen', async ({ page }) => {
  const header = page.getByRole('navigation');

  await header
    .getByLabel(
      'A menu with different entry points into each SDK documentation',
    )
    .hover();

  await expect(
    header.getByRole('link', { name: 'Visit our Support Desk' }),
  ).toBeVisible();
});

test('products dropdown on small screen', async ({ page }) => {
  await page.setViewportSize({
    width: 640,
    height: 480,
  });

  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: '' }).click();
  await header.getByRole('button', { name: 'Products' }).click();

  await expect(
    header.getByRole('link', {
      name: 'PhotoEditor SDK PhotoEditor SDK for Web & Mobile',
    }),
  ).toBeVisible();
});

test('solutions dropdown on small screen', async ({ page }) => {
  await page.setViewportSize({
    width: 640,
    height: 480,
  });

  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: '' }).click();
  await header
    .getByLabel('A menu that links to different use cases for the CE.SDK')
    .click();

  await expect(
    header.getByRole('link', {
      name: 'Print Combine modern design editing and automation in your print workflow.',
    }),
  ).toBeVisible();
});

test('docs dropdown on small screen', async ({ page }) => {
  await page.setViewportSize({
    width: 640,
    height: 480,
  });

  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: '' }).click();
  await header
    .getByLabel(
      'A menu with different entry points into each SDK documentation',
    )
    .click();

  await expect(
    header.getByRole('link', { name: 'Get Started' }).first(),
  ).toBeVisible();
});
