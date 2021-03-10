
//setup socket.io client
const io = require("socket.io-client");
const URL = `${location.protocol}//localhost:5000`
var socket =io(URL, {autoConnect: true})

const submitButton = document.getElementById("submitButton")
const main_section_submitUsername = document.getElementById('main_section_submitUsername')
const main_section_submited = document.getElementById('main_section_submited')
const timeElementSubmit = document.getElementById('dynamic_countdown_submit')
const timeElementSubmited = document.getElementById('dynamic_countdown_submited')
const main_section_waitingForEvent = document.getElementById('main_section_waitingForEvent')
const sendDatas = () => {
    const textInputValue = document.getElementById("inputElement").value
socket.emit('newUser', textInputValue)
main_section_submitUsername.style.display = 'none'
main_section_submited.style.display = 'initial'
}

socket.on('startCountDown', (time) => {
    main_section_waitingForEvent.style.display = 'none'
    main_section_submitUsername.style.display = 'initial'
    timeElementSubmit.innerHTML = time
    timeElementSubmited.innerHTML = time
    const interval = setInterval(() => {
        timeElementSubmit.innerHTML -= 1
        timeElementSubmited.innerHTML -= 1
        if (parseInt(timeElementSubmited.innerHTML) === 0) {
            main_section_submitUsername.style.display = 'none'
            main_section_submited.style.display = 'none'
            main_section_waitingForEvent.style.display = 'initial'
            clearInterval(interval)
        }
    }, 1000)
})




socket.on('reset', () => {
    main_section_submited.style.display = 'none'
    main_section_submitUsername.style.display = 'none'
    main_section_waitingForEvent.style.display = 'initial'
})
submitButton.addEventListener('click', () => sendDatas())