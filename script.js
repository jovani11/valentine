let container = document.getElementById("container")
container.style.height = window.innerHeight + "px"
container.style.width = window.innerWidth + "px"
let yehey = "./yehey.gif"
let sad = "./sad.gif"

function yes() {
    document.getElementById("img").src = yehey
    document.getElementById("sub-c").style.display = "none"
    document.getElementById("text").innerHTML = "Yeheeyyyyyy :)"
    sendMail(document.getElementById("yes").innerHTML)
}
function no() {
    document.getElementById("img").src = sad
        document.getElementById("sub-c").style.display = "none"
        document.getElementById("text").innerHTML = "Ohhhhh :("
        sendMail(document.getElementById("no").innerHTML)
}