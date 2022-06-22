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

const addTaskController = (req, res) => {
  const taskBody = req.body;
  const newTask = tasksService.addTaskService(taskBody);
  res.send(newTask);
};

const updateTaskController = (req, res) => {
  const idParam = Number(req.params.id);
  const taskBody = req.body;
  const updatedTask = tasksService.updateTaskService(idParam, taskBody);
  res.send(updatedTask);
};

const deleteTaskController = (req, res) => {
  const idParam = req.params.id;
  const deletedTask = tasksService.deleteTaskService(idParam);
  res.send(deletedTask);
};

module.exports = {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
};
