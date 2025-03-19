function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value.trim(); // Remove espaços extras
    var listItem = document.createElement("li");

    if (text.length === 0) {
        alert("A tarefa precisa ter mais que 1 caractere!");
        return; // Sai da função para evitar adicionar uma tarefa vazia
    }
  
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

    // Limpa o campo de entrada após adicionar a tarefa
    document.getElementById("task_name").value = "";
}