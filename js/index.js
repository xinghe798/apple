$(function(){
    $(".search").on("click",function(){
        $(".yincang").addClass("searching");
        $(".search-box-inner").addClass("searching");
        $(".search-box").addClass("searching");
        $(".search-box-list").addClass("searching");
    })
    $(".bag").on("click",function(){
        $(".yincang").removeClass("searching");
        $(".search-box-inner").removeClass("searching");
        $(".search-box").removeClass("searching");
        $(".search-box-list").removeClass("searching");
    })
    var slides=$(".carousel-inner a");
    var carousel=$(".carousel");
    var dots=$(".dot-nav .dot");
    var flag=false;
    carousel.on("mouseenter",function(){
        clearInterval(t);
    })
    carousel.on("mouseleave",function(){
        t=setInterval(moveRight,2000);
    })
    moveTo=function(el,dir){
        flag=true;
        if(dir==="left"){
            slides.filter(".active").removeClass("active").addClass("enter").delay(500).queue(function(){
                flag=false;
                $(this).removeClass("enter").dequeue();
            })
            $(el).addClass("left");
            $(el).get(0).offsetWidth;
            $(el).removeClass("left").addClass("active");
        }
        if(dir==="right"){
            slides.filter(".active").removeClass("active").addClass("leave").delay(500).queue(function(){
                flag=false;
                $(this).removeClass("leave").dequeue();
            })
            $(el).addClass("right");
            $(el).get(0).offsetWidth;
            $(el).removeClass("right").addClass("active");
        }
        dots.removeClass("active").eq(slides.index(el)).addClass("active");
    }
    var moveRight=function(){
        if(flag)return;
        var active=slides.filter(".active");
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,"right");
    }
    var moveLeft=function(){
        if(flag)return;
        var active=slides.filter(".active");
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,"left");
    }
    dots.on("click",function(){
        if(flag)return;
        var now=slides.filter(".active").index();
        var next=$(this).index();
        if(now===next){
            return;
        }
        if(now>next){
            var el=slides.eq(next);
            moveTo(el,"left");
        }else{
            var el=slides.eq(next);
            moveTo(el,"right");
        }
    })
    var t=setInterval(moveRight,2000);
})