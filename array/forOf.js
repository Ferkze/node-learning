var fabioList = [
    'cueca',
    'calça de moletom',
    'blusinha',
    'sueter',
    'meias',
    'casacos',
]

var fabiObject = {
    nome: 'Fabiu',
    idade: '20',
    peso: '72',
    altura: '1.72',
    cabelo: 'loiro',
    adjetivoSupremo: 'lindo, gostoso e meu' 
}

for (const valor of fabioList) {  //pega os valores da array
    console.log(valor)
}

for (const valor of Object.values(fabiObject)) {  //pega os valores do objeto selecionado
    console.log(valor)
}