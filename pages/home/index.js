/* Desenvolva sua lógica aqui */
const container = document.querySelector('.conteiner')
const span = document.querySelector('#ValorSomado')
const divPrincipal = document.getElementById('conteinerMaior')
const remove = document.querySelector("#Remover")

function criandoUl (arr){
  let contador = 0
  for(let i = 0; i < arr.length; i++){
    const div = document.createElement("div")
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const div1 = document.createElement('div')
    const button = document.createElement('button')
    const img = document.createElement('img')
    remove.classList.add('noneDisplay')
    
    let element = arr[i]
    if(element.categoryID === 'Entrada'){
      contador += element.value 
    }else {
      contador - element.categoryID
    }
    img.src = "./assets/trash.png"
    button.innerText = element.categoryID
    p.innerText = `R$ ${element.value},00`

    span.innerText = `R$ ${contador},00`

    div1.append(button, img)
    li.append(p, div1)
    ul.append(li)
    div.append(ul)

    divPrincipal.appendChild(div)
    div.classList.add('redenrizarItem')
    div.id = 'mainList'
    ul.classList.add('redenrizarItemUl')
   img.classList.add('removendo')
    li.classList.add('redenrizarItemUlLi')
    
    p.classList.add('testReder')
    
    div1.classList.add('displayFlex')
    
    button.classList.add('btnTestRender')
    

  }
  
}
criandoUl(dataBase)
// //<div class="redenrizarItem">
//           <ul class="redenrizarItemUl">
//               <li class="redenrizarItemUlLi">
//                   <p class="testReder">
//                       R$ 19,00
//                   </p>
//                   <div class="displayFlex">
//                   <button class="btnTestRender">
//                       Entrada
//                   </button>
//                       <img src="./Src/img/trash.png" alt="Imagem Remove item">
//                   </div>
//               </li>
//           </ul>
//      </div>

function onlynumber(evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  //var regex = /^[0-9.,]+$/;
  let regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
