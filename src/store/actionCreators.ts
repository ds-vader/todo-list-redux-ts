import { ADD_TASK, REMOVE_TASK } from './actionTypes';

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: ADD_TASK,
    task,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function removeTask(task: ITask) {
  const action: TaskAction = {
    type: REMOVE_TASK,
    task,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
