let inputToDo;
let headingAlert;
let btnAddTask;
let taskList;

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



document.addEventListener('DOMContentLoaded', main);