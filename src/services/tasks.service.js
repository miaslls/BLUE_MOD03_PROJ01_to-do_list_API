'use strict';

const tasks = [
  {
    id: 1,
    text: 'sample task 1',
    tasklist: 'personal',
    priority: true,
    completed: false,
  },
  {
    id: 2,
    text: 'sample task 2',
    tasklist: 'household',
    priority: false,
    completed: true,
  },
  {
    id: 3,
    text: 'sample task 3',
    tasklist: 'work',
    priority: true,
    completed: true,
  },
];

const getAllTasksService = () => tasks;

const getTasklistService = (tasklist) => {
  const chosenTasklist = [];

  for (let task of tasks) {
    if (task.tasklist === tasklist) {
      chosenTasklist.push(task);
    }
  }

  return chosenTasklist;
};

const getTaskByIdService = (id) => {
  return tasks.find((task) => task.id === id);
};

const addTaskService = (newTask) => {
  const newId = tasks[tasks.length - 1].id + 1;
  newTask.id = newId;
  tasks.push(newTask);
  return newTask;
};

const updateTaskService = (id, updatedTask) => {
  updatedTask.id = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex] = updatedTask;
  return updatedTask;
};

const deleteTaskService = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  const deletedTask = tasks[taskIndex];
  tasks.splice(taskIndex, 1);
  return deletedTask;
};

module.exports = {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
};
