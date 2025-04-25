const pitanja = [
    {
        tekst: "Koji je glavni grad Francuske?",
        odgovori: ["Berlin", "Madrid", "Pariz", "Rim"],
        tacan: "Pariz"
    },
    {
        tekst: "Koliko iznosi 5 + 3?",
        odgovori: ["6", "7", "8", "9"],
        tacan: "8"
    },
    {
        tekst: "Koja boja nastaje mešanjem plave i žute?",
        odgovori: ["Zelena", "Ljubičasta", "Narandžasta", "Braon"],
        tacan: "Zelena"
    }
];

let indeksPitanja = 0; 
let poeni=0;

const pitanjeElement = document.getElementById("pitanje");
const odgovoriElement = document.getElementById("odgovori");
const dugmeDaljeElement= document.getElementById("dalje");
const rezultatElement= document.getElementById("rezultat");


function proveriOdgovor(odgovor) {
    if(odgovor==pitanja[indeksPitanja].tacan){
        poeni++; 
        dugmeDaljeElement.style.display="block";
        alert("Tacan odgovor!");
    }else{ 
        dugmeDaljeElement.style.display="block";
        alert("Netačan odgovor! Tačan odgovor je: " + pitanja[indeksPitanja].tacan);
    }
}

function prikaziPitanje(){
    dugmeDaljeElement.style.display="none";
    pitanjeElement.innerHTML = pitanja[indeksPitanja].tekst;
    odgovoriElement.innerHTML = "";  
    pitanja[indeksPitanja].odgovori.forEach((odgovor) => {
        const dugme= document.createElement("button");
        dugme.innerHTML = odgovor;
        dugme.addEventListener("click", () => { 
            proveriOdgovor(odgovor);
        });
        odgovoriElement.appendChild(dugme);

    });

}
function prikazRezultata(){
    pitanjeElement.style.display="none";
    odgovoriElement.style.display="none";
    dugmeDaljeElement.style.display="none";
    rezultatElement.style.display="block";        
    
   rezultatElement.innerHTML=`Osvojili ste ${poeni} poena!`;
}
dugmeDaljeElement.addEventListener("click", () => {

    indeksPitanja++;
    if(indeksPitanja==pitanja.length){
        prikazRezultata();
      
    }else{
        prikaziPitanje();
    }
    
});


prikaziPitanje();