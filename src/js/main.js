$(document).ready(function () {
// statistics counter section
    $('#clients').animationCounter({
        start: 0,
        end: 3800,
        step: 1,
        delay: 100,
    });
    $('#projects').animationCounter({
        start: 0, 
        end: 4510,
        step: 1,
        delay: 200,
    });
    $('#feedback').animationCounter({
        start: 0,
        end: 2800,
        step: 1,
        delay: 300,
    });
    $('#freebies').animationCounter({
        start: 0,
        end: 5500,
        step: 1,
        delay: 400,
    });


    // hamburger toggling
    $(".hamburger").click(function(){

        $(".navigation").toggleClass('toggleNav');

        $(".hamburger-bar").toggleClass("activate",2000);

    });

    //change hamburger color
    $('#awareness').waypoint({
        handler: function (direction) {
            $('.hamburger-bar').toggleClass('red')
        }
    })

});