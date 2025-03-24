import { schedulesDay } from "../schedules/load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

// Recarregar a lista de horários quando a data for alterada
selectedDate.onchange = () => {
  schedulesDay();
};
