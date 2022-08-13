const desc = document.getElementById('input');

let tasksList = [];
let isModified = false;
let todoModified = null;

const getData = () => {
  const localFormData = JSON.parse(localStorage.getItem('todo'));
  if (localFormData === null) {
    tasksList = [];
  } else {
    tasksList = localFormData;
  }
};

const saveData = () => {
  localStorage.setItem('todo', JSON.stringify(tasksList));
};

const showtasksList = () => {
  const ul = document.getElementById('list');
  ul.innerHTML = '';

  const edittasksList = (todo) => {
    isModified = true;
    todoModified = todo;
    desc.value = todo.description;
    desc.focus();
  };

  const removetasksList = (indexID) => {
    desc.value = null;
    isModified = false;

    tasksList = tasksList.filter((ind) => ind.index !== indexID);
    tasksList = tasksList.map((todo, index) => ({
      description: todo.description,
      completed: todo.completed,
      index: index + 1,
    }));
    showtasksList();
  };

  tasksList.forEach((data) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkInput');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('value', data.index);

    if (data.completed) {
      checkbox.checked = true;
    }

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('label');
    todoDescription.innerHTML = data.description;

    const editButton = document.createElement('div');
    const removeButton = document.createElement('button');
    removeButton.classList.add('hide');
    removeButton.setAttribute('type', 'button');
    removeButton.innerHTML = '<i class="fa fa-lg fa-trash icon"></i>';

    const pointsBtn = document.createElement('button');
    pointsBtn.classList.add('more-btn');
    pointsBtn.setAttribute('type', 'button');
    pointsBtn.innerHTML = '<i class="fa fa-ellipsis-v"></i>';

    li.appendChild(checkbox);
    li.appendChild(todoDescription);

    editButton.appendChild(removeButton);
    editButton.appendChild(pointsBtn);

    li.appendChild(editButton);

    ul.appendChild(li);

    removeButton.addEventListener('click', () => {
      removetasksList(data.index);
    });

    const actions = () => {
      if (!isModified) {
        removeButton.classList.toggle('hide');
        desc.value = null;
        isModified = false;
        edittasksList(data);
        pointsBtn.classList.toggle('hide');
      } else {
        showtasksList();
        desc.value = null;
        isModified = false;
      }
    };

    pointsBtn.addEventListener('click', () => {
      actions();
    });

    todoDescription.addEventListener('click', () => {
      actions();
    });
  });
  saveData();
};

const addtasksList = () => {
  const desc = document.getElementById('input');
  if (desc.value) {
    const completed = false;
    const description = desc.value;
    const index = tasksList.length + 1;
    tasksList.push({ completed, description, index });
    showtasksList();
    saveData();
    desc.value = null;
  }

  tasksList = tasksList.map((todo, index) => ({
    description: todo.description,
    completed: todo.completed,
    index: index + 1,
  }));
};

const saveEdit = () => {
  const desc = document.getElementById('input');
  if (desc.value) {
    tasksList = tasksList.map((todo) => {
      if (todo.index === todoModified.index) {
        return {
          description: desc.value,
          completed: todo.completed,
          index: todo.index,
        };
      }
      return todo;
    });
    showtasksList();
    saveData();
    desc.value = null;
    isModified = false;
    todoModified = null;
  }
};

const getIsModified = () => isModified;

window.onload = () => {
  getData();
  showtasksList();
};

desc.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    if (!getIsModified()) addtasksList();
    else saveEdit();
  }
});
