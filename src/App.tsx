import React, { FC, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './styles.css';

import { Task } from './components/Task';
import { AddTask } from './components/AddTask';
import { addTask, removeTask } from './store/actionCreators';
import { Dispatch } from 'redux';

const App: FC = () => {
  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveTask = useCallback(
    (task: ITask) => dispatch(addTask(task)),
    [dispatch]
  );

  return (
    <main>
      <h1>ToDoList</h1>
      <AddTask saveTask={saveTask} />
      {tasks.map((task: ITask) => (
        <Task key={task.id} task={task} removeTask={removeTask} />
      ))}
    </main>
  );
};

export default App;
