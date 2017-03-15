$(function(){
    
	var carouselList = $("#carousel ul"),
        iconLeft = $("js-left"),
        iconRight = $("js-right"); 

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");  
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
}
    
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
    }
    
     iconLeft.click(function() {
        moveLastSlide();
    });

    iconRight.click(function() {
        moveFirstSlide();
    });
    
    function changeSlide() {
        carouselList.animate({'marginLeft':-700}, 500, moveFirstSlide);
}
    
    setInterval(changeSlide, 3000);

  


});

