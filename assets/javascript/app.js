$("#start").on("click", run);
var intervalId;
var number = 60;

function run() {
    intervalId = setInterval(decrement, 1000);
    $("#start").addClass("hidden");
    $(".questionBoard").removeClass("hidden");
}

//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;

    //  Show the number in the #timer tag.
    $("#timer").html("<h5>" + "Time Left: 00:" + number + "</h5>");


    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
        checkValues();
    }
}

function stop() {
    clearInterval(intervalId);
};
$("#submit").on('click', function () {
    checkValues();
});

function checkValues() {
    var answer1 = $('input[name="im"]:checked').val();
    var answer2 = $('input[name="backstreet"]:checked').val();
    var answer3 = $('input[name="nsync"]:checked').val();
    var answer4 = $('input[name="christina"]:checked').val();
    var answer5 = $('input[name="queenb"]:checked').val();
    var answer6 = $('input[name="store"]:checked').val();
    var answer7 = $('input[name="fun"]:checked').val();
    var total = 0;
    $("#start").addClass("hidden");
    $("#submit").addClass("hidden");
    $(".questionBoard").addClass("hidden");
    $(".results").removeClass("hidden");
    if (answer1 === "aim") {
        total += 1;
    }
    if (answer2 === "backstreet") {
        total += 1;
    }
    if (answer3 === "nsync") {
        total += 1;
    }
    if (answer4 === "genieinabottle") {
        total += 1;
    }
    if (answer5 === "destinyschild") {
        total += 1;
    }
    if (answer6 === "both") {
        total += 1;
    }
    if (answer7 === "celebrationstation") {
        total += 1;
    }
    $(".results").html("<h4>" + "You Scored: " + Math.round((total / 7) * 10000) / 100 + "%" + " (" + total + "/7)" + "</h4>");
    $("#timer").addClass("hidden");
    $(".results").append("You finished with " + number + " seconds remaining!");
    stop();
    $("#play-again").removeClass("hidden");
};

$("#play-again").on("click", function () {
    location.reload();
});

