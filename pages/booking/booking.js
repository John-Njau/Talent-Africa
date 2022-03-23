document.getElementById("bookBtn").addEventListener('click', akan)
function akan() {
    // alert("fuckoff")
    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var email = $("#email").val();
    var telNo = $("#number").val();

    if (fname === "" || lname === "" || email === "" || telNo === " ") {
        alert("Fill in your Details")
    }
    else {
        alert("Form submitted. Talent Africa will get back to you shortly on your booking Details.")
        document.getElementById("myForm").reset();
    }
}