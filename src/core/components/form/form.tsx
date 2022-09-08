import { ReactElement } from 'react';
import SVG from '../../types/svg.type';
import CustomButton, { ButtonColor } from '../customButton/customButton';
import './form.scss';

interface IForm {
  title: string;
  titlePosition?: titlePosition;
  maxWidth: string;
  minHeight?: string;
  onClick: () => void;
  buttontext: string;
  Icon?: SVG;
  children: JSX.Element[] | JSX.Element;
}

type titlePosition = 'center' | 'left' | 'right';

const CustomForm = ({
  title,
  titlePosition,
  maxWidth,
  minHeight,
  onClick,
  buttontext,
  Icon,
  children,
}: IForm): ReactElement => {
  return (
    <div className="form" style={{ maxWidth: maxWidth, minHeight: minHeight }}>
      <h1 className="form__title" style={{ textAlign: titlePosition }}>
        {title}
      </h1>

      <form>
        {children}
        <CustomButton
          onClick={onClick}
          text={buttontext}
          Icon={Icon}
          type="submit"
          color={ButtonColor.primary}
        />
      </form>
    </div>
  );
};

export default CustomForm;
