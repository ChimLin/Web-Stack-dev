$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

});

$(document).ready(function(){
    $('[href="#loginModal1"]').click(function(){
        $('#loginModal1').modal('show');
    });
});



$(document).ready(function(){
    $('#launchloginModal2').click(function(){
        $('#loginModal2').modal('show');
    });
});