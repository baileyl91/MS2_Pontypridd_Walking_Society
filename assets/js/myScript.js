
    var time = new Date().getHours();
    var greet;

    if (time < 12) {
        greet = "Good Morning!";
    } else if (time > 18) {
        greet = "Good Evening!";
    } else {
        greet = "Good Afternoon!";
    }

    document.getElementById("greeting").innerHTML = 'Hello and ' + greet;


