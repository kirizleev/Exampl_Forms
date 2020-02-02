const loginForm = document.getElementById("login-form");
const signinForm = document.getElementById("signin-form");
const goSignin = document.getElementById("go-signin");
const goLogin = document.getElementById("go-login");
const appDate = document.getElementById("app-date");

appDate.innerText = new Date().getFullYear();

signinForm.style.display = "none";

function toggleForm(formName) {
    if(formName === "login-form") {
        loginForm.style.display = "block";
        signinForm.style.display = "none";
    }

    if(formName === "signin-form") {
        signinForm.style.display = "block";
        loginForm.style.display = "none";
    }
}

goLogin.addEventListener("click", function(event) {
    event.preventDefault();
    toggleForm("login-form");
})

goSignin.addEventListener("click", function(event) {
    event.preventDefault();
    toggleForm("signin-form");
})