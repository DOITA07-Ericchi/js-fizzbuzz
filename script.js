let arrayMacchine = ["Maserati", "Bmw", "Audi", "Fiat"];

for(let i = 0; i < arrayMacchine.length; i++){
    console.log(arrayMacchine[i]);
}

arrayMacchine[2] = "Ferrari";

for(let i = 0; i < arrayMacchine.length; i++){
    
    if(arrayMacchine[i] == "Ferrari" || arrayMacchine[i] == "Maserati" ){
        console.log("EVVIVA HAI UN AUTO BELLA NEL TUO PARCO AUTO!");
    } else {
        console.log(arrayMacchine[i]);
    }
}



let arrayNumeri = [5, 9, 2, 6, 4];

for(let i = 0; i< arrayNumeri.length; i++){
    console.log(arrayNumeri[i]);
}

for(let i = 0; i< arrayNumeri.length; i++){

    if(arrayNumeri[i]<5){
        console.log("Il numero è minore di 5");
    } else{
        console.log("Il numero è maggiore uguale a 5");
    }
    
}