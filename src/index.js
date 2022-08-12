import './index.css';

const info = {
  data: [{ description: 'Javascript', completed: false, index: 1 },
    { description: 'HTML', completed: false, index: 2 },
    { description: 'CSS', completed: false, index: 3 },
    { description: 'React', completed: false, index: 4 },
    { description: 'Node', completed: false, index: 5 },
    { description: 'MongoDB', completed: false, index: 6 },
    { description: 'Express', completed: false, index: 7 }],
};

const toDoList = info.data;
const displayToDo = () => {
  const ListElement = document.getElementById('list');
  ListElement.innerHTML = '';

  toDoList.forEach((data) => {
    const todoLiElement = document.createElement('li');

    const todoCheckboxElement = document.createElement('input');
    todoCheckboxElement.classList.add('checkInput');
    todoCheckboxElement.setAttribute('type', 'checkbox');
    todoCheckboxElement.setAttribute('name', 'checkbox');
    todoCheckboxElement.setAttribute('value', data.index);

    if (data.completed) {
      todoCheckboxElement.checked = true;
    }

    const todoDescriptionElement = document.createElement('p');
    todoDescriptionElement.classList.add('label');
    todoDescriptionElement.innerText = data.description;

    todoLiElement.appendChild(todoCheckboxElement);
    todoLiElement.appendChild(todoDescriptionElement);
    ListElement.appendChild(todoLiElement);
  });
};

window.onload = () => {
  displayToDo();
};

const list = document.getElementById('list');
const input = document.getElementById('input');
const btnEnter = document.getElementById('enter');

// Add task function

const addTask = (task) => {
  const element = `
  <li class='list-item' id='element'>          
    <i class='far fa-square co" id='0' data-='finished'></i>
    <p class='text'>${task}</p>
    <i class='fas fa-trash de' id='0' data-='eliminated'></i>
  </li>
`;
  list.insertAdjacentHTML('beforeend', element);
};

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