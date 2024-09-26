/*
Scrivere una funzione che permette di eseguire lo swap di due elementi di un array.La funzione avrà la seguente firma: swap(lista, pos1, pos2).Esempio dato lista=[1,3,2,4,6] se eseguiamo swap(lista, 2,4) l’array diventerà [1,3,6,4,2].
*/

const input = document.getElementById("inputText") ;
const enter = document.getElementById("enter") ;
const table = document.getElementById("table") ;
const divLista = document.getElementById("divLista") ;

const template = `<button type="button" id="%ID_BOTTONE" class="bottone btn btn-dark">%VALORE</button>` ;

const lista = [1, 2, 3, 4] ;
let selezionati = 0 ;
let posizioni = [] ;

const swap = function(lista, pos1, pos2) {
  let tmp = lista[pos1] ;
  lista[pos1] = lista[pos2] ;
  lista[pos2] = tmp;
}

const render = (arr) => {
  console.log("-------") ;

  let newHTML = "" ;
  arr.forEach((element, index) => {
    newHTML += template.replace("%ID_BOTTONE", index) ;
		newHTML = newHTML.replace("%VALORE", element) ;
  }) ;
	divLista.innerHTML = newHTML ;

	const bottoni = document.querySelectorAll(".bottone") ;
  bottoni.forEach((element) => {
		element.onclick = () => {
			selezionati++ ;
			console.log(selezionati) ;
			posizioni.push(element.id) ;

			if (selezionati === 2) {
				swap(lista, posizioni[0], posizioni[1]) ;
				render(lista) ;
				selezionati = 0 ;
			}
		}

    console.log(element) ;
  }) ;
}

render(lista) ;

enter.onclick = () => {
  if (input.value !== "") {
    if (!isNaN(input.value)) {
      lista.push(input.value) ;

      render(lista) ;
  	} else {
      alert("Errore durante l'inserimento") ;
    }
  }
  input.value = "" ;
}