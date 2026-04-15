import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.querySelector("#date")
export function schedulesDay(){
  //Obtém a data do input
  const date = selectedDate.value

  //Renderiza as horas disponíveis.
  hoursLoad({date})
  //Busca na API os agendamentos para carregar no lado direito da tela.

  //Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}