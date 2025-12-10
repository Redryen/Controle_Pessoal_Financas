document.getElementById("formcadastro").addEventListener("submit", function(event){

    event.preventDefault()

    var data = document.getElementById("data").value
    var nome = document.getElementById("nome").value
    var valor = parseFloat(document.getElementById("valor").value)

    var despesa = { data: data, nome: nome, valor: valor }

    var lista_despesa = JSON.parse(localStorage.getItem('listagem')) || []
    lista_despesa.push(despesa)

    localStorage.setItem('listagem', JSON.stringify(lista_despesa))
    document.getElementById('formcadastro').reset()

    exibir_despesa()
    exibir_resumo()
})


document.getElementById("formsalario").addEventListener("submit", function(event){

    event.preventDefault()

    var salario = parseFloat(document.getElementById("salario").value)

    var salarioo = { salario: salario }

    var lista_salario = JSON.parse(localStorage.getItem('lista')) || []
    lista_salario.push(salarioo)

    localStorage.setItem('lista', JSON.stringify(lista_salario))
    document.getElementById('formsalario').reset()

    exibir_resumo()
})




function exibir_despesa(){
    var lista_despesa = JSON.parse(localStorage.getItem('listagem')) || []
    var despesa = document.getElementById('despesa')
    despesa.innerHTML = ''

    for (let i = 0; i < lista_despesa.length; i++) {
        let item = lista_despesa[i]

        let valor = parseFloat(item.valor)

        let li = document.createElement('li')
        li.textContent =
        'Data: ' + item.data  + ' | Nome: ' + item.nome  + ' | Valor: R$ ' + valor

        despesa.appendChild(li)
    }
}




function exibir_resumo(){
    var lista_despesa = JSON.parse(localStorage.getItem('listagem')) || []
    var lista_salario = JSON.parse(localStorage.getItem('lista')) || []

    var totalD = 0
    for (let i = 0; i < lista_despesa.length; i++) {
        var v = parseFloat(lista_despesa[i].valor)
       var  totalD = totalD + v
    }

    var totalS = 0
    for (let i = 0; i < lista_salario.length; i++) {
        var s = parseFloat(lista_salario[i].salario)
        var totalS = totalS + s
    }

    var saldo = totalS - totalD

    var resumo = document.getElementById('resumo')
    resumo.innerHTML = ''
    
        if(saldo < 0){
            let li = document.createElement('li')
            li.style.color="#9c0c0cfd"
            li.textContent ='Saldo: R$ ' + saldo 

            resumo.appendChild(li)  
        }

        else{
             let li = document.createElement('li')
            li.style.color="#0dc91cfd"
            li.textContent ='Saldo: R$ ' + saldo 

            resumo.appendChild(li)   
        }

        let lisalario = document.createElement('li')
        lisalario.textContent = 'Salário total: R$ ' + totalS 

        resumo.appendChild(lisalario)  

        let lidespesa = document.createElement('li')
        lidespesa.textContent =  'Total despesas: R$ ' + totalD

        resumo.appendChild(lidespesa)       
    
}


    function limpar(){
         var lista_despesas = JSON.parse(localStorage.getItem('listagem')) || []
         var lista_salario = JSON.parse(localStorage.getItem('lista')) || []

        localStorage.setItem('listagem', JSON.stringify([]))
        localStorage.setItem('lista', JSON.stringify([]))

        exibir_despesa()
        exibir_resumo()
    }




