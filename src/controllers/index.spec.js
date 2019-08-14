const chai = require('chai'),
    expect = chai.expect
const controller = require('./index')
const reqres = require('../_mock/mock-req-res')

describe('From index controller', () => {
    it("should return sucess if file is found", async () => {
        let requestResponse = reqres.getRequestResponse()
        let result = await controller.get(requestResponse.req, requestResponse.res, () => {})
        expect(result.statusCode).to.be.equals(200)
        expect(result.data).to.have.length
    })
});