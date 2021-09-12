import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';

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
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div`
  height: 450px;
  overflow-y: auto;
`;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<Array<TodoItemContent>>([
    {
      content: 'class101 강의 수강하기',
    },
    {
      content: 'Git 공부하기',
    },
    {
      content: 'Typescript 공부하기',
    },
    {
      content: 'React function component 라이프 사이클',
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>
            할 일
            <span style={{ fontSize: '0.7em' }}> ({todoList.length}개)</span>
          </Title>
          <TodoInput
            setTodoList={(todo: TodoItemContent) =>
              setTodoList([todo, ...todoList])
            }
          />
          <TodoList>
            {todoList.map((todo, index) => (
              <TodoItem key={index} content={todo.content} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
