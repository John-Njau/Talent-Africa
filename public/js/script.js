// Reset form input after submit
$(document).ready(function (){
    $("#submitBtn").click(
        document.getElementById("contactForm").reset());
})