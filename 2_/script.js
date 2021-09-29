let meses = ["enero","febrero","marzo",
             "abril", "mayo","junio",
             "julio","agosto", "septiembre", 
             "octubre","nobiemvre","diciembre"]

for(const index in meses){
    document.write(meses[index] + "\n");
}

let index = 0;
while(index < meses.length){
    document.write(meses[index] + "\n");
    index ++;
}