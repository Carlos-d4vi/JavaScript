const criarMenu = () => {
    escolhas = prompt("1 - Listar Vagas\n 2 - Criar Vaga\n 3 - Ver uma Vaga\n 4 - Inscrever um candidato em uma vaga\n 5 - Excluir vaga\n 6 - Sair")
    return escolhas
}
function criarVaga(){
    vaga = {}
    vaga.nome = prompt("Nome da vaga:")
    vaga.descrição = prompt("Descrição da vaga:")
    vaga.dataLimite = parseFloat(prompt("Tempo limite para a vaga:"))
    vaga.candidato = []
    confirmar = function(){
        confirmação = confirm("Nome da vaga: "+vaga.nome+"\n"+"Descrição da vaga: "+vaga.descrição+"\m"+"\nData limite: "+vaga.dataLimite+"\n\n"+"Confirmar?")
        if(confirmação === true){
            vagas.push(vaga)
        }
    }
    confirmar()
}
function inscreverCandidato(){
    candidato = {}
    candidato.nome = prompt("Nome do candidato:")
    vagaDesejada = parseInt(prompt("Qual o índice da vaga?"))
    confirmação = confirm("Deseja confirmar?"+"\nNome do candidato: "+candidato.nome+"\nNome da vaga: "+vagas[vagaDesejada].nome)
    if (confirmação === true) {
        vagas[vagaDesejada].candidato.push(candidato)
    }else{
        alert("Cancelado!")
    }
}
function procurarIndex(){
    pedirIndex = prompt("Qual o índice da vaga?")
    if(pedirIndex >= vagas.length || pedirIndex < 0){
        
        alert("Índice inválido, por favor tente novamente.")
        return
    }
    
    alert("Índice da vaga: "+pedirIndex+"\nNome da vaga: "+ vagas[pedirIndex].nome + "\nDescrição da vaga: "+ vagas[pedirIndex].descrição+"\nData limite: "+vagas[pedirIndex].dataLimite)
}
function excluir(){
    pedirIndex = parseInt(prompt("Qual índice da vaga?"))
    confirmação = confirm("Índice da vaga: "+pedirIndex+"\nNome da vaga: "+ vagas[pedirIndex].nome + "\nDescrição da vaga: "+ vagas[pedirIndex].descrição+"\nData limite: "+vagas[pedirIndex].dataLimite+ "\n\nDeseja excluir essa vaga?")
    if (confirmação === true) {
        vagas.splice(pedirIndex, 1)
    }
}
function executar(){
    do {
        escolhas = criarMenu()
        switch (escolhas) {
            case "1":
                vagas.forEach(function(valor, index){console.log("Índice da vaga: "+index+"\n"+"Nome da Vaga: "+valor.nome+"\nQuantidade de candidatos: "+
                valor.candidato.length);})
                break;
            case "2":
                criarVaga()
                break
            case "3":
                procurarIndex()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluir()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break;
        }
    } while (escolhas != "6");
}

let vagas = []
executar()