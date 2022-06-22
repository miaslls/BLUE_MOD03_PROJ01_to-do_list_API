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

const getAllTasksService = () => {
  return tasks;
};

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
  return tasks.find((task) => task.id == id);
};

module.exports = {
  getAllTasksService,
  getTasklistService,
  getTaskByIdService,
};
