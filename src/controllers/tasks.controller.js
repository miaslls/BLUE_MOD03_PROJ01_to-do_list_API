'use strict';

const tasksService = require('../services/tasks.service');

const getAllTasksController = (req, res) => {
  const allTasks = tasksService.getAllTasksService();
  res.send(allTasks);
};

const getTasklistController = (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = tasksService.getTasklistService(tasklistParam);
  res.send(chosenTasklist);
};

const getTaskByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenTask = tasksService.getTaskByIdService(idParam);
  res.send(chosenTask);
};

module.exports = {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
};
