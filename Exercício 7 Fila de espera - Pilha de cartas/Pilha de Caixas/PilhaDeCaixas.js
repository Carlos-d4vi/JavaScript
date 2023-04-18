let cartas = ["ás", "rei","bispo"]
let menu
while(menu != "3"){
    menu = prompt(cartas+"\nEssas são as suas cartas...\n"+
    "(1)adicionar carta ao topo do baralho (2)Usar carta do topo do baralho")
    if (menu == "1") {
        cartas.unshift(prompt("Nome da carta:"))
    }else if (menu == "2") {
        alert(cartas[0])
        cartas.shift()
    }else{
        alert("O programa está encerrando!")
    }
}