window.onload = function(){

    var lists=document.querySelectorAll(".u-pic")
    for (var i=0;i<lists.length;i++){
        lists[i].onmousedown=function (){
            document.querySelector(".u-box").style.display="block";
        }
    }
    document.querySelector(".u-box").onmousedown=function (){
        this.style.display="none";
    }
}