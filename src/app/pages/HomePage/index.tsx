import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useTodoSlice } from 'store/todo';
import { TodoListSelector } from 'store/todo/selectors';
import styled from 'styled-components';

import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';
import { Title } from '../../components/Text';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 15px;

  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
`;

const TodoList = styled.div`
  height: 450px;
  overflow-y: auto;
  @media (max-width: 425px) {
    height: calc(100vh - 128px);
  }
`;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(TodoListSelector);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>오늘의 할일 :: To-Do</title>
        <meta name="description" content="오늘의 할일을 정리해봅시다." />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>
            할 일
            <span style={{ fontSize: '0.7em' }}> ({todoList.length}개)</span>
          </Title>
          <TodoInput
            addTodo={(todo: string) => dispatch(TodoActions.addTodo(todo))}
          />
          <TodoList>
            {todoList.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(TodoActions.editModeTodo({ id: todo.id }))
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({ id: todo.id, content: content }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
