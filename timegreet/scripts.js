var timeColour = {
    "night": "black",
    "morning": "pink",
    "day": "yellow",
    "afternoon": "lightblue",
    "evening": "blue"
}

function processTime (hour) {
    timeofday = timeOfDay(hour);
    document.getElementById("timeofday").innerHTML = timeofday;
    document.getElementById("pic").innerHTML = '<img src="images/' + timeofday + '.jpg" alt="">';
    document.body.style.backgroundColor = timeColour[timeofday];
}

function timeOfDay(hour) {
    if (hour <= 6) {
        period = "night";
    } else if (hour <= 10 ) {
        period = "morning";
    } else if (hour <= 14 ) {
        period = "day";
    } else if (hour <= 17 ) {
        period = "afternoon";
    } else if (hour <= 20 ) {
        period = "evening";
    } else {
        period = "night";
    }

    return period;
}

processTime(new Date().getHours());