const serverSecret = require('../config/jwt')
const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    console.log(req.headers.authorization)

    // check if token exists
    let token = req.headers.authorization
    if (!token) {
        return res.send({ message: 'Unable to access' })
    }

    token = token.slice(7)

    jwt.verify(token, serverSecret, (err, decoded) => {
        if(err) {
            res.send({message: 'Invalid token'})
        } else {
            console.log('decoded', decoded)
            req.decoded = decoded
            next()
        }
    })

}

module.exports = verifyToken