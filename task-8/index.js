$(document).ready(function() {
    $('.click').on('click', function(){
        console.log('touch');
        $('.element').toggleClass('show hide');
    });
});