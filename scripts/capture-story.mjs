import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const out = 'video-output.local';
await fs.mkdir(`${out}/captures`, {recursive:true});
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:480,height:850},deviceScaleFactor:2});
await page.addInitScript(()=>{localStorage.setItem('cookieConsent','rejected');localStorage.setItem('analyticsConsent','rejected');});
for (const [name, route] of [['home','/'],['plans','/planes'],['clients','/futbolistas'],['challenges','/retos'],['contact','/contacto']]) {
  await page.goto(`http://127.0.0.1:5174${route}`,{waitUntil:'networkidle'});
  await page.waitForTimeout(1400);
  for(let y=0;y<3200;y+=600){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(250);}
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(800);
  await page.screenshot({path:`${out}/captures/${name}.png`,fullPage:true});
  console.log(name,await page.locator('h1').allTextContents());
  if(name==='plans'){
    console.log('Plans',await page.locator('select').first().locator('option').allTextContents());
    await page.locator('select').first().selectOption({index:1});
    await page.waitForTimeout(500);
    await page.screenshot({path:`${out}/captures/strength.png`,fullPage:true});
  }
}
await browser.close();
