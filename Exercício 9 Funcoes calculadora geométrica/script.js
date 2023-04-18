function triangulo(base, altura) {
    resultado1 = base * altura / 2
    return resultado1
}
function retangulo(base, altura){
    resultado2 = base * altura
    return resultado2
}
function quadrado(lado) {
    resultado3 = lado^2
    return resultado3
}
function trapezio(baseMaior, baseMenor, altura) {
    resultado4 = (baseMaior + baseMenor) + altura / 2
    return resultado4
}
function circulo(raio) {
    pi = 3.14
    resultado5 = pi * raio^2
    return resultado5
}
function menu(){
    return prompt("1 -Área do triângulo\n"
                    +"2 -Área do retângulo\n"
                    +"3 -Área do quadrado\n"
                    +"4 -Área do trapézio\n"
                    +"5 -Área do círculo\n"
                    +"6 - Sair")
}
function executar(){
    do {
        escolha = menu()
                    switch(escolha){
                        case "1":
                            triangulo(prompt("Digite a base:"), prompt("Digite a Altura:"))
                            alert(resultado1)
                            break
                        case "2":
                            retangulo(prompt("Digite a base:"), prompt("Digite a Altura:"))
                            alert(resultado2)
                            break
                        case "3":
                            quadrado(prompt("Digite o lado:"))
                            alert(resultado3)
                            break
                        case "4":
                            trapezio(prompt("Digite a base maior:"), prompt("Digite a base menor:"), prompt("Digite a altura:"))
                            alert(resultado4)
                            break
                        case "5":
                            circulo(prompt("Digite o raio:"))
                            alert(resultado5)
                            break
                        case "6":
                            alert("Encerrando...")
                            break
                        default:
                            alert("Parece que algo está errado, tente novamente!")
                            break
                    }    
} while (escolha != "6");
}
executar()