import React from 'react';

interface Props {
  backgroundColor: string & {
    readonly length: 7;
  };
  number: number;
}

export const ColorView = ({ backgroundColor, number }: Props) => (
  <div style={{ backgroundColor, height: '200px' }}>
    <span>{number}</span>
  </div>
);
