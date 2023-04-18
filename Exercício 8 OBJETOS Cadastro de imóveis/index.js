let imoveisLista = []
let quantidadeImoveis = imoveisLista.length
/* Esses ifs pderiam ser substituidos por uma função mas ainda não cheguei lá. */
do {
    escolha = prompt(imoveisLista.length+"\nEsses são a quantidade de imóveis cadastrados."+
    "\n(1) Cadastrar imóvel"+
    "\n(2) Mostrar imóveis cadastrados"+
    "\n(3) Sair")
    switch (escolha) {
        case "1":
            imovel = {}
            imovel.nome = prompt("Digite o nome do proprietário")
            if (imovel.nome == null) {
                alert("Desculpe parece que nenhum valor foi digitado no nome do proprietário, voltando ao menu.")
                break
            }
            imovel.quartos = prompt("Digite a quantidade de quartos")
            if (imovel.quartos == null) {
                alert("Desculpe parece que nenhum valor foi digitado no nome do proprietário, voltando ao menu.")
                break
            }
            imovel.banheiros = prompt("Digite a quantidade de banheiros")
            if (imovel.banheiros == null) {
                alert("Desculpe parece que nenhum valor foi digitado no nome do proprietário, voltando ao menu.")
                break
            }
            imovel.garagem = prompt("Tem garagem? (SIM/NÃO)")
            confirmacao = confirm("Salvar esse imóvel?\n"+
            "Nome do proprietário: "+imovel.nome+"\n"+
            "Quantidade de quartos: "+imovel.quartos+"\n"+
            "Quantidade de banheiros: "+imovel.banheiros+"\n"+
            "Possui garagem: "+imovel.garagem)
            if(confirmacao){
                imoveisLista.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("Voltando ao menu")
            }
            break
        case "2":
            for (let i = 0; i < imoveisLista.length; i++) {
                alert("Imóvel: "+ (i + 1) +"\n"+
                "Nome do proprietário: "+imoveisLista[i].nome+"\n"+
                "Quantidade de quartos: "+imoveisLista[i].quartos+"\n"+
                "Quantidade de banheiros: "+imoveisLista[i].banheiros+"\n"+
                "Possui garagem?: "+imoveisLista[i].garagem)
                
            }
            break
        case "3":
            alert("Encerrando o programa!")
            break
        default:
            alert("Desculpe parece que não existe essa opção.") 
        }
} while (escolha != "3");
