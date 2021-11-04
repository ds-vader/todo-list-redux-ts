import { ADD_TASK, REMOVE_TASK } from './actionTypes';

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: 'First',
      body: 'Description',
    },
    {
      id: 2,
      title: 'Second',
      body: 'Description',
    },
  ],
};

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: ITask = {
        id: Math.random(),
        title: action.task.title,
        body: action.task.body,
      };
      return {
        ...state,
        tasks: state.tasks.concat(newTask),
      };
    case REMOVE_TASK:
      const updatedTasks: ITask[] = state.tasks.filter(
        (task) => task.id !== action.task.id
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
  }
  return state;
};

export default reducer;
