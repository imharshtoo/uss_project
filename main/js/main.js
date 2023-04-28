

// const { head } = require("request");

let passwd = 1;
let cls = document.querySelector(".main-cont");
let zero = document.querySelector(".zero");
let close = document.querySelector(".cvp");
let remove=document.querySelector(".remove");
let ml12=document.querySelector(".ml12");

let text=ml12.textContent;
ml12.textContent="";
let splittext=text.split("");

// let ticketsarr=[]
//username
let pipeFlag=false;
let pipe=document.querySelector(".pipe");
if(localStorage.getItem("username")){
        var gg=JSON.parse(localStorage.getItem("username"));
        pipe.innerText=gg;
}
pipe.addEventListener("mouseenter",(e)=>{
    pipeFlag=!pipeFlag;
    if(pipeFlag){
        pipe.setAttribute("contenteditable","true");
    }
    else{
        pipe.setAttribute("contenteditable","false");
        localStorage.setItem("username",JSON.stringify(pipe.innerText));
    }
})

let ticket=[]
if(localStorage.getItem("thumbnail")){
    let dc=document.getElementById("photo");
    dc.setAttribute("src",localStorage.getItem("thumbnail"))
    // dc.src=photo;
}
if(localStorage.getItem("passes")){
        //retrieve and display
    ticket=JSON.parse(localStorage.getItem("passes"));
    // console.log(ticket);
    for(let i=0;i<ticket.length;i++){
        createTicket(ticket[i].tag,ticket[i].email,ticket[i].paswd,0);
        // console.log(ticket[i].email);
    }
}
    // }
    //tag
    
    let tag=document.querySelector(".Tag");
    if(tag!=undefined){
        tag.addEventListener("mouseenter",(e)=>{
        tag.style.width="14rem";
        tag.style.marginLeft="calc((100% - 14rem)/2)";
        tag.style.padding="0.2cm";
        
    })
    tag.addEventListener("mouseleave",(e)=>{
        tag.style.width="10rem";
        tag.style.marginLeft="calc((100% - 10rem)/2)"
        tag.style.padding="0.1cm";
    })
}

//going for adding details



// light To dark Theme


let DarkFalg=false;
let darkTheme=document.querySelector(".darkTheme");
darkTheme.addEventListener("click",(e)=>{
    DarkFalg=!DarkFalg;
    let remove=document.querySelector(".remove");
    let darkbac=document.querySelector(".tp-link");
    let body=document.querySelector("body");
    let headi=document.querySelectorAll(".main-tag>span");
    let tork=document.querySelector(".tork");
    let dff=document.querySelector(".sidebar");
    let pl=document.querySelectorAll(".pl");
    let cross=document.querySelector(".cross");
    let add2=document.querySelector(".addbtn");
    let pass=document.querySelector(".pass");
    if(DarkFalg){
        for(let i=0;i<headi.length;i++){
            headi[i].style.color="white";
        }
        for(let i=0;i<pl.length;i++){
            if(i==2){
                pl[i].style.backgroundColor="#808080";
            }
            else
            pl[i].style.backgroundColor="#C0C0C0";
        }
        add2.addEventListener("mouseenter",function(){
            add2.style.backgroundColor="#818589";
        })
        add2.addEventListener("mouseleave",function(){
            add2.style.backgroundColor="white";
        })
        remove.addEventListener("mouseenter",function(){
            remove.style.backgroundColor="#818589";
        })
        remove.addEventListener("mouseleave",function(){
            remove.style.backgroundColor="white";
        })
        tork.style.color="white";
        body.style.backgroundColor="rgb(60,64,67)";
        darkbac.style.backgroundColor="rgb(95,99,104)";
        darkTheme.style["boxShadow"]="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        darkTheme.style.border="none";
        dff.style.backgroundColor="#818589";
        add2.style.backgroundColor="white";
        cross.style.backgroundColor="white";
        remove.style.backgroundColor="white";
        pass.style.backgroundColor="#D8BFD8"
        pass.style.color="black";
    }
    else{
        for(let i=0;i<pl.length;i++){
            pl[i].style.backgroundColor="rgb(229, 186, 239)";
        }
        for(let i=0;i<headi.length;i++){
            headi[i].style.color=" rgb(254, 75, 75)";
        }
        tork.style.color="black";
        body.style.backgroundColor="aliceblue";
        darkbac.style.backgroundColor="rgb(195, 237, 238)";
        darkTheme.style.border="1px solid black"
        darkTheme.style.backgroundColor="rgb(229, 186, 239)";
        dff.style.backgroundColor="rgb(247, 226, 226)";
        add2.style.backgroundColor="aquamarine";
        remove.style.backgroundColor="aquamarine";
        cross.style.backgroundColor="rgb(172, 90, 220)";
        add2.addEventListener("mouseenter",function(){
            add2.style.backgroundColor="#8A2BE2";
        })
        add2.addEventListener("mouseleave",function(){
            add2.style.backgroundColor="aquamarine";
        })
        remove.addEventListener("mouseenter",function(){
            remove.style.backgroundColor="#8A2BE2";
        })
        remove.addEventListener("mouseleave",function(){
            remove.style.backgroundColor="aquamarine";
        })
        pass.style.backgroundColor="#143e99";
        pass.style.color="white";
    }
    // darkbac.style.color="white"
})


