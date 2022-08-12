const storage = (task) => {
  localStorage.setItem('taks', JSON.stringify(task));
};

export default storage;