import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../css/tasklist.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {    
    if (task.text.trim()) {   
      console.log('submitted');
      console.log(tasks);
      task.text = task.text.trim();
      const taskUpdate = [task, ...tasks];      
      setTasks(taskUpdate);
    }
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) => {
            return(
              <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default TaskList;