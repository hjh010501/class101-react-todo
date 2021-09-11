import * as React from 'react';
import { Helmet } from 'react-helmet-async';
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

export default function TodoItem({ content }: { content: string }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box>
      <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
      <Block marginRight="10px" />
      <TodoContent checked={checked}>{content}</TodoContent>
    </Box>
  );
}
