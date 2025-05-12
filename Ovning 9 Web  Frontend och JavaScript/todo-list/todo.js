const addButton = document.querySelector(".btn");
const inputField = document.querySelector("input[type='text']");
const taskList = document.querySelector(".list-group ul");

addButton.addEventListener("click", () => {
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the elements
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    const formCheck = document.createElement("div");
    formCheck.className = "form-check d-flex align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";

    const label = document.createElement("label");
    label.className = "form-check-label mb-0";
    label.textContent = taskText;

    // Decoration - line-through
    checkbox.addEventListener("change", () => {
        label.classList.toggle("text-decoration-line-through", checkbox.checked);
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "btn btn-sm btn-danger ms-2";
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    });

   
    formCheck.appendChild(checkbox);
    formCheck.appendChild(label);

    listItem.appendChild(formCheck);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    // Field empty
    inputField.value = "";
});
