let tasksList = [];
let isModified = false;
let todoModified = null;

const desc = document.getElementById('input');

const saveData = () => {
  localStorage.setItem('todo', JSON.stringify(tasksList));
};

const getData = () => {
  const localFormData = JSON.parse(localStorage.getItem('todo'));
  if (localFormData === null) {
    tasksList = [];
  } else {
    tasksList = localFormData;
  }
};

const showtasksList = () => {
  const ul = document.getElementById('list');
  ul.innerHTML = '';

  const edittasksList = (todo) => {
    isModified = true;
    todoModified = todo;
    const desc = document.getElementById('input');
    desc.value = todo.description;
    desc.focus();
  };

  const removetasksList = (indexID) => {
    tasksList = tasksList.filter((ind) => ind.index !== indexID);
    tasksList = tasksList.map((todo, index) => ({
      description: todo.description,
      completed: todo.completed,
      index: index + 1,
    }));
    desc.value = null;
    isModified = false;
    showtasksList();
  };

  const activetasksList = (todo) => {
    for (let i = 0; i < tasksList.length; i += 1) {
      if (tasksList[i].index === todo.index) {
        tasksList[i].completed = !todo.completed;
        break;
      }
    }
    saveData();
  };

  tasksList.forEach((data) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    li.setAttribute('draggable', true);
    li.classList.add('list-group-item');
    checkbox.classList.add('checkInput');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('value', data.index);

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('label');
    todoDescription.innerText = data.description;

    const editButton = document.createElement('div');
    const removeButton = document.createElement('button');
    removeButton.classList.add('hide');
    removeButton.setAttribute('type', 'button');
    removeButton.innerHTML = '<i class="fa fa-lg fa-trash icon"></i>';

    const pointsBtn = document.createElement('button');
    pointsBtn.classList.add('more-btn');
    pointsBtn.setAttribute('type', 'button');
    pointsBtn.innerHTML = '<i class="fa fa-ellipsis-v pointsBtn"></i>';

    li.appendChild(checkbox);
    li.appendChild(todoDescription);

    editButton.appendChild(removeButton);
    editButton.appendChild(pointsBtn);

    li.appendChild(editButton);

    ul.appendChild(li);

    const actions = () => {
      const desc = document.getElementById('input');
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

    if (data.completed) {
      checkbox.checked = true;
      todoDescription.classList.add('commuted');
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        todoDescription.classList.add('commuted');
      } else todoDescription.classList.remove('commuted');
      activetasksList(data);
    });

    pointsBtn.addEventListener('click', () => {
      actions();
    });

    removeButton.addEventListener('click', () => {
      removetasksList(data.index);
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
        return { ...todo, description: desc.value };
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

const clearAll = () => {
  tasksList = tasksList.filter((todo) => !todo.completed);
  tasksList = tasksList.map((todo, index) => (
    { completed: todo.completed, description: todo.description, index: index + 1 }));
  isModified = false;
  desc.value = null;
  saveData();
  showtasksList();
};

export {
  getIsModified, getData, addtasksList, saveEdit, showtasksList, clearAll,
};
