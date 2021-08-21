var form = document.getElementById("formulario-contato");


function validaEnvio(){
    const button = document.getElementById("btn-submit2");
    button.addEventListener("click", function(e){
        const nome = document.getElementById("name");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("msg");
        const submit = document.getElementById("btn-submit2");


        if(email.value == " "){
            alert("O campo E-mail não pode estar vazio!");
            email.classList.add("errorInput");
        }else{
            email.classList.remove("errorInput");
        }

        if(email.value.indexOf("@") == -1 || email.valueOf.indexOf(".") == -1 || email.value == "" || email.value == null) {
            alert("Por favor, indique um e-mail válido");
            email.classList.add("errorInput");
        }
 
        if(nome.value == " "){
            alert("O campo Nome não pode estar vazio!");
            nome.classList.add("errorInput");
         }else{
            nome.classList.remove("errorInput");
         }

    
        if(mensagem.value == " "){
            alert("O campo Mensagem não pode estar vazio!");
            mensagem.classList.add("errorInput");
        }else{
            mensagem.classList.remove("errorInput");
        }

        
        if(submit){
            submit.addEventListener("click", function(e){
                e.preventDefault();
           
                });
        
        }   


    });
    
}