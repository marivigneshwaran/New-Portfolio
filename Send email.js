function sendmail()
{
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_9hpoo8f","template_s5ns6h7",params).then(alert("Email send successfully !!"))
}