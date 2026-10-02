import { test as base, devices, BrowserContext, Page } from "@playwright/test";
import { LandingPage as LandingPage } from "../pages/LandingPage";

type MyFixtures = {
    context: BrowserContext;
    page: Page;
    landingPage: LandingPage;
};

export const test = base.extend<MyFixtures>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
});

export { expect } from "@playwright/test";

test.afterEach(async ({ context }) => {
    await context.close();
});
