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
  





