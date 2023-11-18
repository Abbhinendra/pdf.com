let background1=document.querySelector('.background');
let image=document.querySelector('.img');
let filed=document.querySelector('.file');
let ur=document.querySelector('.url');
img1.addEventListener('click',function(){
    image.style.display="flex";
    filed.style.display="none";
    ur.style.display="none";
})

fil.addEventListener('click',function(){
  filed.style.display="flex";
  image.style.display="none";
  ur.style.display="none";
})

url.addEventListener('click',function(){
ur.style.display="flex";
image.style.display="none";
filed.style.display="none";
})

function imgP(){
let fPdf=document.getElementById('fPdf').files[0];
let f1=document.getElementById('f1');
let reader=new FileReader();

    reader.readAsDataURL(fPdf);
    
   
    reader.onloadend=function(){
        f1.src=reader.result;
    }
    let print =document.querySelector('.print');
    print.style.display="flex";
    mainFirst.style.display="none";
    imgaePdf.style.display="flex";
    background1.style.display="none";
}
btn1.addEventListener('click',function(){
    imgP();
})

function fileP(){
    let innerfile=document.getElementById('innerfile').files[0];
    let inner=document.getElementById('inner');
    let reader=new FileReader();
    reader.readAsText(innerfile)
    reader.onloadend=function(){
    inner.innerHTML=reader.result;
    }
    mainFirst.style.display="none";
    inner.style.display="flex";
    let p2=document.querySelector('.p2');
    p2.style.display="flex";
    background1.style.display="none";

}

btn2.addEventListener('click',function(){
    fileP();
})

print1.addEventListener('click',function(){
    window.print();
})
print2.addEventListener('click',function(){
    window.print();
})
print3.addEventListener('click',function(){
    window.print();
})
function valUrlLast(){
let valUrl=document.getElementById('valUrl').value;
fram.src=valUrl;
mainFirst.style.display="none";
let p3=document.querySelector('.p3');
p3.style.display="flex";
background1.style.display="none";
}

btn3.addEventListener('click',function(){
    if(valUrl.value==0){
        alert("Sorry! Your Url box is empty");
    }
    else{
    valUrlLast();
    }
})

