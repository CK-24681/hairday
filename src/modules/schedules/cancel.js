import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period")

//Gera evento de click para cada çista
periods.forEach((periods) => {
  periods.addEventListener("click", async(event) =>{
    if(event.target.classList.contains("cancel-icon")){
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      //Pega o ID
      const {id} = item.dataset
      console.log("ID capturado:", id)

      //Confirma que o ID foi selecionado
      if(id){
        //Confirma se o usuário quer cancelar
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

        if(isConfirm){
        //Faz a requisição na API para cancelar
        await scheduleCancel({id})

        //Recarrega a lista
        schedulesDay()
      }
      }
    }
  })
})