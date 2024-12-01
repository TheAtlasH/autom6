import puppeteer from "puppeteer-core";

async function main(){
  const browser = await puppeteer.launch({
 executablePath: '/usr/bin/chromium-browser'
  })
  const page = await browser.newPage()
  await page.goto('https://gkeyboardchecker.com'),{
    timeout: 60 * 1000, waitUntill: 'networkidle0'}
  await page.keyboard.down('a')
}
main();