const { test, expect } = require('@playwright/test');

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://gentle-glacier-00956ce0f-preview.eastus2.6.azurestaticapps.net/login'); 
  await page.fill('//*[@id="«r1»"]', 'mids@yopmail.com');
  await page.fill('//*[@id="«r2»"]', 'StrongPass123!');
  await page.click('//*[@id="root"]/div/div[2]/form/button');
  // Assert successful login, e.g., check for dashboard or welcome message
  await expect(page.locator('//*[@id="root"]/div/main/div/div/div/div/div/div/p')).toBeVisible(); 
});
