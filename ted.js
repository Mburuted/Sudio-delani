$(document).ready(function() {
    $("#distext").hide()
    $("#design-img").click(function() {
        $("#distext").show(1000);
        $("#design-img").hide(1000);
        $("#distext").click(function() {
            $("#design-img").show(1000)
            $("#distext").hide(1000)
        })

    })

})

$(document).ready(function() {
    $("#devtext").hide()
    $("#dev-img").click(function() {
        $("#devtext").show(1000);
        $("#dev-img").hide(1000);
        $("#devtext").click(function() {
            $("#dev-img").show(1000)
            $("#devtext").hide(1000)
        })
    })
})

$(document).ready(function() {
    $("#prodtext").hide()
    $("#prod-img").click(function() {
        $("#prodtext").show(1000);
        $("#prod-img").hide(1000);
        $("#prodtext").click(function() {
            $("#prod-img").show(1000)
            $("#prodtext").hide(1000)
        })
    })
})

//First Image
$(document).ready(function() {
    $("#fire").hover(function() {
            $(".port-1").css("opacity", 0.9)
            $(".carier-text-1").css("opacity", 1)
        },
        function() {
            $(".port-1").css("opacity", 1)
            $(".carier-text-1").css("opacity", 0)
        })
})

//Second Image
$(document).ready(function() {
    $("#water").hover(function() {
            $(".port-").css("opacity", 0.9)
            $(".carier-text-2").css("opacity", 1)
        },
        function() {
            $(".port-2").css("opacity", 1)
            $(".carier-text-2").css("opacity", 0)
        })
})

//Third Image
$(document).ready(function() {
    $("#air").hover(function() {
            $(".port-3").css("opacity", 0.9)
            $(".carier-text-3").css("opacity", 1)
        },
        function() {
            $(".port-3").css("opacity", 1)
            $(".carier-text-3").css("opacity", 0)
        })
})

//Fourth Image
$(document).ready(function() {
    $("#earth").hover(function() {
            $(".port-4").css("opacity", 0.9)
            $(".carier-text-4").css("opacity", 1)
        },
        function() {
            $(".port-4").css("opacity", 1)
            $(".carier-text-4").css("opacity", 0)
        })
})

//Fifth Image
$(document).ready(function() {
    $("#wind").hover(function() {
            $(".port-5").css("opacity", 0.9)
            $(".carier-text-5").css("opacity", 1)
        },
        function() {
            $(".port-5").css("opacity", 1)
            $(".carier-text-5").css("opacity", 0)
        })
})

//Sixth Image
$(document).ready(function() {
    $("#heat").hover(function() {
            $(".port-6").css("opacity", 0.9)
            $(".carier-text-6").css("opacity", 1)
        },
        function() {
            $(".port-6").css("opacity", 1)
            $(".carier-text-6").css("opacity", 0)
        })
})

//Seventh Image
$(document).ready(function() {
    $("#rock").hover(function() {
            $(".port-7").css("opacity", 0.9)
            $(".carier-text-7").css("opacity", 1)
        },
        function() {
            $(".port-7").css("opacity", 1)
            $(".carier-text-7").css("opacity", 0)
        })
})

//Eighth Image
$(document).ready(function() {
    $("#ocean").hover(function() {
            $(".port-8").css("opacity", 0.9)
            $(".carier-text-8").css("opacity", 1)
        },
        function() {
            $(".port-8").css("opacity", 1)
            $(".carier-text-8").css("opacity", 0)
        })
})

$(document).ready(function() {
    $("#submit").click(function() {
        let name = $("form#name").val();
        let email = $("form#email").val();
        let Textarea = $("form#feedback").val();
        if (name, email, Textarea == '') {
            alert("Fill all spaces")
        } else {
            alert('Hello ${name}!You have quite recently joined the best mailing list ever! Make sure to watch out for ${email} for the best offers from us.');

        }
    })
})