import { test as baseTest, expect } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';
import { AuthModalComponent } from '../components/AuthModalComponent';

type fixtures = {
    header: HeaderComponent;
    authModal: AuthModalComponent;
};  

export const test = baseTest.extend<fixtures>({
    header: async ({ page }, use) => {
        const header = new HeaderComponent(page);
        await use(header);
    },
    authModal: async ({ page }, use) => {
        const authModal = new AuthModalComponent(page);
        await use(authModal);
    }   
});

export { expect };
