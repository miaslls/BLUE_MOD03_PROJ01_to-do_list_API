'use strict';

const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks.controller');

router.get('/tasklist/all', tasksController.getAllTasksController);
router.get('/tasklist/:tasklist', tasksController.getTasklistController);
router.get('/task/:id', tasksController.getTaskByIdController);
router.post('/task/add', tasksController.addTaskController);
router.put('/task/update/:id', tasksController.updateTaskController);
router.delete('/task/delete/:id', tasksController.deleteTaskController);

module.exports = router;
