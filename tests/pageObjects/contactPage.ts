
import {Locator, Page } from "@playwright/test";

export class ContactPage {

    readonly page : Page
    readonly message : Locator
    readonly submit : Locator
    readonly errormessage : Locator


    constructor(page : Page)
    {
      this.page=page
      this.message = page.locator('.post-title') 
      this.submit = page.locator('#wpforms-submit-161')   
      this.errormessage = page.locator('#wpforms-161-field_2-error')    
    }

    async contactPageLink(){

      await this.page.goto('https://practicetestautomation.com/contact/')
      this.page.getByRole('link', { name: 'Contact', exact: true })
    
    }
    async submitWithNoInformation(){

      await this.submit.click()
    }


}