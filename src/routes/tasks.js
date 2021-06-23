import { Router } from 'express';
import { saveTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from '../controllers/tasks';

const router = Router();

//----------Ver todas las tareas---------
router.get('/tasks', getTasks);
//---------------------------------------

//------------contar las tareas----------
router.get('/tasks/count', getTaskCount);
//---------------------------------------

//----------Ver una sola tarea-----------
router.get('/tasks/:id', getTask);
//---------------------------------------

//------------Crear una tarea------------
router.post('/tasks', saveTask);
//---------------------------------------

//------------Borrar una tarea-----------
router.delete('/tasks/:id', deleteTask);
//---------------------------------------

//------------Editar una tarea-----------
router.put('/tasks/:id', updateTask);
//---------------------------------------

export default router;
