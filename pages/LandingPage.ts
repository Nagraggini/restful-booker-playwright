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

    /**
     * Click roomType.
     * @param roomType 'Medicare' | 'Medicaid' | 'None'
     */
    public async selectRoomType(
        roomType: "Single" | "Double" | "Suite",
    ): Promise<void> {
        if (roomType === "Single") {
            await this.page
                .locator(
                    "//h5[normalize-space()='" +
                        roomType +
                        "']/../following-sibling::div/a",
                )
                .click();
        } else if (roomType === "Double") {
            await this.page
                .locator(
                    "//h5[normalize-space()='" +
                        roomType +
                        "']/../following-sibling::div/a",
                )
                .click();
        } else if ((roomType = "Suite")) {
            await this.page
                .locator(
                    "//h5[normalize-space()='" +
                        roomType +
                        "']/../following-sibling::div/a",
                )
                .click();
        }
    }
}
