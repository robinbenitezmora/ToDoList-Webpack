class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const activities = [];

const newTask = new Tasks('', false, 0);
activities.push(newTask);