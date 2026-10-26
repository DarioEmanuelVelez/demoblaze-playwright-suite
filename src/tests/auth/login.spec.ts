import { test, expect } from '../../fixtures/testOptions';

test.describe('Login', () => {
    test('should login successfully with valid credentials', async ({ page, header, authModal }) => {
        await page.goto('/');
        await header.openLoginModal();


        await authModal.login('dario_qa_2026', 'Password123!');
        await expect(header.userGreeting).toHaveText('Welcome dario_qa_2026');
    });
});