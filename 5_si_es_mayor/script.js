
inputSi = document.getElementById("simayor_si");
inputNo = document.getElementById("simayor_no");

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(inputSi.checked)
    if(!(inputSi.checked || inputNo.checked)){
        alert("seleccione una opcion")
        return;
    }else if(inputSi.checked){
        alert("Puede continuar");
    }else if(inputNo.checked){
        alert("NO puede continuar");
    }
})