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
});
/*控制视频关闭*/
/*首页*/
function out() {
    var out = document.getElementsByTagName('video')[0];
    out.load();
}
/*推荐*/
function tui() {
    var aa = document.getElementsByTagName('video')[1];
    aa.load();
}

/*技术*/
function ji() {
    var aa = document.getElementsByTagName('video')[2];
    aa.load();
}
/*赛事*/
function sai() {
    var aa = document.getElementsByTagName('video')[3];
    aa.load();
}
/*娱乐*/
function yu() {
    var aa = document.getElementsByTagName('video')[4];
    aa.load();
}