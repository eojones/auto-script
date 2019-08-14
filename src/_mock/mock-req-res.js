//@ts-nocheck
const getRequestResponse = () => {
    let res = {
        data: '',
        statusCode: 0
    }
    res.status = (statusCode) => {
        res.statusCode = statusCode
        return res
    }
    res.send = (sendObject) => {
        res.data = sendObject
        return res
    }
    res.json = (jsonObject) => {
        res.json = jsonObject
        return res
    }

    let req = {}
    return {
        req,
        res
    }
}
module.exports = {
    getRequestResponse
}