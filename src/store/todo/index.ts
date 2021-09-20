import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { TodoState } from './types';

export const initialState: TodoState = {
  todolist: [
    {
      id: '1',
      content: 'class101 강의 수강하기',
      completed: true,
    },
    {
      id: '2',
      content: 'Git 공부하기',
      completed: false,
    },
    {
      id: '3',
      content: 'Typescript 공부하기',
      completed: false,
    },
    {
      id: '4',
      content: 'React function component 라이프 사이클',
      completed: false,
    },
  ],
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoItem>) => {
        state.todolist.push(action.payload);
      },
      prepare: (content: string) => {
        const id = nanoid();
        return { payload: { id, content, completed: false } };
      },
    },
    checkTodo(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const todo = state.todolist.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { actions: TodoActions } = slice;

export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
