const fs = require('fs')

fs.readFile('teste.json', function(err, data) {

	if (err) {
		console.log('deu ruim:', err)
		return
	}

	// JSON é um objeto padrão do Node
	// Assim como no navegador, document, window são objetos padrões para o JavaScript
	// JSON.parse(data)
	// ele é usado para converter texto (string) em objeto (json)

	// o log acima vai mostrar toda a array de objetos que tinha dentro do arquivo

	// você pode guardar o objeto json em uma variavel

	var dados = JSON.parse(data)


	for (var i = 0; i < dados.length; i++) {
		console.log('Esses são os dados da lista:', dados[i])
	}

})