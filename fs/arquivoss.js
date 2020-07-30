const fs = require('fs')

try {
    var arquivoBuffer = fs.readFileSync('C:\\Users\\Sara\\Documents\\arquivoDados.txt')
    var conteudo = arquivoBuffer.toString()
    var linhas = conteudo.split("\r\n")
    console.log(linhas)
    linhas.forEach(linha => {
        var dados = linha.split(";")
        console.log(`
        Numero do cliente: ${dados[0]}
        Nome: ${dados[1]}
        Endereço: ${dados[2]}
        Estado: ${dados[3]}
        Estado Civil: ${dados[4]}`)
    })


} catch (error) {
    console.log('Deu ruim e não abriu foi nada')
}