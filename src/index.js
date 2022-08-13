import './index.css';
import {
  getIsModified, getData, addtasksList, saveEdit, showtasksList, clearAll,
} from './modules/crud.js';

const desc = document.getElementById('input');

desc.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    if (!getIsModified()) addtasksList();
    else saveEdit();
  }
});

const deleteButton = document.getElementById('deleteBtn');
deleteButton.addEventListener('click', () => {
  clearAll();
});

window.onload = () => {
  getData();
  showtasksList();
};
