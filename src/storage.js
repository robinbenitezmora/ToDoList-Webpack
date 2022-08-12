export default storage = (task) => {
  localStorage.setItem('taks', JSON.stringify(task));
};