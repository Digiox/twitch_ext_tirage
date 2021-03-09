const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: `http://localhost:1234`,
        methods: ["GET", "POST"]
    }
})
const port = 5000
const secret = Buffer.from("6bv++5OxqmF62JrcmBUSK61+4eYY268osxkK3i/n5VM=", "base64")
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/db", { useNewUrlParser: true, useUnifiedTopology: true }).then(res => console.log('connection successful')).catch(err => console.error(err))
var drawConfig;
const user = mongoose.model('viewer', {
    nickname: String
})

//set headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

const getPayload = (socket) => {
    try {
        console.log(socket.handshake.auth)
        return payload = jwt.verify(socket.handshake.auth.token, secret, { algorithms: ['HS256'] })
    } catch (error) {
        console.error(error)
        return
    }
}
const checkIfBroadCaster = (socket) => {
    if (getPayload(socket).role === "broadcaster") {
        return true
    }
}

const sortUsers = (socket, n) => {

    user.find({}).then((users) => {
        const tempArrayOfUsers = users.map(el => el.nickname)
        const length = tempArrayOfUsers.length
        var number = n
        if (n > length) {
            number = length
        }
        const finalArray = []
        for (let i = 0; i < number; i++) {
            const val = tempArrayOfUsers[Math.floor(Math.random() * length)]
            if (!finalArray.find(el => el === val)) {
                finalArray.push(val)
            }
            else {
                i--
            }
        }
        io.emit("stopEvent", finalArray)
    })
}

const countDown = (socket, eventTime, numberOfUsers) => {
    if (checkIfBroadCaster(socket) === true) {
        io.emit("startCountDown", eventTime)
        var time = parseInt(eventTime)
        const interval = setInterval(() => {
            time = time -= 1
            if (time === 0) {
                clearInterval(interval)
                io.emit('eventEnded')
                sortUsers(socket, numberOfUsers)
            }
        }, 1000)
        console.log("start")
    }
}

io.on('connection', (socket) => {
    console.log('new user')
    if (socket.handshake.auth.token) {
        console.log(socket.handshake.auth.token)
        var payload = getPayload(socket)
        if (payload) {
            console.log(payload)
            if (payload.role === 'broadcaster') {
                console.log('Broadcaster user is logged')
            } else {
                console.log('not broadcaster')
                socket.emit("response", "not autorized")
            }
        }
    }

    socket.on('startEvent', (eventTime, numberOfusers) => {
        console.log('start event received')
        countDown(socket, eventTime, numberOfusers)
    })

    socket.on('newUser', (username) => {
        const data = new user({nickname: username})
        data.save((err) => { 
            if (err) return console.error(err)
            console.log('data saved')
        })
    })

    socket.on('reset', () => {
        io.emit('reset')
        user.deleteMany({}, () => {
            console.log('user table dropped')
        })
    })

})






http.listen(port, () => {
    console.log(`The bridge is running ont port: ${port}`)
})