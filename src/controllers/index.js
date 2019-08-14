//@ts-nocheck
'use-strict';

const httpStatus = require('http-status-codes')
const puppeteer = require('puppeteer')
const fs = require('fs')
const util = require('util')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const post = async (req, res, next) => {
    const writeStream = fs.createWriteStream('./output.txt')
    try {
        writeStream.write("***************** REQUESTED AUTOMATION SCRIPT ***************** ")

        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()

        writeStream.write("\n- Commands executed: ")
        writeStream.write("\n---> page.goto('https://google.com.br') ")
        await page.goto('https://google.com.br')

        writeStream.write("\n---> page.focus('input.gLFyf.gsfi') ")
        await page.focus('input.gLFyf.gsfi')

        writeStream.write('\n---> page.keyboard.type("spring statemachine")')
        await page.keyboard.type("spring statemachine")

        writeStream.write('\n---> page.keyboard.press("Enter")')
        await page.keyboard.press('Enter')

        return res.status(httpStatus.OK).send({
            msg: "Script executed"
        })
    } catch (error) {
        writeStream.write('\n\n Error executing script \n\t\t' + error)
        writeStream.write("\n\n ***************** AUTOMATION SCRIPT FINISHED***************** ")
        writeStream.close()
    } finally {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            msg: "Failed to execute script"
        })
    }
}

const get = async (req, res, next) => {
    const fileOutput = await readOutput('./output.txt')
        .then(data => data)
        .catch(e => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                msg: e.getMessage()
            })
        })
    return res.status(httpStatus.OK).send(fileOutput)
}

async function readOutput(path) {
    const readFileSync = util.promisify(fs.readFile)
    return await readFileSync(path)
}

module.exports = {
    post,
    get
}