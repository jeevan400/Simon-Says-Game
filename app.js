let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let maxScore=0;
let color=["one","two","three","four"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("geme started");
        started=true;
        levelUp();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    if(maxScore<level){
        maxScore=level;
    }
    
    h3.innerText=`Level ${level}`;
    
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=color[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    flash(randombtn);
}
let btns=document.querySelectorAll(".btn");
// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener("click",function(){
//         flash(btns[i]);
//     });
//     gameSeq[i]=btns[i];
// }

function btnpress(){
    let btn=this;
    // console.log(btn);
    userflash(btn);
    userSeq.push(btn.getAttribute("id"));
    // console.log(userSeq);
    checkSeq(userSeq.length-1);
}

for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function checkSeq(idx){
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        // console.log("Game over! Please try again.");
        h3.innerHTML=`Game Over! <b>Your score was ${level}</b><br> Press any key to start the game.`;
        document.querySelector("h2").innerText=`Highest Score ${maxScore}`;
        reset();
        document.querySelector("body").classList.add("over");
        setTimeout(function(){
            document.querySelector("body").classList.remove("over");
        },250);
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}