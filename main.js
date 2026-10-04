let name=document.getElementById("username")
let pass=document.getElementById("password")
let email=document.getElementById("email")
let passcon=document.getElementById("passwordConfirm");
let submit=document.getElementById("submit");
let message=document.getElementById("message");
let form=document.getElementById("registerForm");
let usernameError=document.getElementById("usernameError");
let emailError=document.getElementById("emailError");
let passwordError=document.getElementById("passwordError");
let passwordConfirmError=document.getElementById("passwordConfirmError");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let resultado_name=validarUsuario();
    mostrarResultado(name,usernameError,resultado_name);
    if(resultado_name!==true){return;}
    
    let resultado_mail=validarEmail();
     
    mostrarResultado(email,emailError,resultado_mail);
    if(resultado_mail!==true){return;}

    

     let resultado_pass=validarPass()
    mostrarResultado(pass,passwordError,resultado_pass);
    if(resultado_pass!==true){return;}

     let resultado_conf=validarConfirmation();
     
     mostrarResultado(passcon,passwordConfirmError,resultado_conf)
     if(resultado_conf!==true){return;}

     message.innerHTML = "Registro completado correctamente";
         
       
})

name.addEventListener("input", function(){
    message.innerHTML = ""
    let resultado_name=validarUsuario();
    mostrarResultado(name,usernameError,resultado_name);}
);

email.addEventListener("input", function(){
    message.innerHTML = ""
    
    let resultado_mail=validarEmail();
     
    mostrarResultado(email,emailError,resultado_mail);}
);


passcon.addEventListener("input", function(){
    message.innerHTML = ""
    let resultado_conf=validarConfirmation();
     
     mostrarResultado(passcon,passwordConfirmError,resultado_conf);}
);

pass.addEventListener("input", function(){
    message.innerHTML = ""
    let resultado_pass=validarPass()
    mostrarResultado(pass,passwordError,resultado_pass);
         
 let resultado_conf=validarConfirmation();
     mostrarResultado(passcon,passwordConfirmError,resultado_conf);
});

function validarUsuario(){
    if(!name.value){
        
        return "El usuario no puede estar vacío."
    }
    
     else if(name.value.length<4){
        
        return "El usuario debe tener al menos 4 caracteres"
        

}
else return true;
}

function validarEmail(){
    if(!email.value){
        return "El email no puede estar vacio";
    }
    else if(!email.value.includes("@")){
        return "El email debe contener un arroba";
    }
    else return true;
}
function validarPass(){
    if(pass.value.length<8){
        return "La contrasena debe contener al menos 8 caracteres";
    }
    else return true;
}
function validarConfirmation(){
    if(pass.value!==passcon.value){
        return "Las contrasenas no coinciden";
    }
    else return true;
}

function mostrarResultado(campo, mensajeError, resultado) {
    if(typeof resultado==="string"){
        campo.classList.add("error");
            mensajeError.innerHTML=resultado;
            return;
    }
    if(resultado===true){
campo.classList.remove("error");
            mensajeError.innerHTML="";
            return;
    }
    
}
