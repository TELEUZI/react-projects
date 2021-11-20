import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  disabled = false,
}: Props) => (
  <button disabled={disabled} type="button" onClick={() => onClick()}>
    {label}
  </button>
);
export default Button;
