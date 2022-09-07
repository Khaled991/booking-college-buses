import { ReactElement } from 'react';
import SVG from '../../types/svg.type';
import './customInput.scss';

interface ICustomInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  Icon: SVG;
}

const CustomInput = ({
  placeholder,
  type,
  name,
  onChange,
  label,
  Icon,
}: ICustomInputProps): ReactElement => {
  return (
    <div className="custom-input-container">
      <div className="custom-input-container__label-and-icon">
        <label className="custom-input-container__label-and-icon__label">
          <Icon className="custom-input-container__label-and-icon__icon" />
          {label}
        </label>
      </div>
      <input
        className="custom-input-container__custom-input"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
