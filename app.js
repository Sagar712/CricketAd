let intr = 0;
let intr2 = 0;
function darkMode() {
    let icon = document.getElementById("chnageicon");
    let maincon = document.querySelector(".maincontent");
    
    maincon.classList.toggle("light");
    

    if(intr==1){
        icon.className="far fa-moon";
        intr = 0;
    }
    else{
        icon.className="fas fa-moon";
        intr=1;
    }

}

function pushdo() {
    let pushdown = document.querySelector(".ab");
    pushdown.classList.toggle("pushdown");
    let showdd = document.querySelector(".aca");
    showdd.classList.toggle("show");
}

function showmenu() {
    let menubar = document.querySelector(".menus");
    menubar.classList.toggle("active");
    let icon = document.getElementById("changeicon2");
    let overlay = document.querySelector(".overlay");
    overlay.classList.toggle("active");

    if(intr2==1){
        icon.className="fas fa-bars";
        intr2 = 0;
    }
    else{
        icon.className="fas fa-times";
        intr2=1;
    }
}