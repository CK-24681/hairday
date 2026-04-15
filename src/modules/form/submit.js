import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")
const clientName = document.querySelector("#client")
const currentDate = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima sendo a atual.
selectedDate.value = currentDate
selectedDate.min = currentDate

form.onsubmit = (event) => {
  //Previne recarregamento da página
  event.preventDefault()

  try {
    //Recuperando nome do cliente.
    const name = clientName.value.trim()

    if(!name){
      return alert("Informe o nome do cliente!")
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Selecione a hora.")
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gera um ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}