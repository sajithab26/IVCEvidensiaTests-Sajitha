import {test, expect} from '@playwright/test'
import {ContactPage } from './pageObjects/contactPage'

test.beforeEach('contactPage', async({page}) => {

    const navigateToContact = new ContactPage(page)
    await navigateToContact.contactPageLink()
    await expect(navigateToContact.message).toContainText('Contact')
})

test('submitWithNoDetails', async({page}) => {

    const contactPage = new ContactPage(page)
    await contactPage.submitWithNoInformation()
    await expect(contactPage.errormessage).toContainText('This field is required.')
})

 test.afterEach('exitBrowser', async({page}) =>{    
    await page.close()
})

