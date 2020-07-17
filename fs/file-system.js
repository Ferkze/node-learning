// A função require() já existe pro padrão no ambiente Node
// Rodar esse JavaScript no navegador não funciona porque ele usa coisas especificas do Node 
// 'fs' é um módulo padrão do Node, você também vai instalar módulos para usar no seu script, mas vai aprender isso mais para frente
// a função require() serve para pegar módulos do Node e adicionar novos recursos para seu script

// No exemplo abaixo, utilizaremos o módulo fs (File System) para manipular arquivos

const fs = require('fs')

fs.readFile('teste.html', function(err, data) {

	if (err) {
		console.log('Não foi possível ler o conteúdo do arquivo')
		console.log('Pânico, deu erro na função fs.readFile:', err)
		return
	}

	console.log('Se não houverem erros, vou conseguir ler o arquivo:\n', data.toString())

})

fs.stat('teste.json', function(err, stats) {

	if (err) {
		console.log('Não foi possível pegar os dados do arquivo')
		console.log('Pânico, deu erro na função fs.stat:', err)
		return
	}

	console.log('Se não houverem erros, vou conseguir obter os dados do arquivo:\n', stats)

})