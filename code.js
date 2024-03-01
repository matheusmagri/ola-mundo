document.addEventListener("DOMContentLoaded", () => {
      const texto = document.body.querySelector("#texto");
      texto.addEventListener("click", () => {
       if (texto.textContent==="alô paiii!")
           texto.textContent="compra meu notebook pfvr";
        else
            texto.textContent="alô paiii!";
    
    });

});
