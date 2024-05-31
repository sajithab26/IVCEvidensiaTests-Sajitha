import {test, expect} from '@playwright/test'
import {NavigateToTestLoginPage} from './pageObjects/navigateToTestLoginPage'
import {LoginPage} from './pageObjects/loginPage'

const testData = require('./users.json');

test.beforeEach('navigateToTestLoginPage', async({page}) =>{
    const navigateTo = new NavigateToTestLoginPage(page)
    await navigateTo.TestLoginPage()
   })

test('loginWithValidCredential', async({page}) => {

    const loginPage = new LoginPage(page)
    await loginPage.fillLoginCredentials('student','Password123')     
    await expect(loginPage.successfullMessagetitle).toContainText("Logged In Successfully")
    await expect(loginPage.successmessagetext).toContainText("Congratulations student. You successfully logged in!")
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')    
})

test.describe('loginWithInvalidUsername', () => {
    testData.forEach(data => {
        test(`loginWithUsername: ${data.username}, ${data.password}`, async({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.fillLoginCredentials(data.username,data.password) 
        await expect(loginPage.errorMessage).toContainText("Your username is invalid!")
        })      
    })
})

test('loginWithInValidPassword', async({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.fillLoginCredentials('student','incorrectPassword') 
    await expect(loginPage.errorMessage).toContainText("Your password is invalid!")      
})

test('loginWithoutCredentials', async({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.fillLoginCredentials('','') 
    await expect(loginPage.errorMessage).toContainText("Your username is invalid!")
    
})

 test.afterEach('exitBrowser', async({page}) =>{    
    await page.close()
})
