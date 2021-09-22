import * as React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* & svg {
    fill: red;
  } */
`;

export default function CircleButton({
  onClick,
  Icon,
}: {
  onClick: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle onClick={onClick}>
      <Icon />
    </Circle>
  );
}
