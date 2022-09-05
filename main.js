$(document).ready(() => {
    console.log("doc loaded");
    const imgList = $(".col-lg-3.col-md-4.col-sm-6").children(".img-fluid.img-thumbnail");
    console.log(imgList)

    //listen for click event on gallery imgs
    $(".img-fluid.img-thumbnail").click((event) => {
        // let src = event.target.getAttribute("src");
        let src = $(event.target).attr("src");
        $(event.target).addClass("active");
        console.log(src);
        loadImg(src);
        showLightbox();
    });

   // listen for next click on lightbox
    $(".lightbox ul li.next").click(() => {
        let current = $(".img-fluid.img-thumbnail.active").get(0);
        console.log("currentSrc:", current.getAttribute("src"));
        let next = $(".img-fluid.img-thumbnail.active").closest(".col-lg-3.col-md-4.col-sm-6").next().find("img.img-fluid.img-thumbnail").get(0);


        if(next == null) {
            console.log("next:", next, "so we cycle to the first img");
            next = $(".img-fluid.img-thumbnail").first().get(0);
        }else{
            console.log("next:", next);
        }
        
        let nextSrc = next.getAttribute("src");
        console.log("nextSrc:", nextSrc);
        loadImg(nextSrc);
        //update active image class
        next.classList.add("active");
        current.classList.remove("active");
    });
    // listen for prev click on lightbox
    $(".lightbox ul li.prev").click(function() {
        console.log("prev");
        let nextnode = $(".gallery img.active").next();
        let currentnode = $(".gallery img.active");
        let src = $(".gallery img.active").next().attr("src");
        console.log("The next node src is: " + src);
        if(src == null) {
            src = $(".gallery img").last().attr("src");
            nextnode = $(".gallery img").last();
        }
        console.log("The next node src is: " + src);
        loadImg(src);
        //update active image class
        nextnode.addClass("active");
        currentnode.removeClass("active");
    });

    // $(".lightbox ul").click(function(event){});
    // $(".lightbox").click(hideLightbox);

    $(".lightbox").click(function(){
        // $(".gallery img").removeClass("active");
        // hideLightbox();
    });

    function loadImg(src){
        $(".lightbox img").attr("src",src);
    };


    function showLightbox(){
        $(".lightbox").css("display","flex");
        setTimeout(function(){
            $(".lightbox").css("opactity", 1);
        },10)
        console.log("lightbox ON")
    };

    function hideLightbox(){
        $(".lightbox").css("opacity",0);
        setTimeout(function(){
            $(".lightbox").css("display","none");
        },300)
    };
});