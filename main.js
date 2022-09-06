$(document).ready(() => {
    console.log("Doc loaded");

    //listen for click event on gallery imgs
    $(".img-fluid.img-thumbnail").click((event) => {
        // let src = event.target.getAttribute("src");
        let src = $(event.target).attr("src");
        $(event.target).addClass("active");
        loadImg(src);
        showLightbox();
    });

   // listen for next click on lightbox
    $(".lightbox ul li.next").click(() => {
        let current = $(".img-fluid.img-thumbnail.active").get(0);
        let next = $(".img-fluid.img-thumbnail.active").closest(".col-lg-3.col-md-4.col-sm-6").next().find("img.img-fluid.img-thumbnail").get(0);

        if(next == null) {
            next = $(".img-fluid.img-thumbnail").first().get(0);
        }
        
        let nextSrc = next.getAttribute("src");
        loadImg(nextSrc);
        //update active image class
        next.classList.add("active");
        current.classList.remove("active");
    });
    // listen for prev click on lightbox
    $(".lightbox ul li.prev").click(function() {
        let current = $(".img-fluid.img-thumbnail.active").get(0);
        let prev = $(".img-fluid.img-thumbnail.active").closest(".col-lg-3.col-md-4.col-sm-6").prev().find("img.img-fluid.img-thumbnail").get(0);

        if(prev == null) {
            prev = $(".img-fluid.img-thumbnail").last().get(0);
        }
        
        let prevSrc = prev.getAttribute("src");
        loadImg(prevSrc);
        //update active image class
        prev.classList.add("active");
        current.classList.remove("active");
    });


    function loadImg(src){
        $(".lightbox img").attr("src", src);
    };

    function showLightbox(){
        $(".lightbox").css("display","flex");
        setTimeout(() => {
            $(".lightbox").css("opacity", 1);
        },100)
    };

    function hideLightbox(){
        $(".lightbox").css("opacity",0);
        setTimeout(function(){
            $(".lightbox").css("display","none");
        },300)
    };

    $(".lightbox ul").click((event) => {
        event.stopPropagation(); //stop triggering to hideLightbox()
    });

    $(".lightbox img").click(function(event) {
        event.stopPropagation(); //stop triggering to hideLightbox()
    });


    $(".lightbox").click(() => {
        hideLightbox();
    });
});