const express = require('express');
const routes = express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask } = require('../controllers/tasks');

routes.route('/').get(getAllTasks).post(createTask);
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask);


module.exports = routes;    