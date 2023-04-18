let firtCharacterName = prompt("Nome do primeiro personagem:")
let firtCharacterAttack = prompt("poder de ataque do primeiro personagem:")
/* Segundo persongem */
let secondCharacterName = prompt("Nome do segundo personagem:")
let secondCharacterLifePoints = prompt("Vida do segundo personagem:")
let secondCharacterDefensePoints = prompt("poder de defesa do primeiro personagem:")
let secondCharacterShield = confirm("Esse personagem tem algum escudo?")

firtCharacterAttack = parseInt(firtCharacterAttack)
secondCharacterDefensePoints = parseInt(secondCharacterDefensePoints)
secondCharacterLifePoints = parseInt(secondCharacterLifePoints)

if(firtCharacterAttack > secondCharacterDefensePoints && secondCharacterShield === false){
    let damage = firtCharacterAttack - secondCharacterDefensePoints
    let lifeRemain = secondCharacterLifePoints - damage
    alert("O dano causado foi: "+ damage)
    alert("Fim de turno!!!\n O resultado foi: "+firtCharacterName+" acertou "+ secondCharacterName+" com "+damage+" de dano\n"+secondCharacterName+" ficou com "+lifeRemain+" de vida")
    console.log("1teste")
}else if(firtCharacterAttack > secondCharacterDefensePoints && secondCharacterShield === true){
    let damage = firtCharacterAttack - secondCharacterDefensePoints
    damage = damage /2
    let lifeRemain = secondCharacterLifePoints - damage
    alert("O dano causado foi: "+ damage)
    alert("Fim de turno!!!\n O resultado foi: "+firtCharacterName+" acertou "+ secondCharacterName+" com "+damage+" de dano\n"+secondCharacterName+" ficou com"+lifeRemain+" de vida")
    console.log("2teste")
}else if(firtCharacterAttack <= secondCharacterDefensePoints){
    let damage = 0
    let lifeRemain = secondCharacterLifePoints - damage
    alert("O dano causado foi: "+ damage)
    alert("Fim de turno!!!\n O resultado foi: "+firtCharacterName+" acertou "+ secondCharacterName+" com "+damage+" de dano\n"+secondCharacterName+" ficou com"+lifeRemain+" de vida")
    console.log("3teste")
}
