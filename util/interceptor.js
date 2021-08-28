module.exports = {
    mockRequest: (data) => {
        const req = data
        req.body = jest.fn().mockReturnValue(req)
        return req
    },

    mockResponse: () => {
        const res = {}
        res.send = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
    },
     mockNext: () => jest.fn()
}
