// Get references to DOM elements
const todoInput = document.getElementById('todo-input'); // Input field
const addBtn = document.getElementById('add-btn'); // Add button
const todosContainer = document.querySelector('.Parent-todos'); // Container for to-do items

// Add event listener to the Add button
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Get the value from the input field
    const todoValue = todoInput.value.trim();
    
    // Check if the input field is empty
    if (todoValue === '') {
        alert('Please enter a to-do!');
        return;
    }
    
    // Create a new to-do item container
    const todoItem = document.createElement('div');
    todoItem.classList.add('todos');
    
    // Add the to-do text in an h1 element
    const todoText = document.createElement('h1');
    todoText.textContent = todoValue;
    // Add the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // Append text and delete button to the to-do item container
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    
    // Append the to-do item container to the todos div
    todosContainer.appendChild(todoItem);
    
    // Clear the input field
    todoInput.value = '';
    
    // Add event listener to the delete button
    deleteBtn.addEventListener('click', () => {
        todosContainer.removeChild(todoItem); // Remove the to-do item
    });
});
