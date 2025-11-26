document.getElementById("formsalario").addEventListener("submit", function(event){
      event.preventDefault();

      var salario = document.getElementById("salario").value

      var salarios = {salario:salario}

      var lista_salarios = JSON.parse(localStorage.getItem('listagem'))|| []

      lista_salarios.push(despesa)
    
    localStorage.setItem('listagem', JSON.stringify(lista_salarios))
    document.getElementById('formsalario').reset()
    exibir_salarios()
})

function exibir_salarios(){
    var lista_salarios= JSON.parse(localStorage.getItem('listagem')) || []
    var output = document.getElementById('output')
    output.innerHTML = ''
    for(let i=0; i<lista_salarios.length; i++){
        let li = document.createElement('li')
        li.textContent = 'Salario:' +lista_salarios[i].salario + 
        output.appendChild(li)
    }
}





document.getElementById("formdespesa").addEventListener("submit", function(event){

    event.preventDefault();

    var data = document.getElementById("data").value
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value
  
    var despesa = {data:data, nome:nome, valor:valor}
 
    var lista_despesas = JSON.parse(localStorage.getItem('listagem'))|| []
    
    lista_despesas.push(despesa)
    
    localStorage.setItem('listagem', JSON.stringify(lista_despesas))
    document.getElementById('formdespesa').reset()
    exibir_despesas()
})


function exibir_despesas(){
    var lista_despesas = JSON.parse(localStorage.getItem('listagem')) || []
    var output = document.getElementById('output')
    output.innerHTML = ''
    for(let i=0; i<lista_despesas.length; i++){
        let li = document.createElement('li')
        li.textContent = 'Data:' +lista_despesas[i].data + '      |    Nome:' +lista_despesas[i].nome + '    |  valor:' +lista_despesas[i].valor
        output.appendChild(li)
    }
}