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

for (const key in fabiObject) { //no forIn ele pega o indice um por um de um objeto
    const atributo = fabiObject[key];
    console.log(`${key} do Fabiu é ${atributo}`) //mostra a key e o valor
}


for (const index in fabioList) { //forIn pega cada indice da Array
   const roupa = fabioList[index]; // lista os indices dentro de roupa
   console.log(index)
}