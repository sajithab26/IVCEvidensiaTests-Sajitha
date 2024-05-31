import {test, expect} from '@playwright/test'
import {NavigateToPracticePage} from './pageObjects/navigateToPracticePage'

test('navigateToPracticePage', async({page}) => {

    const navigateToPractice = new NavigateToPracticePage(page)
    await navigateToPractice.PracticePage()
    await expect(navigateToPractice.message).toContainText('Practice')
})

 test.afterEach('exitBrowser', async({page}) =>{    
    await page.close()
})
