let elmtNumero = document.getElementById("numero");
elmtNumero.addEventListener("click",(e)=>{
    let result = parseInt(elmtNumero.innerText) * 2;
    elmtNumero.innerText = result;

})