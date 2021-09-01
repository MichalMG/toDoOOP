class Tasks {
  constructor() {
    this.tasks = [{
      task: "pierwszy",
      done: false,
      index: 0
    }, {
      task: "drugi",
      done: false,
      index: 1
    }, {
      task: "trzeci",
      done: true,
      index: 2
    }];
    this.returTasks = () => this.tasks;
  }

  addTask(task) {
    const index = this.tasks.length;
    const newTask = {
      task,
      done: false,
      index
    };
    this.tasks.push(newTask);
    return newTask;
  }

  doneTask(index) {
    this.tasks[index].done = true;
  }

  deleteTask(index) {
    const newTasksArray = this.tasks.filter(task => task.index !== index);
    newTasksArray.forEach((task, index) => {
      task.index = index;
    });
    this.tasks = newTasksArray;
  }
}