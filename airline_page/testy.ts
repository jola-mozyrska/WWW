import {Builder, Capabilities, Key} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from 'mocha-webdriver';

const future_date = "2040-12-01";
const old_date = "2000-12-01";

describe('test_accepted_submit', function () {

    it('checks blocked links after submit', async function() {
        this.timeout(20000);
        await driver.get(`file://${process.cwd()}/first.html`);
        const command = `document.querySelector('input[type=date]').value = "` + future_date + `";`;
        driver.executeScript(command);

        await driver.find('input[name=fname]').sendKeys('Albert Einstain');
        await driver.find('select[id=departureslist]').sendKeys('Warszawa', Key.RETURN);
        await driver.find('select[id=arrivals]').sendKeys('London', Key.RETURN);

        expect(await ( driver.find('input[type=submit]')).isEnabled()).to.equal(true);
        driver.find('input[type=submit]').click();
        expect(await driver.find('table_adjust').doClick().then(
            () => true,
            () => false
            )).to.equal(false);
    });
})

describe('test_submit_button_name', function () {

    it('Check submit button is disabled', async function() {
        this.timeout(20000);
        await driver.get(`file://${process.cwd()}/first.html`);

        expect(await driver.find('select[id=departureslist]').getText()).to.include('Warszawa');
        await(await driver.find('input[name=fname]')).sendKeys('Maria Curie');
        expect(await driver.find('input[type=submit]').then(() => true, () => false)).to.equal(true);
        expect(await (await driver.find('input[type=submit]')).isEnabled()).to.equal(false);
    });

});

describe('test_submit_button_without_name', function () {

    it('Check submit button is disabled', async function() {
        this.timeout(20000);
        await driver.get(`file://${process.cwd()}/first.html`);

        await driver.find('select[id=arrivals]').sendKeys('London', Key.RETURN);
        await driver.find('select[id=departureslist]').sendKeys('Warszawa', Key.RETURN);

        expect(await driver.find('input[type=submit]').then(() => true, () => false)).to.equal(true);
        expect(await (await driver.find('input[type=submit]')).isEnabled()).to.equal(false);
    });

});

describe('test_blocked_links', function () {

    it('checks blocked links after submit', async function() {
        this.timeout(20000);
        await driver.get(`file://${process.cwd()}/first.html`);
        const command = `document.querySelector('input[type=date]').value = "` + future_date + `";`;
        driver.executeScript(command);

        await driver.find('input[name=fname]').sendKeys('Albert Einstain');
        await driver.find('select[id=departureslist]').sendKeys('Warszawa', Key.RETURN);
        await driver.find('select[id=arrivals]').sendKeys('London', Key.RETURN);

        expect(await ( driver.find('input[type=submit]')).isEnabled()).to.equal(true);
        driver.find('input[type=submit]').click();
        expect(await driver.find('table_adjust').doClick().then(
            () => true,
            () => false
            )).to.equal(false);
    });
})