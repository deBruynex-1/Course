var ali= document.getElementsByTagName("li");
var myDate = new Date();
var year = myDate.getFullYear(); 
var month = myDate.getMonth();  
var day = myDate.getDate();  
var div = document.getElementById("m-box");

for(var i = 0;i<=ali.length;i++){
        ali[0].onclick = function(){
                this.style.color = "red";
                alert("You have been clicked 1st lable");
        }
        ali[1].onclick = function(){
                var hd = document.getElementsByTagName("h1");
                for(var i = 0; i < hd.length; i++) {
                        hd[i].textContent = year+"-"+(month+1)+"-"+day;
                }
                alert("You have been clicked 2nd lable");
        }
        ali[2].onclick = function(){
                document.getElementById("li").classList.add("fn-active");
                alert("You have been clicked 3rd lable");
        }       
        ali[3].onclick = function(){
                ali[7].remove();
                alert("You have been clicked 4th lable");
        }
        ali[4].onclick = function(){
                window.open("https://www.taobao.com/");
                alert("You have been clicked 5th lable");
        }
        ali[5].onclick = function(){
                var add = document.createElement("ul");
                var p = document.createElement("li");
                document.body.appendChild(add);
                add.appendChild(p);
                p.innerHTML = "p9";
                alert("You have been clicked 6th lable");
        }      
        ali[6].onclick = function(){
                div.style.width = parseInt(getStyle(div,"width")) + 20 + "px";
                alert("You have been clicked 7th lable");
        }
}