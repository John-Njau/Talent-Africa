$(document).ready(function () {
    $("#submit").submit(function () {
      var firstnameInput = $("input#firstname").val();
      var lastnameInput = $("input#lastname").val();
      var numberInput = $("input#number").val();
      var emailInput = $("input#email").val();
      var password1Input = $("input#password1").val();
      var password2Input = $("input#password2").val();
  
      if (firstnameInput === "" && lastnameInput === "" && numberInput === "") {
        alert("Kindly enter your details");
      } else if (password1Input === "" && password2Input === "") {
        alert("Kindly enter your password");
      } else if (password1Input != password2Input) {
        alert("Password do not match");
      } else {
        window.location.assign("./../../index.html");
      }
    });
  });
  




<<<<<<< HEAD

=======
// $(document).ready(function () {
//   $("#submit").submit(function () {
//     var firstnameInput = $("input#firstname").val();
//     var lastnameInput = $("input#lastname").val();
//     var numberInput = $("input#number").val();
//     var emailInput = $("input#email").val();
//     var password1Input = $("input#password1").val();
//     var password2Input = $("input#password2").val();

//     if (firstnameInput === "" && lastnameInput === "" && numberInput === "") {
//       alert("Kindly enter your details");
//     } else if (password1Input === "" && password2Input === "") {
//       alert("Kindly enter your password");
//     } else if (password1Input != password2Input) {
//       alert("Password do not match");
//     } else {
//       window.location.assign("./../../index.html");
//     }
//   });
// });


// $().ready(function () {
//   $("#submit").click(function () {
//     var email = $("#email").val();
//     var password = $("password1").val();

//     if (email != "" && password != "") {
//       window.location.reload();
//     }
//     else {
//       alert("alert");
//     }
//   });
//   $("#signupBtn").click(function(){
//     var firstnameInput = $("input#firstname").val();
//     var lastnameInput = $("input#lastname").val();
//     var numberInput = $("input#number").val();
//     var emailInput = $("input#email").val();
//     var password1Input = $("input#password1").val();
//     var password2Input = $("input#password2").val();
//     alert("aiyee")
//   })
// });

document.getElementById("signupBtn").addEventListener('click', signup)
function signup() {
    alert("fuckoff")
    document.getElementById("signupForm").reset();
    // var fname = $("#firstname").val();
    // var lname = $("#lastname").val();
    // var email = $("#email").val();
    // var password1 = $("#password1").val();
    // var password2 = $("#password2").val();

    // if (fname === "" || lname === "" || email === "") {
    //     alert("Fill in your Details")
    // }
    // else if (password1 != password2) {
    //     alert("Passwords do not match")
    // }
    // else{
    //   alert("Form submitted. Talent Africa will get back to you shortly on your booking Details.")
    //     document.getElementById("signupForm").reset();
    // }
}
>>>>>>> Development
