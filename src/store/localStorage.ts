export const saveTodoData = (todoData: TodoItem[]) => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

export const loadTodoData = (): TodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
