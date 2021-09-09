
// Greeting Script
/* This script gather the time of the day where the user is
    and reply a message depending on the time of the day 
    Use the support from 'Javascript and jQuery' book by Jon Duckett */

    // Get time
    var time = new Date().getHours();
    var greet;

    // If time is under 12, then reply 'Good Morning'
    if (time < 12) {
        greet = "Good Morning!";
    } 
    // If time is greater than 18, then reply 'Good Evening'
    else if (time > 18) {
        greet = "Good Evening!";
    } 
    // Otherwise reply 'Good Afternoon'
    else {
        greet = "Good Afternoon!";
    }

    // Send a message to id 'greeting' in home page
    document.getElementById("greeting").innerHTML = 'Hello and ' + greet;

    /* Gallery Slideshow
        Using the support of W3 Schools Tutorial
        https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp  */

    // Variable to store images
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Create a function to iterate through images
    function showSlides(n) {
    var i;
    var photos = document.getElementsByClassName("photo");
    
    if (n > photos.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = photos.length}
    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";  
    }
    
    photos[slideIndex-1].style.display = "block";  
    
    }