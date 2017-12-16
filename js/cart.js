function selectall(){
    var inputChebox=document.getElementsByName("check");
    for(var i=0;i<inputChebox.length;i++){
        if(inputChebox[i].checked==false){
            inputChebox[i].checked=true;
        }
        else if(inputChebox[i].checked==true){
            inputChebox[i].checked=false;
        }
        
    }
}

window.onload=function price(){
    var num=document.getElementsByName("num");
    var priceNow=document.getElementsByName("priceNow");
    var priceAll=document.getElementsByName("priceAll");
    var sum = document.getElementById("sum");
    for(var i=0;i<priceAll.length;i++){
        priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
        sum.innerHTML=1*sum.innerHTML+1*priceAll[i].innerHTML;
    }

}


function add1(){
    var num = document.getElementById("num1");
    num.innerHTML=1+1*num.innerHTML;
    var num=document.getElementsByName("num");
    var priceNow=document.getElementsByName("priceNow");
    var priceAll=document.getElementsByName("priceAll");
    for(var i=0;i<priceAll.length;i++){
        priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
        sum.innerHTML=1*sum.innerHTML+1*priceAll[i].innerHTML;
    }

}
function min1(){
    var num = document.getElementById("num1");
    if(num.innerHTML>1){
        num.innerHTML=num.innerHTML-1;
        var num=document.getElementsByName("num");
        var priceNow=document.getElementsByName("priceNow");
        var priceAll=document.getElementsByName("priceAll");
        for(var i=0;i<priceAll.length;i++){
            priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
            sum.innerHTML=1*sum.innerHTML-1*priceAll[i].innerHTML;
        }
    }

    
}

function add2(){
    var num = document.getElementById("num2");
    num.innerHTML=1+1*num.innerHTML;
    var num=document.getElementsByName("num");
    var priceNow=document.getElementsByName("priceNow");
    var priceAll=document.getElementsByName("priceAll");
    for(var i=0;i<priceAll.length;i++){
        priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
        sum.innerHTML=1*sum.innerHTML+1*priceAll[i].innerHTML;
    }
}
function min2(){
    var num = document.getElementById("num2");
    if(num.innerHTML>1){
        num.innerHTML=num.innerHTML-1;
        var num=document.getElementsByName("num");
        var priceNow=document.getElementsByName("priceNow");
        var priceAll=document.getElementsByName("priceAll");
        for(var i=0;i<priceAll.length;i++){
            priceAll[i].innerHTML=num[i].innerHTML*priceNow[i].innerHTML;
            sum.innerHTML=1*sum.innerHTML-1*priceAll[i].innerHTML;
        }
    }
    
}