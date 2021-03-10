const results = []
const axios = require('axios')

const userNumberInput = document.getElementById('userNumberInput')
const countDownInput = document.getElementById('countDownInput')
const submitButton = document.getElementById('button')
const main_section_selectOption = document.getElementById('main_section_selectOptions')
const main_section_eventRunning = document.getElementById('main_section_eventRunning')
const main_section_eventResults = document.getElementById('main_section_eventResults')
const user_list_div = document.getElementById('user_list_div')
var time = document.getElementById('time')
const resetButton = document.getElementById('resetButton')


const io = require("socket.io-client");
let userAuth;
const URL = `${location.protocol}//localhost:5000`

var socket = io(URL, { autoConnect: true })

//if user is authorized then send token
window.Twitch.ext.onAuthorized((auth) => {
    userAuth = { token: auth.token }
    socket = io(URL, { autoConnect: true, auth: userAuth })
})

const startCountDown = () => {
    time.innerHTML = countDownInput.value
    const interval = setInterval(() => {
    time.innerHTML -= 1
        if (time.innerHTML === "0") {
            clearInterval(interval)
        }
    }, 1000)
}

socket.on('startCountDown', () => {
    main_section_selectOption.style.display = "none"
    main_section_eventRunning.style.display = "initial"
    startCountDown()
})

socket.on('stopEvent', (userList) => {
    main_section_eventRunning.style.display = "none"
    main_section_eventResults.style.display = "initial"
    userList.forEach(element => {
        const newEl = document.createElement('h3')
        newEl.setAttribute('class', 'listElement')
        newEl.innerHTML += element
        user_list_div.appendChild(newEl)
    });
})


submitButton.addEventListener('click', () => socket.emit('startEvent', countDownInput.value, userNumberInput.value))
resetButton.addEventListener('click', () => {
    user_list_div.innerHTML = ''
    main_section_eventResults.style.display = 'none'
    main_section_selectOption.style.display = 'initial'
    socket.emit('reset')


})