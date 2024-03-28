import { FC } from 'react';

type Props = {
  content?: string | JSX.Element
  className: string,
  onClick?: any
}

const Button: FC<Props> = ({ content, className, onClick }) => {

  return (
    <button onClick={onClick} className={className}>{content}</button>
  );
}

export default Button
