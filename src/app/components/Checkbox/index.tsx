import * as React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? '#3eb4eb' : '#eee')};
  padding: 3px;

  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #3eb4eb;
  }
`;

export default function Checkbox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="checkbox-icon" /> : null}
      </Circle>
    </>
  );
}
