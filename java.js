let name1;
let name2;

function myotherfunc(){
   name1= document.querySelector('.random1').value;
   name2=document.querySelector('.random2').value;
   document.getElementById('change1').innerHTML=name1;
   document.getElementById('change2').innerHTML=name2;
   document.querySelector('.random1').value=""
   document.querySelector('.random2').value=""

}



function myfunc(){
 let randomnum=Math.floor(Math.random()*6)+1;
 let randomnum1=Math.floor(Math.random()*6)+1;

switch(randomnum){
    case 1:
    document.querySelector('.dice .img1').setAttribute("src","dice1.png");
    break;
    case 2:
        document.querySelector('.dice .img1').setAttribute("src","dice2.png");
        break;
    case 3:
        document.querySelector('.dice .img1').setAttribute("src","dice3.png");
        break;
    case 4:
        document.querySelector('.dice .img1').setAttribute("src","dice4.png");
        break;
    case 5:
        document.querySelector('.dice .img1').setAttribute("src","dice5.png");
        break;
    case 6:
        document.querySelector('.dice .img1').setAttribute("src","dice6.png");
        break;
}
switch(randomnum1){
    case 1:
        document.querySelector('.dice .img2').setAttribute("src","dice1.png");
        break;
        case 2:
            document.querySelector('.dice .img2').setAttribute("src","dice2.png");
            break;
        case 3:
            document.querySelector('.dice .img2').setAttribute("src","dice3.png");
            break;
        case 4:
            document.querySelector('.dice .img2').setAttribute("src","dice4.png");
            break;
        case 5:
            document.querySelector('.dice .img2').setAttribute("src","dice5.png");
            break;
        case 6:
            document.querySelector('.dice .img2').setAttribute("src","dice6.png");
            break;

}
if(randomnum>randomnum1){
    document.querySelector('.first').innerHTML=name1+"  wins  "+"Congragulations"
}
else if(randomnum<randomnum1){
    document.querySelector('.first').innerHTML=name2+"  wins   "+"Congragulation"
}
else{
    document.querySelector(".first").innerHTML="The game is draw"
}

}

