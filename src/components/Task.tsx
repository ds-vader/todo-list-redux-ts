import React, { FC, useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
  task: ITask;
  removeTask: (task: ITask) => void;
};

export const Task: FC<Props> = ({ task, removeTask }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTask = useCallback(
    (task: ITask) => dispatch(removeTask(task)),
    [dispatch, removeTask]
  );

  return (
    <div className="Task">
      <div>
        <h1>{task.title}</h1>
        <p>{task.body}</p>
      </div>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};
