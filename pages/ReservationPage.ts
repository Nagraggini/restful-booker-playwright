import { Locator, Page } from "@playwright/test";
export class ReservationPage {
    readonly page: Page;

    readonly reserveNowButton: Locator;

    readonly firstnameInput: Locator;
    readonly lastnameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;

    readonly bookingConfirmedLabel: Locator;

    constructor(page: Page) {
        this.page = page;

        this.reserveNowButton = page.locator(
            "//button[normalize-space()='Reserve Now']",
        );
        this.firstnameInput = page.locator("//input[@placeholder='Firstname']");
        this.lastnameInput = page.locator("//input[@placeholder='Lastname']");

        this.emailInput = page.locator("//input[@placeholder='Email']");
        this.phoneInput = page.locator("//input[@placeholder='Phone']");

        this.bookingConfirmedLabel = page.locator(
            "//h2[normalize-space()='Booking Confirmed']",
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

    public async fillTheFormAndBookingNow(
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
    ) {
        await this.page.waitForTimeout(3000);
        await this.firstnameInput.fill(firstName);
        await this.lastnameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.page.waitForTimeout(3000);
        await this.reserveNowButton.click();
    }
}
