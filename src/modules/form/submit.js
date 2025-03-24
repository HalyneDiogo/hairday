import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const today = dayjs().format("YYYY-MM-DD");

// Carregar a data atual no campo de data
selectedDate.value = today;

// Definir uma data mínima para o campo de data como sendo a data atual
selectedDate.min = today;

form.onsubmit = (event) => {
  // evitar que o navigador recarregue a página
  event.preventDefault();

  try {
    // Recuperar o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, preencha o nome do cliente.");
    }

    // Recuperar o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    // Verificar se o horário foi selecionado
    if (!hourSelected) {
      return alert("Por favor, selecione um horário.");
    }
    // Recuperar somente a hora
    const [hour] = hourSelected.textContent.split(":");
    console.log(hour);

    // Insere a hora na data selecionada
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerar um ID
    const id = new Date().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert(
      "Mão foi possível realizar o agendamento, tente novamente mais tarde"
    );
    console.error(error);
  }
};
