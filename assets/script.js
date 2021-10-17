var todaysDate = moment () . format('MM/DD/YYYY HH:mm');
$("#currentDay").html(todaysDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function () {
        
        var text = $('.description').text();
        var time = $('id').val()

        localStorage.setItem(text, time);

    })

    function timeTracker() {
        var timeNow = moment ().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime === timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else if (blockTime < timeNow) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");

            }

            else {
                $(this).removeClass("fpresent");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

    }

    // document.getElementById("result").innerHTML=localStorage.getItem("hour8")

    $("#hour8 .description").text(localStorage.getItem("hour8"));
    $("#hour9 .description").text(localStorage.getItem("hour9"));
    $("#hour10 .description").text(localStorage.getItem("hour10"));
    $("#hour11 .description").text(localStorage.getItem("hour11"));
    $("#hour12 .description").text(localStorage.getItem("hour12"));
    $("#hour1 .description").text(localStorage.getItem("hour1"));
    $("#hour2 .description").text(localStorage.getItem("hour2"));
    $("#hour3 .description").text(localStorage.getItem("hour3"));
    $("#hour4 .description").text(localStorage.getItem("hour4"));
    $("#hour5 .description").text(localStorage.getItem("hour5"));

    timeTracker();

})