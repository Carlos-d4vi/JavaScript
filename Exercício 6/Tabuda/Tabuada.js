inicial = prompt("Qual número você deseja saber a tabuada")
tabuada = ""
for (let index = 0; index < 21; index++) {
    resultadoTabuada = index * inicial
    tabuada += index+"x"+inicial+" = "+ resultadoTabuada+"\n"
}
alert("Tabuada do: "+inicial+"\n"
     +tabuada  )