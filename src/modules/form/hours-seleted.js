export function hoursSelected() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // primeiro vamos remover a classe de hora selecionada de todas li
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // depois vamos adicionar a classe de hora selecionada na li clicada
      const hourSelected = selected.target;
      hourSelected.classList.add("hour-selected");
    });
  });
}
