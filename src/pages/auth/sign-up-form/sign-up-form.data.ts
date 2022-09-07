import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as PasswordKey } from '../../../assets/icons/password-key.svg';
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg';
import { ReactComponent as Whatsapp } from '../../../assets/icons/whatsapp.svg';
import { ReactComponent as CollegeEmail } from '../../../assets/icons/college-email.svg';
import { ReactComponent as College } from '../../../assets/icons/college.svg';

export const signUpForm = [
  {
    label: 'الاسم',
    Icon: User,
    placeholder: 'New Golden',
    type: 'text',
  },
  {
    label: 'البريد الجامعي',
    Icon: CollegeEmail,
    placeholder: 'example@gmail.com',
    type: 'email',
  },
  {
    label: 'رقم الهاتف',
    Icon: Phone,
    placeholder: '011########',
    type: 'text',
  },
  {
    label: 'وتساب',
    Icon: Whatsapp,
    placeholder: '011########',
    type: 'text',
  },
  {
    label: 'الكلية',
    Icon: College,
    placeholder: 'هندسة',
    type: 'text',
  },
  {
    label: 'كلمة المرور',
    Icon: PasswordKey,
    placeholder: '••••••••••••••••',
    type: 'password',
  },
];
