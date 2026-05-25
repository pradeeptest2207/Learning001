import {test,expect} from '@playwright/test';

test('API get test', async ({request}) => {
    const apiurl = "https://api.practicesoftwaretesting.com";
    const response = await request.get(apiurl + "/products"); 
    expect(response.status()).toBe(200);
    const responseBody = await response.json(); 
    expect(responseBody.data.length).toBe(9);
    expect(responseBody.data[0].name).toBe("Combination Pliers" );
    expect(responseBody.data[0].price).toBe(14.15);
    expect(responseBody.data[1].name).toBe("Pliers");
    expect(responseBody.data[1].price).toBe(12.01);
    expect(responseBody.total).toBe(50);
    expect(responseBody.per_page).toBe(9);
});

test('API post test', async ({request}) => {    
    const apiurl = "https://api.practicesoftwaretesting.com";
   const response = await request.post(apiurl + "/users/login",{
    data: {
        email: "customer3@practicesoftwaretesting.com",
        password: "pass123"
    },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json(); 
      } 
);
