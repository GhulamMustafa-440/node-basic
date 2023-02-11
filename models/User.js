const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcryptjs = require('bcryptjs')
const serverSecret = require('../config/jwt')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    fullname: String,
    phoneNumber: Number,
    tokens: [String]
})

UserSchema.pre('save', function (next) {
    const user = this

    if (user.isModified('password')) {
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(user.password, salt);

        user.password = hash
    }

    next()

})

UserSchema.methods.comparePassword = function (password) {
    const user = this

    // user.password // encrypted
    // password // decrypted from FE

    return bcryptjs.compareSync(password, user.password)

    // compareSync is an synchrones function so no use await
}

UserSchema.methods.generateToken = async function () {
    const user = this
    const { _id } = user

    const token = jwt.sign({ _id }, serverSecret)
    user.tokens.push(token)
    await user.save()
    return token
    // console.log(token)
}

const Users = mongoose.model('Users', UserSchema)

module.exports = Users

