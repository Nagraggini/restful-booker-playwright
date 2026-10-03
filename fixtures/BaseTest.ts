import { test as base, devices, BrowserContext, Page } from "@playwright/test";
import { LandingPage as LandingPage } from "../pages/LandingPage";
import { ReservationPage as ReservationPage } from "../pages/ReservationPage";

type MyFixtures = {
    context: BrowserContext;
    page: Page;
    landingPage: LandingPage;
    reservationPage: ReservationPage;
};

export const test = base.extend<MyFixtures>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    reservationPage: async ({ page }, use) => {
        await use(new ReservationPage(page));
    },
});

export { expect } from "@playwright/test";

test.afterEach(async ({ context }) => {
    await context.close();
});
