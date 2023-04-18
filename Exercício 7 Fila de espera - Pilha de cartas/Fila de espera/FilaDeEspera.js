let fila = ["Marcos", "Lucas","Thiago"]
let resposta = "0"
let paciente
/* Usar o do e o switch na próxima */
while (resposta != "3"){
    resposta = prompt(fila+"\n----------\n"+"(1)Adicionar na fila - (2)Consultar Paciênte")
    if (resposta == "3") {
        alert("O Programa está encerrando!")
    }else if(resposta == "1"){
        fila.push(prompt("Digite o nome do paciênte:"))
    }else if(resposta == "2"){
        consulta = fila.shift()
        if(consulta == undefined){
            alert("Você não tem paciêntes para consultar, adicione alguns!")
        }else{
            alert("Nome do paciênte: "+ consulta)
        }
    }
}