
// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = {false,true,false}

// funcionarios = [nomes,idades,faculdade]

// function eMaiorQue10(value) {
//     retunr value >= 10;
//   }

// var filtrado = numeros.filter(eMaiorQue10);
// // filtrado é [12, 130, 44]

// console.log(filtrado)

// Para alterar as teclas de atalho, vá na engrenagem e click em Keyboard ou digite Crtl + k + S, nesta ordem. O atalho para retirar as basrras foi alterado de 'Crtl + ;' para 'Crtl + /'.


const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]


const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length
    }
}

media = media / notasGerais.length

// Ao clicar em 'media' e em seguida F12, o Visual Code te leva para 'declaração', ou seja, onde 'media' foi citada pela primeira vez.

console.log(media)

// "Crtl + shift + k apaga a linha selecionada."

function teste() {
    return 10
    console.log("retornou")
}

let TextoDeQuebraDeLinha = "Oi, tudo bem? Eu sou o Leonardo, esse texto é longo mesmo para podermos testar a quebra de linha"
array = []
array.push(1)
console.log(array)

// Toda vez que digitar a palavra texto será substituída por PalavrasSimples. Isso foi feito selecionando texto e clikando em F2. Na caixa de diálogo substitua a palavra.

let PalavrasSimples = ["oi", "ok"]

// Obs: digite 'Ctrl + espaço' para abrir a caixinha de sugestão do 'for'.E para selecionar todas as palavras iguais, digite Crtl + F2 ou Crtl + D, quantas vezes for necessário até selecionar todas as palavras desejadas.

for (let i = 0; i < PalavrasSimples.length; i++) {
    const element = PalavrasSimples[i];
}