import { Locator, Page } from "@playwright/test";
export class LandingPage {
    readonly page: Page;
    readonly checkAvailabilityButton: Locator;
    readonly reserveNowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkAvailabilityButton = page.locator(
            "//button[normalize-space()='Check Availability']",
        );
        this.reserveNowButton = page.locator(
            "//button[normalize-space()='Reserve Now']",
        );
    }
}
