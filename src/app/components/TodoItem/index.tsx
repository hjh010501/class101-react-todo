import * as React from 'react';
import styled from 'styled-components';

import Block from '../../components/Block';
import Checkbox from '../../components/Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const TodoContent = styled.span<{ checked: boolean }>`
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({
  todo,
  checkTodo,
}: {
  todo: TodoItem;
  checkTodo: () => void;
}) {
  const { content, completed } = todo;

  return (
    <Box>
      <Checkbox checked={completed} onClick={() => checkTodo()} />
      <Block marginRight="10px" />
      <TodoContent checked={completed}>{content}</TodoContent>
    </Box>
  );
}
