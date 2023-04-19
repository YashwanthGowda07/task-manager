import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={(e) => {
          e.preventDefault();
          addTask({
            title: e.target.elements.title.value,
            dueDate: e.target.elements.dueDate.value,
            priority: e.target.elements.priority.value,
            category: e.target.elements.category.value,
            completed: false
          });
          e.target.reset();
        }}>
        <input type="text" name="title" placeholder="Task Title" />
        <input type="date" name="dueDate" />
        <input type="text" name="category" placeholder="Category" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(index)}
              />
              {task.title}
            </label>
            <span>Due: {task.dueDate}</span>
            <span>Priority: {task.priority}</span>
            <span>Category: {task.category}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
