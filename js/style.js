/*下滑淡出淡入*/
$(document).ready(function () {
    $("#bl").click(function () {
        $("#dis").slideToggle("slow")
    });
});
/*模态框点击背景不关闭*/
$("#dd").modal({
    backdrop:'static',
    keyboard:false
});
$("#qq").modal({
    backdrop:'static',
    keyboard:false
});


/*手机滑动*/
var mySwiper = new Swiper('.row-1',{
    freeMode : true,
    loop:true,
})