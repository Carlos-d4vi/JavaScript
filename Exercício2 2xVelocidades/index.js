let spaceship1 = prompt("Nome da primeira nave:")
let spaceship2 = prompt("nome da segunda nave:")
let spaceship1Speed = prompt("Velocidade da primeira nave em km:")
let spaceship2Speed = prompt("Velocidade da segunda nave em km:")

spaceship1Speed = parseInt(spaceship1Speed)
spaceship2Speed = parseInt(spaceship2Speed)

if(spaceship1Speed > spaceship2Speed){
    alert("A nave mais rápida é: "+ spaceship1 +"\nChegando em "+ spaceship1Speed+"km/h")
    console.log("Nome: "+spaceship1+"\nVelocidade: "+spaceship1Speed)
}else if(spaceship1Speed < spaceship2Speed){
    alert("A nave mais rápida é: " + spaceship2 +"\nChegando em " + spaceship2Speed + "km/h")
    console.log("Nome: "+spaceship2+"\nVelocidade: "+spaceship2Speed)
}else if(spaceship1Speed === spaceship2Speed){
    alert("Algo inesperado aconteceu!" + "\nTanto a nave "+ spaceship1 + " e a nave " + spaceship2 + "\nChegaram com " + spaceship1Speed + "km/h")
    console.log("As duas chearam ao mesmo tempo")
}