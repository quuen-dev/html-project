function info(){
constnameId = document.getElementById("name").Value;
const username = document.getElementById("username").Value;
const password = document.getElementById("password").Value;



    console.log("Name: " + nameId);
    console.log("Username: " + username);
    console.log("Password: " + password);

}

const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click",() => {
    info();

})

