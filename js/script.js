
document.getElementById("formdespesa").addEventListener("submit", function(event){

    event.preventDefault();

    var salario = document.getElementById("salario").value
    var data = document.getElementById("data").value
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value
  
    var despesa = {data:data, nome:nome, valor:valor}
 
    var lista_despesas = JSON.parse(localStorage.getItem('listagem'))|| []
    
    lista_despesas.push(despesa)
    
    localStorage.setItem('listagem', JSON.stringify(lista_despesas))
    document.getElementById('formdespesa').reset()
    exibir_despesas()
    exibir_resumo()

})


function exibir_despesas(){
    var lista_despesas = JSON.parse(localStorage.getItem('listagem')) || []
    var output = document.getElementById('output')
    output.innerHTML = ''
    for(let i=0; i<lista_despesas.length; i++){
        let li = document.createElement('li')
        li.textContent = '      |Data:' +lista_despesas[i].data + '      |    Nome:' +lista_despesas[i].nome + '    |  valor:' +lista_despesas[i].valor
        output.appendChild(li)
    }
}

function exibir_resumo(){
    var lista_despesas = JSON.parse(localStorage.getItem('listagem')) || []
    var resumo = document.getElementById('resumo')
    resumo.innerHTML = ''
    for(let i=0; i<lista_despesas.length; i++){
        let li = document.createElement('li')
        li.textContent = 'Salário:' +lista_despesas[i].salario + '      |Total despesas:' +lista_despesas[i].tdespesas + '      |    Saldo final:' +lista_despesas[i].saldo + '    |  valor:' +lista_despesas[i].valor
        resumo.appendChild(li)
    } }
