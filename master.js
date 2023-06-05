let contact= document.querySelector
('.login .choose-inp .chooser');
let inpt= document.querySelector
('.login .choose-inp .selected');
let email= document.querySelector
('.login form .email');
let num= document.querySelector
('.login form .number');

contact.addEventListener('click', ()=>{
        if(inpt.style.display !== 'block'){
            inpt.style.display ='block';
            email.style.display = 'none';
            num.style.display = 'block';
            contact.style.display = 'none';
        }
        else{
            inpt.style.display ='none';
            email.style.display = 'block';
            num.style.display = 'none';
            contact.style.display = 'block';
        }
});

inpt.addEventListener('click' , ()=>{
    if(inpt.style.display !== 'none'){
        inpt.style.display ='none';
        email.style.display = 'block';
        num.style.display = 'none';
        contact.style.display = 'block';
    }
    else{
        inpt.style.display ='block';
        email.style.display = 'none';
        num.style.display = 'block';
        contact.style.display = 'none';
    }
});
// go
let click= document.querySelector
('.login .save');
let go= document.querySelector
('.login .succed ');

click.addEventListener('click', ()=>{
        if(go.style.display !== 'flex'){
            go.style.display = 'flex';
            // go.style.alignItems = 'center';
            // go.style.justifyContent = 'center';
        }
        else{
            // go.style.display = 'none';
        }
});
//////////////////////////////////
let box= document.querySelector(".login");
let inp1= document.querySelector("input.u");
let inp2= document.querySelector("input.number");
let inp3= document.querySelector("input.email");
let pass= document.querySelector("input.pass");
let save= document.querySelector(".save");
let suc= document.querySelector(".succed");
let gO= document.querySelector(".go");
let body= document.querySelector("body");
// let inp5= document.querySelector("input");
let light= document.querySelector(".login .choose-inp .light");
let dark= document.querySelector(".login .choose-inp .dark");
let login= document.querySelector(".login .choose-inp h3");
dark.addEventListener('click', ()=>{
    if(light.style.display !== 'block'){
        light.style.display= 'block' ;
        dark.style.display='none' ;
        box.style.background= '#000' ;
        login.style.color= '#fff' ;
        inp1.style.borderBottomColor= '#fff' ;
        inp1.style.background= '#000' ;
        inp1.style.color= '#fff' ;
        inp2.style.borderBottomColor= '#fff' ;
        inp2.style.background= '#000' ;
        inp2.style.color= '#fff' ;
        inp3.style.borderBottomColor= '#fff' ;
        inp3.style.background= '#000' ;
        inp3.style.color= '#fff' ;
        pass.style.borderBottomColor= '#fff' ;
        pass.style.background= '#000' ;
        pass.style.color= '#fff' ;
        save.style.background= '#fff' ;
        save.style.color= '#000' ;
        suc.style.background="#000";
        gO.style.background= " #fff";
        gO.style.color= " #000";
        body.style.background="#000";
    }
});
light.addEventListener('click', ()=>{
    if(light.style.display == 'block'){
        light.style.display= 'none' ;
        dark.style.display='block' ;
        box.style.background= '#fff' ;
        login.style.color= 'gray' ;
        inp1.style.borderBottomColor= '#000' ;
        inp1.style.background= '#fff' ;
        inp1.style.color= '#000' ;
        inp2.style.borderBottomColor= '#000' ;
        inp2.style.background= '#fff' ;
        inp2.style.color= '#000' ;
        inp3.style.borderBottomColor= '#000' ;
        inp3.style.background= '#fff' ;
        inp3.style.color= '#000' ;
        pass.style.borderBottomColor= '#000' ;
        pass.style.background= '#fff' ;
        pass.style.color= '#000' ;
        save.style.background= '#0075ff' ;
        save.style.color= '#fff' ;
        suc.style.background="#fff";
        gO.style.background= " #0075ff";
        gO.style.color= " #fff";
        body.style.background="#fff";
    }
});