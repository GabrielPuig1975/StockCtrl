const register = document.getElementById('register');
const idLocal = document.getElementById('local');






register.addEventListener('click', ()=> {
    const userId = prompt('Coloque su contraseña de ingreso');

    if(userId === "1342") {
        register.pathname="./registro.html"
    } else {
        alert("Not allow acces!!");
    }
    
})
idLocal.addEventListener('click', ()=> {
    const userId = prompt('Coloque su contraseña de ingreso');

    if(userId === "1342") {
        idLocal.pathname="./caja.html"
    } else {
        alert("Not allow acces!!");
    }
    
})