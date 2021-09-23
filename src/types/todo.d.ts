interface TodoItemContent {
  content: string;
}

interface TodoItem extends TodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
