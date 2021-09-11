import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Block from '../../components/Block';
import Checkbox from '../../components/Checkbox';
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
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>

          <TodoList>
            <TodoItem content="아침 일정 완료" />
            <TodoItem content="아침 일정 완료" />
            <TodoItem content="아침 일정 완료" />
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
