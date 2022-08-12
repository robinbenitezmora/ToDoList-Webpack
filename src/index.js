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
}

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

