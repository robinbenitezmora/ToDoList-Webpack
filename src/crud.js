import { storage } from "./storage";

const list = document.getElementById('list');
const input = document.getElementById('input');
const btnEnter = document.getElementById('enter');

class Tasks { 
  constructor (description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let activities = [];

// Add task function

const addTask = (task) => {
  const element = `
  <li class='list-item' id='element'>          
    <i class='fas fa-circle co" id='0' data-='finished'></i>
    <p class='text'>${task}</p>
    <i class='fas fa-trash de' id='0' data-='eliminated'></i>
  </li>
`;
  list.insertAdjacentHTML('beforeend', element);

  btnEnter.addEventListener('click', () => {
    const task = input.value;
    if (task === '') {
      alert('Please enter a task');
    } else {
      addTask(task);
      input.value = '';
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const task = input.value;
      if (task === '') {
        alert('Please enter a task');
      } else {
        addTask(task);
        input.value = '';
      }
    }
  });
}

const newTask = new Tasks('', false, 0);
activities.push(newTask);
storage(activities);

export { addTask };