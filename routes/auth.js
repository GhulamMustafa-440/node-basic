const express = require('express')
const router = express.Router()
const Users = require('../models/User')


router.get('/user', async (req, res) => {

    const users = await Users.find()

    res.send({ message: 'Successfully Registered', data: users })
})

router.post('/register', async (req, res) => {
    const data = req.body
    const user = new Users(data) 
    await user.save()

    res.send({ message: 'Successfully Registered' })
})

router.post('/login', async (req, res) => {
    const data = req.body

    // Check if user exists
    const userExists = await Users.findOne({ email: data.email })

    if (!userExists) {
        return res.send({ message: 'No such user exists' })
    }

    //Check password if it's correct
    const isPwdCorrect = userExists.comparePassword(data.password)

    if(!isPwdCorrect) {
        return res.send({ message: 'Invalid password' })
    }

    // Generate Token

  const token = await userExists.generateToken()

  res.send({message: 'Logged in successfully', token})
})

module.exports = router


'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…5MjZ9.cUn27oBHZ2jb0bjTmTuLklpgOZ4l3UUkKsHB6ezDy1E'