$(function(){
    
    var carousel = $("#carousel");
    var carouselSlides = carousel.find("ul");
    
    var sliderWidth = 1200;
    var sliderHeight = 700;
    
    carousel.width(sliderWidth);
    carouselSlides.find("li").width(sliderWidth);
    
    carouselSlides.find("li").each(function() {
        console.log("hello")
        carousel.find(".bottom_menu").append("<li></li>");
        
    });
    
    var dots = carousel.find(".bottom_menu li");
    dots.first().addClass("active");
    
    dots.click(function(){
         // $(this).index();
        console.log('1');
    });

  
});