//photo upload work

let imgDiv=document.querySelector(".profile-pic-div");
let img=document.querySelector("#photo");
let file =document.querySelector("#file");
let uploadBtn=document.querySelector("#uploadBtn");

//if user hover on profile div
imgDiv.addEventListener("mouseenter",function(){
    uploadBtn.style.display="block";
})
imgDiv.addEventListener("mouseleave",function(){
    uploadBtn.style.display="none";
})
file.addEventListener("change",function(){
    
    const choosedFile=this.files[0];//this refers to file
    if(choosedFile){
        const reader=new FileReader();
        reader.addEventListener("load",function(){
            img.setAttribute("src",reader.result);
            // console.log(img.src);
        });
        reader.readAsDataURL(choosedFile);
        reader.addEventListener("load",()=>{
            localStorage.setItem("thumbnail",reader.result);
        })

    }
})



// editing 
// console.log(splittext);
for(let i=0;i<splittext.length;i++){
    ml12.innerHTML+="<span>"+splittext[i]+"</span>";
}
let i=0;
let timer=setInterval(onTick,20);
function onTick(){
    const span=document.querySelectorAll(".ll>span")[i];
    // console.log(span);
    span.classList.add("fade");
    i++;
    if(i==splittext.length){
        let time=setInterval(mainhead,50);
        complete();
        return;
    }
}
let maintag=document.querySelector(".main-tag");
let splitmaintag=maintag.textContent.split("");
// console.log(splitmaintag)
maintag.textContent="";
for(let i=0;i<splitmaintag.length;i++){
    maintag.innerHTML+="<span>"+splitmaintag[i]+"</span>";
}
let up=0;
function mainhead(){
    const udr=document.querySelectorAll(".main-tag>span")[up];
    if(up==splitmaintag.length || udr==undefined){
        complete();
        return;
    }
    // console.log(udr);
    udr.classList.add("fade");
    up++;
}
function complete(){
    clearInterval(timer);
    timer=null;
}



