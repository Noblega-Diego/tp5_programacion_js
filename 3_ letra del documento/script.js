
document.getElementById("form").addEventListener("submit",(e)=>{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'] 
    e.preventDefault();
    let value= document.getElementById("in_dni").value;
    let dni = parseInt(value)
    if(!dni || value.search(/[a-z A-Z]/g) != -1 || dni <= 0 || dni > 99999999){
        alert("el dni ingresado es incorrecto")
        return;
    }
    let letra = letras[dni % 23];
    if (letra.toUpperCase() === document.getElementById("in_letra").value.toUpperCase())
        alert(`CORRECTO: El documento ${dni} coincide con la letra: ${letra}`)
    else 
        alert("No coinciden")
})