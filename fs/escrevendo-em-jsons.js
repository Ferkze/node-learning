const fs = require('fs')

fs.readFile('teste.json', function (err, data) {
    if (err) {
        console.log('tomou no cu e nao abriu foi nada')
        return
    } 
    console.log('recebi os negocio')
    var lista = JSON.parse(data)
    lista.push({
        duas: "palavras",
        para: "bens"
    })
    console.log(lista)
    fs.writeFile('teste.json', JSON.stringify(lista), function (err) {
        if (err) {
            console.log('que chato né kk')
            return
        }
    })
}) 









