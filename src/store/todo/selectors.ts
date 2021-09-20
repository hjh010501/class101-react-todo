import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.todo;

const TodoListSelector = createSelector(baseSelector, state => state.todolist);

export { TodoListSelector };
