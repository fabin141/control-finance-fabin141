function eventFilter() {
    const btnEntrada = document.querySelectorAll('.filterItem');
    const mainList = document.getElementById('conteinerMaior')
    btnEntrada.forEach(button => {
        button.addEventListener('click', () =>{
            const filter = button.innerText
            mainList.innerHTML = ''
            if(filter === "Todos"){
                criandoUl(dataBase)
            }
            const final = filterEntSai(filter)
            criandoUl(final);
        })
    })
  
  }
  
  function filterEntSai(text) {
    const renderFiltered = dataBase.filter(item => item.categoryID.includes(text))
  
    return renderFiltered
  }
  eventFilter()



