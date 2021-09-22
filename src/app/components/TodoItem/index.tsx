import * as React from 'react';
import styled from 'styled-components';

import Block from '../../components/Block';
import Checkbox from '../../components/Checkbox';
import CircleButton from '../Button/CircleButton';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  deleteTodo,
}: {
  todo: TodoItem;
  checkTodo: () => void;
  deleteTodo: () => void;
}) {
  const { content, completed } = todo;

  return (
    <Box>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={completed} onClick={() => checkTodo()} />
        <Block marginRight="10px" />
        <TodoContent checked={completed}>{content}</TodoContent>
      </div>
      <CircleButton
        onClick={() => deleteTodo()}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        )}
      />
    </Box>
  );
}
