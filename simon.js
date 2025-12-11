let gameseq = [];
let userseq = [];

let btns = ["red" , "yellow" , "green" , "blue"];

let started = false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
       console.log("key preesed"); 
       started = true;
       levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText =`level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randomcolor = btns[random];
    gameseq.push(randomcolor);

    let randombtn = document.querySelector(`.${randomcolor}`);
    btnflash(randombtn);
}

function checkans(idx){
   
   if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
   }else{
    h2.innerHTML= `Game over your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },200);
    reset();

   }
}

function btnpress(){
    //if(!started) return;
   let btn = this;
   console.log("Button clicked:", btn.id);
   btnflash(btn);
   let usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
   checkans(userseq.length - 1);
}
document.addEventListener("DOMContentLoaded", function(){
    let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" ,btnpress);
}
});

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}