$(document).ready(function(){
    var slider = $(".slider");
    var slides = slider.find("ul.slides");

    var sliderWidth = 1600;
    var sliderHeight = 800;
    var intervalTimeSec = 4;

    slider.width(sliderWidth);
    slides.find("li").width(sliderWidth);
    slider.find(".mask").height(sliderHeight);

    slides.find("li").each(function(){
       slider.find("ul.menu").append("<li></li>") ;
    });

    var menu = slider.find("ul.menu li");

    menu.first().addClass("active");

    menu.click(function(){
        if(!$(this).hasClass("active")) {
            target = $(this).index();
            moveSlider(target);
        }
    });

    slider.find(".previous").click(function(){
        target = target = menu.siblings(".active").index();
        target == 0 ? target = menu.length - 1 : target -= 1;
        moveSlider(target);
    });

    slider.find(".next").click(function(){
        target = target = menu.siblings(".active").index();
        target == menu.length - 1 ? target = 0 : target += 1;
        moveSlider(target);
    });

    function moveSlider(target) {
        slides.stop().animate({"left": -sliderWidth * target});
        menu.removeClass("active").eq(target).addClass("active");
        resetInterval();
    }

    slides.css("width", sliderWidth * menu.length );

    function autoMoveSlider() {
        target = menu.siblings(".active").index();
        target == menu.length - 1 ? target = 0 : target += 1;
        moveSlider(target);
    }

    interval = setInterval(function(){autoMoveSlider();}, intervalTimeSec * 1000);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(function(){autoMoveSlider();}, intervalTimeSec * 1000);
    }


});