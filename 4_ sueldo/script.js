document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let aumento = 0;
    let sueldo = parseInt(document.getElementById("in_sueldo").value);
    let anioAntiguedad = parseInt(document.getElementById("in_anios_antiguedad").value);
    if(sueldo < 500 && anioAntiguedad >= 10)
        aumento = 0.2;
    else if(sueldo < 500 && anioAntiguedad < 10)
        aumento = 0.05
    else if(sueldo >= 500)
        aumento = 0;
    document.getElementById("resultado").innerText = `$${(sueldo + (sueldo * aumento))}`;
});