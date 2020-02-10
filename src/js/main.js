let inputToDo; //wpisywanie zadania
let headingAlert; //brak zadan
let btnAddTask; //przycisk do dodawania
let taskList; //ul lista
let allTasks;

let popup;
let popupAlert;
let editTodo;
let popupInput;
let addPopupBtn;
let closePopupBtn;
let idNumber = 0;

const main = () => {
  getElemnts();
  getEvents();
};

const getElemnts = () => {
  inputToDo = document.querySelector('.list__input');
  headingAlert = document.querySelector('.task__text');
  btnAddTask = document.querySelector('.list__btn');
  taskList = document.querySelector('.task__list');

  popup = document.querySelector('.popup');
  popupAlert = document.querySelector('.popup__text');
  popupInput = document.querySelector('.popup__input');
  addPopupBtn = document.querySelector('.popup__btn--confirm');
  closePopupBtn = document.querySelector('.popup__btn--cancel');
  allTasks = taskList.getElementsByTagName('li');

};

const getEvents = () => {
  btnAddTask.addEventListener('click', addNewTask);
  taskList.addEventListener('click', checkClick);
  closePopupBtn.addEventListener('click', closePopup);
  addPopupBtn.addEventListener('click', changeTodo);
  inputToDo.addEventListener('keyup', ifEnter);
};

const addNewTask = () => {
  if (inputToDo.value !== '') {
    idNumber++;
    const taskItem = document.createElement('li');
    taskItem.classList.add('task__item');
    taskItem.setAttribute('id', `todo-${idNumber}`);
    taskItem.textContent = inputToDo.value;
    taskList.appendChild(taskItem);

    const boxTools = document.createElement('div');
    boxTools.classList.add('task__box');
    boxTools.innerHTML = `<button class="task__btn task__btn--add"><i class="fas fa-plus"></i></button>
    <button class="task__btn task__btn--edit">EDYTUJ</button>
    <button class="task__btn task__btn--remove"><i class="fas fa-minus"></i></button>`;
    taskItem.appendChild(boxTools);

    inputToDo.value = '';
    headingAlert.textContent = '';
  } else {
    headingAlert.textContent = `Wpisz treść zadania`;
  }
};

const ifEnter = () => {
  if (event.keyCode === 13) {
    addNewTask();
  }
}

const checkClick = (e) => {
  if (e.target.closest('button').classList.contains('task__btn--add')) {
    e.target.closest('li').classList.toggle('completed');
  } else if (e.target.closest('button').classList.contains('task__btn--edit')) {
    editTask(e);
  } else if (e.target.closest('button').classList.contains('task__btn--remove')) {
    deleteTask(e);
  }
};

const editTask = (e) => {
  const oldTodo = e.target.closest('li').id;
  editTodo = document.getElementById(oldTodo);
  popupInput.value = editTodo.firstChild.textContent;
  popupInput.value = '';
  popup.style.display = 'block';
};

const changeTodo = () => {
  if (popupInput.value !== '') {
    editTodo.firstChild.textContent = popupInput.value;
    popup.style.display = 'none';
    popupAlert.textContent = '';
  } else {
    popupAlert.textContent = `Wpisz treść!`;
  };
}

const closePopup = () => {
  popup.style.display = 'none';
  popupAlert.textContent = '';
};

const deleteTask = (e) => {
  const deleteTodo = e.target.closest('li');
  deleteTodo.remove();

  if (allTasks.length === 0) {
    headingAlert.textContent = `Brak zdadań na liście`;
  }
}

document.addEventListener('DOMContentLoaded', main);