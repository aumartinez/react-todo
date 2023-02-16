import React, { useState } from 'react';
import '../css/taskform.css';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const elem = e.target;
    setInput(elem.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(taskNew)
  };

  return (
    <form className='task-form'
    onSubmit={handleSubmit}>
      <input
      className='task-input'
      type='text'
      placeholder='Add a task...'
      name='text'
      onChange={handleChange}
      />
      <button
      className='task-btn'
      >
        Add task
      </button>
    </form>
  );
};

export default TaskForm;