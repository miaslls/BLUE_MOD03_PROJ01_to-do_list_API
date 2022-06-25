'use strict';

const tasksService = require('../services/tasks.service');

const getAllTasksController = (req, res) => {
  const allTasks = tasksService.getAllTasksService();
  res.status(200).send(allTasks);
};

const getTasklistController = (req, res) => {
  const tasklistParam = req.params.tasklist;
  const chosenTasklist = tasksService.getTasklistService(tasklistParam);
  res.status(200).send(chosenTasklist);
};

const getTaskByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenTask = tasksService.getTaskByIdService(idParam);
  res.status(200).send(chosenTask);
};

const addTaskController = (req, res) => {
  const taskBody = req.body;
  const newTask = tasksService.addTaskService(taskBody);
  res.status(201).send({ message: 'added', newTask });
};

const updateTaskController = (req, res) => {
  const idParam = Number(req.params.id);
  const taskBody = req.body;
  const updatedTask = tasksService.updateTaskService(idParam, taskBody);
  res.status(200).send({ message: 'updated', updatedTask });
};

const deleteTaskController = (req, res) => {
  const idParam = Number(req.params.id);
  const deletedTask = tasksService.deleteTaskService(idParam);
  res.status(200).send({ message: 'deleted', deletedTask });
};

module.exports = {
  getAllTasksController,
  getTasklistController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
};
