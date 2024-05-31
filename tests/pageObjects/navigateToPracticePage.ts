
import {Locator, Page } from "@playwright/test";

export class NavigateToPracticePage {

    readonly page : Page
    readonly message : Locator

    constructor(page : Page)
    {
      this.page=page
      this.message = page.locator('.post-title')      

    }

    async PracticePage(){

      await this.page.goto('https://practicetestautomation.com/practice/')
      this.page.getByRole('link', { name: 'Practice', exact: true })
      
    }
}