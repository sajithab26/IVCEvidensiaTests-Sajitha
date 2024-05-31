
import { Page } from "@playwright/test";

export class NavigateToTestLoginPage {

    readonly page : Page

    constructor(page : Page)
    {
      this.page=page
    }

    async TestLoginPage(){

        await this.page.goto('https://practicetestautomation.com/practice-test-login/')

    }
}