import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // Buscar na API os agenamentos para carregar na página
  // Mostrar na tela os horários disponíveis (horario futuro + não agendados)
  // Renderizar os horários disponíveis

  const date = selectedDate.value;

  hoursLoad({ date });
}
