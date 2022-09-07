import { ReactElement } from 'react';
import SVG from '../../types/svg.type';
import CustomButton, { ButtonColor } from '../customButton/customButton';
import './form.scss';

interface IForm {
  logo?: string;
  title: string;
  titlePosition?: titlePosition;
  maxWidth: string;
  minHeight?: string;
  onClick?: () => void;
  buttontext: string;
  Icon?: SVG;
  children: JSX.Element[] | JSX.Element;
}

type titlePosition = 'center' | 'left' | 'right';

const CustomForm = ({
  logo,
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
      {logo ? (
        <div className="logo" style={{ justifyContent: 'center' }}>
          <img src={logo} alt="logo" width="80px" />
        </div>
      ) : (
        <></>
      )}

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
      {/* <h3 className="sign-in-sign-up-buttontext">
        ليس لديك حساب؟ <span>إنشاء حساب</span>
      </h3> */}
    </div>
  );
};

export default CustomForm;
