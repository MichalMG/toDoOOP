class ToDo {
  constructor() {
    this.tasks = new Tasks();

    this.inputValue = document.getElementById('task');
    this.resultContainer = document.querySelector('.result');

    document.getElementById('taskBtn').addEventListener('click', this.addTask.bind(this));
    this.inputValue.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        this.addTask();
      }
    })

    this.renderTask();
  }


  addTask() {
    const newTask = this.inputValue.value;
    this.tasks.addTask(newTask);
    this.inputValue.value = "";
    this.renderTask();
  }

  renderTask(tasksArray = this.tasks.returTasks()) {
    this.resultContainer.innerText = "";
    if (tasksArray.length === 0) {
      this.resultContainer.classList.remove('bg-dark');
      this.resultContainer.classList.add('alert-warning');
      this.resultContainer.innerHTML = `<h2 class="text-dark text-center"> Aktualnie brak zadań do wykonania </h2>`;
      return;
    }
    if (this.resultContainer.classList.contains('alert-warning')) {
      this.resultContainer.classList.remove('alert-warning');
      this.resultContainer.classList.add('bg-dark');
    };
    tasksArray.forEach(task => {
      const taskContainer = document.createElement('div');
      taskContainer.className = 'task d-flex align-items-center justify-content-between my-2';

      const taskParagraph = document.createElement('p');
      taskParagraph.className = `mb-0 ${task.done ? 'text-secondary' : ''}`;
      taskParagraph.innerText = task.task;

      const btnContainer = document.createElement('div');

      const taskButton = document.createElement('button');
      taskButton.className = 'btn btn-info delete';
      taskButton.innerText = 'Usuń';
      taskButton.addEventListener('click', () => {
        this.tasks.deleteTask(task.index);
        this.renderTask();
      });

      const doneButton = document.createElement('button');
      doneButton.className = 'btn btn-warning done me-2';
      doneButton.innerText = 'Zrobione';
      doneButton.disabled = task.done;
      doneButton.addEventListener('click', () => {
        this.tasks.doneTask(task.index);
        this.renderTask();
      })

      taskContainer.appendChild(taskParagraph);
      btnContainer.appendChild(doneButton);
      btnContainer.appendChild(taskButton);
      taskContainer.appendChild(btnContainer);
      this.resultContainer.appendChild(taskContainer);
    })
  }

}

const toDo = new ToDo();