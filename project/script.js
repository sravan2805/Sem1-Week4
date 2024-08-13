// script.js

// Array to store habits
let habits = [];

// Function to render the habit list
function renderHabits(filterCategory = '') {
    const habitList = document.getElementById('habitList');
    habitList.innerHTML = '';

    habits
        .filter(habit => !filterCategory || habit.category === filterCategory)
        .forEach((habit, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${habit.name} (Category: ${habit.category})
                <button class="edit" onclick="editHabit(${index})">Edit</button>
                <button class="delete" onclick="deleteHabit(${index})">Delete</button>
            `;
            habitList.appendChild(listItem);
        });
}

// Function to add a new habit
function addHabit() {
    const name = document.getElementById('habitName').value.trim();
    const category = document.getElementById('habitCategory').value.trim();

    if (name && category) {
        habits.push({ name, category });
        renderHabits();
        document.getElementById('habitName').value = '';
        document.getElementById('habitCategory').value = '';
    } else {
        alert('Please enter both name and category.');
    }
}

// Function to edit a habit
function editHabit(index) {
    const name = prompt('Enter new habit name:', habits[index].name);
    const category = prompt('Enter new category:', habits[index].category);

    if (name && category) {
        habits[index] = { name, category };
        renderHabits();
    }
}

// Function to delete a habit
function deleteHabit(index) {
    if (confirm('Are you sure you want to delete this habit?')) {
        habits.splice(index, 1);
        renderHabits();
    }
}

// Function to filter habits
function filterHabits() {
    const category = document.getElementById('filterCategory').value;
    renderHabits(category);
}
