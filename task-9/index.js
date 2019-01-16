$(document).ready(function() {
    var count = Math.floor(Math.random() * 100) + 10; 
    var container = $('.container');

    // create elements
    for (var i = 0; i < count; i++) {
        var element = '<span>' + i + '</span>';
        container.append(element);
    }

    // add color elements
    $('.container span').map(function(i, element){
        var background = `rgb(${ Math.random() * 255 }, ${ Math.random() * 255 }, ${ Math.random() * 255 })`;
        $(element).css('background', background);
    });
});
