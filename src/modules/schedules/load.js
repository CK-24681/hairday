import { hoursLoad } from "../form/hours-load.js"
import {scheduleFecthByDay} from "../../services/schedule-fetch-by-day.js"
import {scheduleShow} from "../schedules/show.js"

const selectedDate = document.querySelector("#date")
export async function schedulesDay(){
  //Obtém a data do input
  const date = selectedDate.value

  //Busca na API os agendamentos para carregar no lado direito da tela.
  const dailySchedules = await scheduleFecthByDay({date})
 
  //Exibe os agendamentos
  scheduleShow({dailySchedules})
  //Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)

  //Renderiza as horas disponíveis.
  hoursLoad({date, dailySchedules})
}