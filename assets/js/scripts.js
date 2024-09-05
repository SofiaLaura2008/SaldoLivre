//barra de progresso
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = `${scrollPercent}%`;
});

//Menu de perfil
function Menu() {
    var menu = document.getElementById("profile-box");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

//Menu de listas
function Menulista() {
    var menu = document.getElementById("listas");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

//quando clica fora sai
window.onclick = function(event) {
    var Menu = document.getElementById("profile-box");
    var listMenu = document.getElementById("listas");

    if (!event.target.matches('#profile-icon') && !event.target.closest('#profile-box')) {
        if (Menu.style.display === "block") {
            Menu.style.display = "none";
        }
    }

    if (!event.target.matches('#lista') && !event.target.closest('#listas') && !event.target.matches('#profile-icon') && !event.target.closest('#profile-box')) {
        if (listMenu.style.display === "block") {
            listMenu.style.display = "none";
        }
    }
}

function sair() {
    localStorage.removeItem('Entrou');
    localStorage.removeItem('logado');
    window.location.href = "login.html"; 

}