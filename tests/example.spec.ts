import { test, expect } from "@playwright/test";

test("https://automationintesting.online/", async ({ page }) => {
    await page.goto("https://automationintesting.online/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Restful/);
    await page.waitForTimeout(2000);
});
