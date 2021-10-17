var todaysDate = moment () . format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().alert("id");

        localStorage.setItem(time, text);

    })

    function timeTracker() {
        var timeNow = moment ().hour();
        
    }
})