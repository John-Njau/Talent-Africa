// User Interface Logic
$(document).ready(function () {
    $("#more-ouma").click(function () {
        $("#ouma-slider").show();
        $("#ouma").hide();
        $("#ngugi").hide();
        $("#wamboi").hide();
        $("#anita").hide();
        $("#macharia").hide();
    })

    $("#more-ngugi").click(function () {
        $("#ngugi-slider").show();
        $("#ouma").hide();
        $("#macharia").hide();
        $("#ngugi").hide();
        $("#wamboi").hide();
        $("#anita").hide();
    })

    $("#more-macharia").click(function () {
        $("#luka-slider").show();
        $("#ouma").hide();
        $("#macharia").hide();
        $("#ngugi").hide();
        $("#wamboi").hide();
        $("#anita").hide();
    })

    $("#more-wamboi").click(function () {
        $("#lucy-slider").show();
        $("#ouma").hide();
        $("#macharia").hide();
        $("#ngugi").hide();
        $("#wamboi").hide();
        $("#anita").hide();
        

    })
    $("#more-anita").click(function () {
        $("#anita-slider").show();
        $("#ouma").hide();
        $("#macharia").hide();
        $("#ngugi").hide();
        $("#wamboi").hide();
        $("#anita").hide();
    })
});


