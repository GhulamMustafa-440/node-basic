const express = require('express')
const router = express.Router()

const chats = [
    {
        userName: 'GhulamMustafa',
        friends: [{
            friendName: 'Omer',
            userMessage: ['Assalamualikum', 'kesa ho bhai', 'chal ab nikal'],
            friendMessage: ['Walikumassalam', 'thk alhumdulliah', 'to bhi']
        }, {
            friendName: 'Akbar',
            userMessage: ['Assalamualikum', 'kesa ho bhai', 'chal ab nikal'],
            friendMessage: ['Walikumassalam', 'thk alhumdulliah', 'to bhi']
        }]
    }, {
        userName: 'Omer',
        friends: [{
            friendName: 'GhulamMustafa',
            userMessage: ['Assalamualikum', 'kesa ho bhai', 'chal ab nikal'],
            friendMessage: ['Walikumassalam', 'thk alhumdulliah', 'to bhi']
        }, {
            friendName: 'Akbar',
            userMessage: ['Assalamualikum', 'kesa ho bhai', 'chal ab nikal'],
            friendMessage: ['Walikumassalam', 'thk alhumdulliah', 'to bhi']
        }]  
    }
]

router.get('/getMessages', (req, res) => {
    // get message from database

    res.send({ message: 'success', data: chats })
})

router.post('/sendMessage', (req, res) => {
    // post message from database

    res.send({ message: 'success', data: chats })
})

router.put('/updateMessage', (req, res) => {
    // update message from database

    res.send({ message: 'success', data: chats })
})

router.delete('/deleteMessage', (req, res) => {
    // delete message from database

    res.send({ message: 'success', data: chats })
})

module.exports = router