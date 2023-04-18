const resposta = prompt("Digite o valor para ser convertido em metros:")
const escolha = prompt(
    "para qual formato você pretende converter: " +
    "\n1 - milímetro (mm)" +
    "\n2 - centímetro (cm)" +
    "\n3 - decímetro (dm)" +
    "\n4 - decâmetro (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)")
valor = parseInt(resposta)

switch(escolha){
    case"1":
    calculado = valor * 1000
    alert(valor + " convertido para milímetro (mm) é: " + calculado+"mm")
    break
    case"2":
    calculado = valor * 100
    alert(valor + " convertido para centímetro (cm) é: " + calculado+"cm")
    break
    case"3":
    calculado = valor * 10
    alert(valor + " convertido para decímetro (dm) é: " + calculado+"dm")
    break
    case"4":
    calculado = valor / 10
    alert(valor + " convertido para decâmetro (dam) é: " + calculado+"dam")
    break
    case"5":
    calculado = valor / 100
    alert(valor + " convertido para hectômetro (hm) é: " + calculado+"hm")
    break
    case"6":
    calculado = valor / 1000
    alert(valor + " convertido para quilômetro (km) é: " + calculado+"km")
    break
    default:
        alert("Opção não reconhecida, tente novamente")
}