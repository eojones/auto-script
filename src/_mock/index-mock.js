const proxyquire = require('proxyquire')

const mockController = () => {
    return proxyquire('../controllers/index')
}

exports.mockController = mockController;