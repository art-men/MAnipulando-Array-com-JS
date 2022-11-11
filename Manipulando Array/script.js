let dados = []

function criarBase(){
    let nome = document.getElementById("nome").value
    let rgm = document.getElementById("rgm").value
    let faltas = document.getElementById("faltas").value

    let objeto = { nome: `${nome}` ,
                    rgm: `${rgm}`, 
                    faltas: `${faltas}` 
                 }

                 dados.push(objeto)

                 console.log(dados)
}

function criarTabela(){
    document.getElementById("corpotabela").innerHTML = ""

    dados.forEach(function(elem, index){      //index é a posição do array
        let tabela = document.getElementById("corpotabela")
        let tr = document.createElement('tr')

        tr.innerHTML = `
                <tr>
                    <td>${dados[index].nome}</td>
                    <td>${dados[index].rgm}</td>
                    <td>${dados[index].faltas}</td>
                </tr>
                       `
        tabela.appendChild(tr)
    })
}