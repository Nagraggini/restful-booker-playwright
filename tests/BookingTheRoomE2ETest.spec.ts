import { test, expect } from "../fixtures/BaseTest";

test("Booking the room e2e test", async ({
    page,
    landingPage,
    reservationPage,
}) => {
    test.slow();
    await page.goto("https://automationintesting.online/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Restful/);
    await reservationPage.selectRoomType("Single");
    await page.waitForTimeout(3000);
    await reservationPage.reserveNowButton.click();
    await reservationPage.fillTheFormAndBookingNow(
        "Jane",
        "Doe",
        "emailtesttest@email.com",
        "+36123456789",
    );

    await expect(reservationPage.bookingConfirmedLabel).toBeVisible();
    await page.waitForTimeout(2000);
});
