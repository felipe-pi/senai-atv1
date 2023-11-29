// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

let listaEstudantes = ["Helena", "Chico", "Mário"]
let quantidadeEstudantes = listaEstudantes.length;
console.log(quantidadeEstudantes);

for (let i = 0; i<quantidadeEstudantes;i++){
    const alunoCorrente = listaEstudantes[i]
    console.log(alunoCorrente)
}
i=0
do{
    const alunoCorrente = listaEstudantes[i]
    console.log(alunoCorrente)
    i++
}while(i<quantidadeEstudantes)

for (i=1;i<=10;i++){
    console.log(i)
}

if (quantidadeEstudantes<5){

    listaEstudantes.push("Jose")
    console.log(listaEstudantes)
}
else{
    console.log("Número máximo de membros na lista atingido")
}