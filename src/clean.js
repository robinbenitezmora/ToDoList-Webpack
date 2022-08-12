import { storage } from './storage.js';

const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('task'));
  const taskContainer = document.getElementById('task-container');
  taskContainer.forEach(element => {
    if (element.classList.contains('list-item')) {
      element.remove();
    }    
  });
  let count = 0;
  const data = Array.from(localData).filter(element => element.completed === false);
  data.map(element => element.index = count += 1);
  storage(data);
};

export { clearAll };