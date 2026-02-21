import {test, expect} from '@playwright/test';

test('verify login page', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/');
    await page.getByRole('link', {name: 'Log in'}).waitFor();
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.pause()
}
);

test()