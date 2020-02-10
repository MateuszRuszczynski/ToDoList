let inputToDo; //wpisywanie zadania
let headingAlert; //brak zadan
let btnAddTask; //przycisk do dodawania
let taskList; //ul lista

const main = () => {
  getElemnts();
  getEvents();
};

const getElemnts = () => {
  inputToDo = document.querySelector('.list__input');
  headingAlert = document.querySelector('.list__heading');
  btnAddTask = document.querySelector('.list__btn');
  taskList = document.querySelector('.task__list');
};

const getEvents = () => {

};

const addNewTask = () => {
  if (inputToDo.value !== ' ') {
    const taskItem = document.createElement('li');
    taskItem.textContent = inputToDo.value;
  } else {

  }
}


document.addEventListener('DOMContentLoaded', main);