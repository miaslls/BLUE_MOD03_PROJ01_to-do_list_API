'use strict';

const tasksService = require('../services/tasks.service');

const getAllTasksController = (req, res) => {
  const allTasks = tasksService.getAllTasksService();
  res.send(allTasks);
};

const getTasklistController = (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = tasksService.getTasklistService(tasklistParam);
  if (chosenTasklist[0] === undefined) {
    res.send({ message: 'tasklist empty' });
  } else {
    res.send(chosenTasklist);
  }
};

const getTaskByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenTask = tasksService.getTaskByIdService(idParam);

  if (!chosenTask) {
    res.send({ message: 'task not found' });
  } else {
    res.send(chosenTask);
  }
};

const addTaskController = (req, res) => {
  const taskBody = req.body;
  const newTask = tasksService.addTaskService(taskBody);
  res.send({ message: 'added', newTask });
};

const updateTaskController = (req, res) => {
  const idParam = Number(req.params.id);
  const taskBody = req.body;
  const updatedTask = tasksService.updateTaskService(idParam, taskBody);
  if (!updatedTask) {
    res.send({ message: 'task not found' });
  } else {
    res.send({ message: 'updated', updatedTask });
  }
};

const deleteTaskController = (req, res) => {
  const idParam = Number(req.params.id);
  const deletedTask = tasksService.deleteTaskService(idParam);
  if (!deletedTask) {
    res.send({ message: 'task not found' });
  } else {
    res.send({ message: 'deleted', deletedTask });
  }
};

module.exports = {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
};
