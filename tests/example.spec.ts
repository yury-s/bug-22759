import { test, expect } from '@playwright/test';

test('test', async ({page, context, browserName, browser}) => {
  await test.step("Step 0", async () => {                        
      try {                         
          await page.goto("https://www.aircanada.com/ca/en/aco/home.html");
          await page.getByLabel('To', {exact: true}).click();
          await page.getByLabel('To', {exact: true}).fill('yvr');
          await page.getByRole('option', {name: 'Y V R Vancouver, British Columbia, Canada Vancouver Int.'}).locator('abc-ripple div').click();
          await page.getByLabel('Departure').click();
          await page.locator('#bkmgFlights_travelDates_1-date-2023-05-19').getByText('19', {exact: true}).click();
          await page.locator('#bkmgFlights_travelDates_1-date-2023-05-26').getByText('26', {exact: true}).click();
          await page.locator('#bkmgFlights_travelDates_1_confirmDates').click();
          await page.locator('#bkmgFlights_findButton').click();
          await page.locator("#cabinBtnECO20").click();
          await page.locator("div.btn-value").click();
          await page.locator("button#abcButtonElement24");
          await page.locator("button#flight-details-popup-0");                    
      } catch (e) {
          console.log(e);
      }
  });
}); 