document.addEventListener("DOMContentLoaded", () => {
      const texto = document.body.querySelector("#texto");
      texto.addEventListener("click", () => {
       if (texto.textContent==="alô representante")
           texto.textContent="E as camisas? nada ainda";
        else
            texto.textContent="alô representante";
    
    });

});
