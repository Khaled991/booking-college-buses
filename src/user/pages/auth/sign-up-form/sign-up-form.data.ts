import { ReactComponent as User } from '../../../../assets/icons/user.svg';
import { ReactComponent as PasswordKey } from '../../../../assets/icons/password-key.svg';
import { ReactComponent as Phone } from '../../../../assets/icons/phone.svg';
import { ReactComponent as Whatsapp } from '../../../../assets/icons/whatsapp.svg';
import { ReactComponent as CollegeEmail } from '../../../../assets/icons/college-email.svg';
import { ReactComponent as College } from '../../../../assets/icons/college.svg';
import { ReactComponent as Home } from '../../../../assets/icons/home.svg';
import { ICustomInputProps } from '../../../../core/components/customInput/customInput';

export const signUpFormInputs: ICustomInputProps[] = [
  {
    label: 'الاسم',
    Icon: User,
    placeholder: 'الاسم',
    type: 'text',
  },
  {
    label: 'البريد الجامعي',
    Icon: CollegeEmail,
    placeholder: 'example@gu.edu.eg',
    type: 'email',
  },
  {
    label: 'رقم الهاتف',
    Icon: Phone,
    placeholder: '01xxxxxxxxxx',
    type: 'text',
    maxLength: 11,
  },
  {
    label: 'واتساب',
    Icon: Whatsapp,
    placeholder: '01xxxxxxxxxx',
    type: 'text',
    maxLength: 11,
  },
  {
    label: 'الكلية',
    Icon: College,
    placeholder: 'الكلية',
    type: 'text',
  },
  {
    label: 'العنوان',
    Icon: Home,
    placeholder: 'العنوان',
    type: 'text',
  },
  {
    label: 'كلمة المرور',
    Icon: PasswordKey,
    placeholder: '••••••••••••••••',
    type: 'password',
  },
];
