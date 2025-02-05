function sendMail(value) {
    var parms = {
        message : value
    }
    emailjs.send("service_gljppwl", "template_x6l6v7t",parms).then(alert("Response has been submitted"))
}