let removeFlag=false;
let tplink=document.querySelector(".tp-link");
zero.addEventListener("click", (e) => {
    let sidebar = document.querySelector(".sidebar");
    tplink.style.marginLeft="7cm";
    sidebar.style.display = "block";
    zero.style.display = "none";
})
close.addEventListener("click", (e) => {
    let sidebar = document.querySelector(".sidebar");
    let zero = document.querySelector(".zero");
    sidebar.style.display = "none";
    zero.style.display = "block";
    tplink.style.marginLeft="0cm";
})
let addFlag=false;
let add = document.querySelector(".addbtn");
let modalCont=document.querySelector(".modal-cont");
let source=document.querySelector(".source");
add.addEventListener("click", (e) => {
    addFlag=!addFlag;
    if(addFlag){
        modalCont.style.display="block";
        add.style.backgroundColor="rgb(100, 205, 116)";
    }
    else{
        modalCont.style.display="none";
        add.style.backgroundColor="aquamarine";
    }
    // createTicket(tagele.value,emailc.value,passwordtell.value,1);
})
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function myFunc(){
    let x = document.querySelectorAll(".pls");
    for(let i=0;i<x.length;i++){
        if (x[i].type === "password"){
            x[i].type = "text";
        } else {
            x[i].type = "password";
        }
    }
}
source.addEventListener("click",(e)=>{
    let tagele=document.querySelector(".tags");
    let emailc=document.querySelector(".playboy");
    let passwordtell=document.querySelector(".p123");
    createTicket(tagele.innerText,emailc.value,passwordtell.value);
})
function createTicket(tag,email,paswd,pp=1){
    let passwordscont = document.createElement("div");
    passwordscont.setAttribute("class", "ticket-cont");
    passwordscont.innerHTML = `
    <h2 class="pass fck">Password ${passwd}</h2>
    <h3 contenteditable="true" spellcheck="false">${tag}</h3>
    <div class="pp">
    <input type="email" name="" class="atrr" placeholder="Enter Your Sign in Details" value="${email}">
    </div>
    <div class="pp password">
    <input type="password" id="people" class="password pls" placeholder="Password" value="${paswd}">
    <div class="checkbox">
        <input type="checkbox" class="meri" onclick="myFunc()">Show Password
    </div>
    </div>
    `;
    passwd++;
    if(pp==1){
        ticket.push({tag,email,paswd});
        console.log(ticket);
        localStorage.setItem("passes",JSON.stringify(ticket));
    }
    cls.appendChild(passwordscont);
    // passwordscont.setAttribute("onclick","location.href='../details.html'");
    let passwdcont=document.querySelectorAll(".ticket-cont");
    paswdsNo(passwdcont);
    handleremoval(passwdcont,email);
    paswdsNo(passwdcont);
}
function paswdsNo(passwdcont){
    for(let i=0;i<passwdcont.length;i++){
        // console.log(passwdcont[i].querySelector(".pass").innerHTML);
        passwdcont[i].querySelector(".pass").innerHTML=`Password ${i+1}`;
    }
}
remove.addEventListener("click",(e)=>{
    removeFlag=!removeFlag;
    if(removeFlag==true){
        remove.style.backgroundColor="#D70040";
    }
    else{
        remove.style.backgroundColor="aquamarine";
    }
    // console.log(removeFlag);
})
function handleremoval(passwdcont,email){
    for(let i=0;i<passwdcont.length;i++){
            passwdcont[i].addEventListener("click",(e)=>{
                if(removeFlag){
                    passwdcont[i].remove();
                    // let passwdc=document.querySelectorAll(".ticket-cont");
                    // paswdsNo(passwdcont)
                    const index = ticket.indexOf(email);
                    ticket.splice(index,1)
                    let strtickets=JSON.stringify(ticket);
                    localStorage.setItem("passes",strtickets);
                    // console.log("harsh");
                }
            })
        }
    }
let btngen=document.querySelector(".tpkl");
btngen.addEventListener("click",(e)=>{
    var c=generatePassword();
    console.log(c);
    let p1234=document.querySelector(".p123");
    console.log(p1234.value)
    p1234.value=c;
})
function generatePassword() {
    var length = 10,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&!()+-",
            retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
    return retVal;
}
// let fck=document.querySelectorAll(".fck");
// for(let i=0;i<fck.length;i++){
//     fck[i].addEventListener("click",(e)=>{
//         fck[i].
//     })
// }