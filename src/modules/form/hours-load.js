import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursSelected } from "./hours-seleted.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  // Limpar a lista de horários
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    // Recuperar somente a hora
    const [scheduleHour] = hour.split(":");

    // Adicionar a hora na data selecionada e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };

    // Definir o horário como indisponível se estiver no passado
  });

  // Renderizar os horários disponíveis
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.textContent = hour;
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    switch (hour) {
      case "09:00":
        hourHeaderAdd("Manhã");
        break;
      case "13:00":
        hourHeaderAdd("Tarde");
        break;
      case "18:00":
        hourHeaderAdd("Noite");
        break;
    }

    hours.appendChild(li);
  });

  hoursSelected();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
