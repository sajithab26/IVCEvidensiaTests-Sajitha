
import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page
    readonly username : Locator
    readonly password : Locator
    readonly submit : Locator
    readonly successfullMessagetitle : Locator
    readonly errorMessage : Locator
    readonly successmessagetext : Locator

    constructor(page : Page)
    {
      this.page = page 
      this.username = page.locator('#username')      
      this.password = page.locator('#password')      
      this.submit = page.locator('#submit')
      this.successfullMessagetitle = page.locator('.post-title')      
      this.errorMessage = page.locator('#error')     
      this.successmessagetext = page.locator('.post-content')
    }
    async fillLoginCredentials(username: string, password : string){
    await this.username.fill(username)  
    await this.password.fill(password)
    await this.submit.click()
    } 


}