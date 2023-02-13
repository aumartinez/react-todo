import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../css/task.css'

const Task = ({id, text, completed, completedTask, removedTask}) => {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div 
      className='task-text'
      onClick={() => completedTask(id)}
      >
        {text}
      </div>
      <div 
      className='task-container-icons'
      onClick={() => removedTask(id)}
      >
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
};

export default Task;