function price(){
    var num=document.getElementsByName("num");
    var priceNow=document.getElementsByName("priceNow");
    var priceAll=document.getElementsByName("priceAll");
    var sum = document.getElementById("sum");
    for(var i=0;i<priceAll.length;i++){
        priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
        sum.innerHTML=1*sum.innerHTML+1*priceAll[i].innerHTML;
    }
}