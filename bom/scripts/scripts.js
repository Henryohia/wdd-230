// Get Elements

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Add Event Listener for Add Button
button.addEventListener("click", () => {
  if (input.value !== "") {
    let chapter = input.value;
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
  }
  input.value = " ";
  input.focus();
});
