const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const register = asyncHandler(async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            mes: 'Missing inputs'
        })
    }
    const response = await Users.create(req.body)
    return res.status(200).json({
        success: response ? true : false,
        response
    })
})

module.exports = { 
    register 
}