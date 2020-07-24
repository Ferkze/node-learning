const fs = require('fs')

const file = fs.readFileSync('funcionarios.json')
const jsonContent = JSON.parse(file)
const funcionarios = jsonContent.funcionarios

// Função que retorna o nome do funcionário com maior salário
// const maiorSalario = (funcs) => funcs.reduce((a, b) => a.salario < b.salario ? b : a, funcs[0]).nome
function nomeFuncionarioMaiorSalario(funcionarios) {
	let maiorSalario = funcionarios[0];
	for (let i = 0; i < funcionarios.length; i++) {
		if (maiorSalario.salario <= funcionarios[i].salario) {
			maiorSalario = funcionarios[i];
		}
	}
	return maiorSalario.nome
}

// Função que retorna o nome do funcionário com menor salário
// const menorSalario = (funcs) => funcs.reduce((a, b) => a.salario > b.salario ? b : a, funcs[0]).nome
function nomeFuncionarioMenorSalario(funcionarios) {
	let maiorSalario = funcionarios[0];
	for (let i = 0; i < funcionarios.length; i++) {
		if (maiorSalario.salario > funcionarios[i].salario) {
			maiorSalario = funcionarios[i];
		}
	}
	return maiorSalario.nome
}
// Função que retorna a média de salário dos funcionários
// const somar = (a, b) => a.salario+b.salario
// const mediaSalario = (funcs) => funcs.reduce(somar, 0)/funcs.length
function mediaSalario(funcionarios) {
	let soma = 0
	for (let i = 0; i < funcionarios.length; i++) {
		soma += funcionarios[i].salario
	}
	return soma/funcionarios.length
}

// Função que retorna o maior salário por setor
function maiorSalarioDoSetor(funcrionarios, setor) {
	let funcMaiorSalario = null
	for (let i = 0; i < funcrionarios.length; i++) {
		const func = funcrionarios[i];
		if (func.setor == setor) {
			if (funcMaiorSalario == null) {
				funcMaiorSalario = func
			}
			if (func.salario > funcMaiorSalario.salario) {
				funcMaiorSalario = func
			}
		}
	}
	return funcMaiorSalario
}

function maiorSalarioDoSetor2(funcionarios, setor) {
	const funcsDoSetor = funcionarios.filter(f => f.setor == setor)
	return funcsDoSetor.reduce((a, b) => a.salario < b.salario ? b : a, funcsDoSetor[0])
}

// Função que retorna o menor salário por setor
function menorSalarioDoSetor(funcrionarios, setor) {
	let funcionarioComMenorSalario = null
	for (let i = 0; i < funcrionarios.length; i++) {
		const func = funcrionarios[i];
		if (func.setor == setor) {
			if (funcionarioComMenorSalario == null) {
				funcionarioComMenorSalario = func
			}
			if (func.salario < funcionarioComMenorSalario.salario) {
				funcionarioComMenorSalario = func
			}
		}
	}
	return funcionarioComMenorSalario
}

function menorSalarioDoSetor2(funcionarios, setor) {
	const funcsDoSetor = funcionarios.filter(f => f.setor == setor)
	return funcsDoSetor.reduce((a, b) => a.salario > b.salario ? b : a, funcsDoSetor[0])
}

// Função que retorna a média de salário por setor

function mediaSalarioDoSetor(funcionarios, setor) {
	const funcsDoSetor = funcionarios.filter(f => f.setor == setor)
	return mediaSalario(funcsDoSetor)
}

console.log('nomeMaior:', nomeFuncionarioMaiorSalario(funcionarios))
console.log('nomeMenor:', nomeFuncionarioMenorSalario(funcionarios))
console.log('nomeMedia:', mediaSalario(funcionarios))

console.log('maiorSalDoSetor(Administrativo):', maiorSalarioDoSetor2(funcionarios, 'Administrativo').nome)
console.log('maiorSalDoSetor(Comercial):', maiorSalarioDoSetor2(funcionarios, 'Comercial').nome)
console.log('maiorSalDoSetor(Produção):', maiorSalarioDoSetor2(funcionarios, 'Produção').nome)

console.log('menorSalDoSetor(Administrativo):', menorSalarioDoSetor2(funcionarios, 'Administrativo').nome)
console.log('menorSalDoSetor(Comercial):', menorSalarioDoSetor2(funcionarios, 'Comercial').nome)
console.log('menorSalDoSetor(Produção):', menorSalarioDoSetor2(funcionarios, 'Produção').nome)

console.log('mediaSalarioDoSetor(Administrativo):', mediaSalarioDoSetor(funcionarios, 'Administrativo'))
console.log('mediaSalarioDoSetor(Comercial):', mediaSalarioDoSetor(funcionarios, 'Comercial'))
console.log('mediaSalarioDoSetor(Produção):', mediaSalarioDoSetor(funcionarios, 'Produção'))