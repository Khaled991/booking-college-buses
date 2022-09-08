import { ReactElement, forwardRef, LegacyRef } from 'react';
import Logo from '../../../../assets/images/logo.webp';
import './auth-form.scss';

interface IAuthFormProps {
  onSubmit: () => void;
  title: string;
  titlePosition?: titlePosition;
  maxWidth: string;
  minHeight?: string;
  children: JSX.Element[] | JSX.Element;
}

type titlePosition = 'center' | 'left' | 'right';

const AuthForm = forwardRef(
  (
    {
      title,
      maxWidth,
      minHeight,
      titlePosition,
      children,
      onSubmit,
    }: IAuthFormProps,
    formRef: LegacyRef<HTMLFormElement> | undefined
  ): ReactElement => {
    return (
      <div
        className="auth-form"
        style={{ maxWidth: maxWidth, minHeight: minHeight }}
      >
        <div className="logo" style={{ justifyContent: 'center' }}>
          <img src={Logo} alt="logo" width="80px" />
        </div>

        <h1 className="auth-form__title" style={{ textAlign: titlePosition }}>
          {title}
        </h1>

        <form
          ref={formRef}
          onSubmit={event => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {children}
        </form>
      </div>
    );
  }
);

export default AuthForm;
