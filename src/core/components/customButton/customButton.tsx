import { ReactElement } from 'react';
import SVG from '../../types/svg.type';
import './customButton.scss';

export enum ButtonColor {
  primary = 'primary',
  green = 'green',
  red = 'red',
  blue = 'blue',
  lightGrey = 'light-grey',
}

interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: SVG;
  color: ButtonColor;
}

const CustomButton = ({
  text,
  Icon,
  color,
  ...props
}: ICustomButton): ReactElement => {
  return (
    <button className={`custom-button ${color}`} {...props}>
      {text}
      {Icon ? <Icon className="icon" /> : <></>}
    </button>
  );
};

export default CustomButton;
