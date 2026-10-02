import { test, expect } from "../fixtures/BaseTest";

test("Booking the room e2e test", async ({ page, landingPage }) => {
    await page.goto("https://automationintesting.online/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Restful/);
    await landingPage.selectRoomType("Single");
    await landingPage.reserveNowButton.click();

    await page.waitForTimeout(2000);
});
