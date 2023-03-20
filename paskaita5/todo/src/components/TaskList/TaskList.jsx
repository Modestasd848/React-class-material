import React from 'react';
import Task from '../Task/Task.jsx';

export default function TaskList(props) {
  const { tasks, handleCheckbox } = props;
  console.log(tasks);
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            handleCheckbox={handleCheckbox}
            index={index}
            text={task.text}
            isFinished={task.isFinished}
          />
        );
      })}
    </div>
  );
}
