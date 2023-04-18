const turistName = prompt("Qual o seu nome viajante?")
let turistTravels = 0
let turistFly = prompt("Você já viajou para alguma cidade?")
let turistCitiesNames = ""
if(turistFly == "ss"){
    turistTravels += 1
}

while(turistFly != "nn"){
    turistCitiesAsk = prompt("1para qual cidade?")
    turistCitiesNames += turistCitiesAsk + " - "
    turistFly = prompt("Você viajou para mais uma cidade?")
    if(turistFly == "nn"){
        break
    }
    turistTravels += 1
}
if(turistTravels < 1){
    alert(turistName+" Não tem viagens!")
}else{
    alert(turistName+" teve "+turistTravels+
    " viagens, Nessa(s) cidades: \n"+turistCitiesNames)
}