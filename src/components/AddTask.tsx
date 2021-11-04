import React, { FC, useState, FormEvent } from 'react';

type Props = {
  saveTask: (task: ITask | any) => void;
};

export const AddTask: FC<Props> = ({ saveTask }) => {
  const [task, setTask] = useState<ITask>({ title: '', body: '' });

  const handleTaskData = (e: FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewTask = (e: FormEvent) => {
    if (task.title !== '') {
      e.preventDefault();
      saveTask(task);
      setTask({ title: '', body: '' });
    }
  };

  return (
    <form onSubmit={addNewTask} className="Add-task">
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={task.title}
        onChange={handleTaskData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        value={task.body}
        onChange={handleTaskData}
      />
      <button disabled={task === undefined ? true : false}>Add task</button>
    </form>
  );
};
