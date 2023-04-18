const palavra = prompt("Digite uma palavra para saber se ela é um palindromo:")
let palindromo = ""
//ovo
for (let i = palavra.length -1; i >=0 ; i--) {
    palindromo += palavra[i]
}
if (palavra === palindromo) {
    alert("é um palindromo")
}else{
    alert("não é um palindromo")
}