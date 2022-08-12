import './index.css';

const tasks = {
  data: [
    { description: 'Learn JavaScript', completed: false, index: 0 },
    { description: 'Learn React', completed: false, index: 1 },
    { description: 'Learn Vue', completed: false, index: 2 },
    { description: 'Learn Angular', completed: false, index: 3 },
  ],
};

const toDoList = tasks.data;
const showtoDoList = () => {
  const ListElement = document.getElementById('list');
  ListElement.innerHTML = '';
  toDoList.forEach((data) => {
    const toDoListItem = document.createElement('li');
    const checkboxItem = document.createElement('input');
    checkboxItem.classList.add('checkInput');
    checkboxItem.setAttribute('type', 'checkbox');
    checkboxItem.setAttribute('name', 'checkbox');
    checkboxItem.setAttribute('value', data.index);

    if (data.completed) {
      checkboxItem.checked = true;
    }

    const toDoListDescriptionItem = document.createElement('p');
    toDoListDescriptionItem.classList.add('label');
    toDoListDescriptionItem.innerText = data.description;

    toDoListItem.appendChild(checkboxItem);
    toDoListItem.appendChild(toDoListDescriptionItem);
    ListElement.appendChild(toDoListItem);
  });
};

window.onload = () => {
  showtoDoList();
};

// const list = document.getElementById('list');
// const input = document.getElementById('input');
// const btnEnter = document.getElementById('enter');

// // Add task function

// const addTask = (task) => {
//   const element = `
//   <li class='list-item' id='element'>          
//     <i class='far fa-square co" id='0' data-='finished'></i>
//     <p class='text'>${task}</p>
//     <i class='fas fa-trash de' id='0' data-='eliminated'></i>
//   </li>
// `;
//   list.insertAdjacentHTML('beforeend', element);
// };

// btnEnter.addEventListener('click', () => {
//   const task = input.value;
//   if (task === '') {
//     alert('Please enter a task');
//   } else {
//     addTask(task);
//     input.value = '';
//   }
// });

// document.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     const task = input.value;
//     if (task === '') {
//       alert('Please enter a task');
//     } else {
//       addTask(task);
//       input.value = '';
//     }
//   }
// });