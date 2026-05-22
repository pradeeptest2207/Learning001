import{test,expect} from '@playwright/test';

test.describe ('checkout chanllence',()=>{
test.use({storageState:'.auth/customer.json'});

test.beforeEach(async ({page})=>{
    await page.goto('https://practicesoftwaretesting.com/');
});

test('buy now pay later',async ({page})=>{

})
