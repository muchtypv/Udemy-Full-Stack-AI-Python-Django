$('.box').animate({height: '250px', width: '500px', opacity:1}, 1000);

$('.box').mousedown(function() {$(this).animate({
    left: '300px', 
    top: '400px',
    height: '20px',
    width: '100px'
    },
    1000)
});

$('.box').mouseup(function() {$(this).animate({
    left: '0px', 
    top: '0px',
    height: '250px',
    width: '500px'
    },
    1000)
});