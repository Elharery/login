let user = document.querySelector("[name = 'user']")
let pas = document.querySelector("#pas")
let form = document.querySelector("form")
let submiT = document.querySelector("#sub")
let helloUser = document.querySelector(".helloUser")
let password = document.querySelector("[name = 'password']")
let passwordShow = document.querySelector("form .pas [type = 'checkbox']")
let passwordShowT = document.querySelector("form [type = 'password']")
let click = document.querySelector("#click")
let have = document.getElementById("have")

let uName = document.querySelector("#userName")
let newPass = document.querySelector("#newPass")
let passAgain = document.querySelector("#passAgain")
let subC = document.querySelector(".sub-c")
let sub = document.querySelector(".sub-c span")
let create = document.querySelector(".create");
click.onclick = () => {
    form.style.transition = "0.1s";
    create.style.transition = "0.6s";
    form.style.transform = "rotateY(90deg)";
    create.style.transform = "rotateY(0deg)";
    user.value = ""
    pas.value = ""
    // form.style.display = "none";
    // create.style.display = "block";
}

// passwordShow.onclick = function () {
//     if (passwordShowT.type === "password") {
//         passwordShowT.type = "text";
//         } else {
//         passwordShowT.type = "password";
//     }
// }
// form Create Account

//

if (newPass.value === passAgain.value) {
    console.log("Yes");
    sub.onclick = function () {
        // uName.onblur = function () {
        // }
        // newPass.onblur = function () {
        // }
        // passAgain.onblur = function () {
        // }
        form.style.transition = "0.6s";
        create.style.transition = "0.1s";
        form.style.transform = "rotateY(0deg)";
        create.style.transform = "rotateY(90deg)";
        uName.value = ""
        passAgain.value = ""
        newPass.value = ""
        // form.style.display = "block";
        // create.style.display = "none";
        
    }
} else {
    console.log("no");
}
have.onclick = ()=> {
    form.style.transition = "0.6s";
    create.style.transition = "0.1s";
    form.style.transform = "rotateY(00deg)";
    create.style.transform = "rotateY(90deg)";
    uName.value = ""
    passAgain.value = ""
    newPass.value = ""
}

uName.oninput = function () {
    window.localStorage.setItem("userName" , uName.value)
}
newPass.oninput = function () {
    window.localStorage.setItem("newPass" , newPass.value)
}
passAgain.oninput = function () {
    window.localStorage.setItem("passAgain" , passAgain.value)
}
//
// let nameU = uName.value;
submiT.addEventListener("click", () => {
if (user.value === window.localStorage.getItem("userName") && pas.value === window.localStorage.getItem("newPass")) {
    alert(`Hello ${user.value}🥰`)
    user.value = ""
    pas.value = ""
    }
})
// user.onblur = function () {
// }
// pas.onblur = function () {
// }
    console.log(window.localStorage.getItem("userName"));
// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let passwordValid = false;

//     if (user.value !== "") {
//         userValid = true;
//     }
//     if (password.value !== "" && password.value.length <= 8) {
//         passwordValid = true;
//     }
//     if (userValid === false || passwordValid === false) {
//         e.preventDefault()
//     }
// }