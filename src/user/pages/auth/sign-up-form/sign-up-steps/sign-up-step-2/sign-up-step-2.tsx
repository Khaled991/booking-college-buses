import { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton, {
  ButtonColor,
} from '../../../../../../core/components/customButton/customButton';
import { ReactComponent as Time } from '../../../../../../assets/icons/time.svg';
import CustomInput from '../../../../../../core/components/customInput/customInput';
import './sign-up-step-2.scss';

interface ISignUpStep2Props {
  previousStep: () => void;
}

const SignUpStep2 = ({ previousStep }: ISignUpStep2Props): ReactElement => {
  const timeTableForm = [
    { weekDay: 'السبت' },
    { weekDay: 'الأحد' },
    { weekDay: 'الإثنين' },
    { weekDay: 'الثلاثاء' },
    { weekDay: 'الاربعاء' },
    { weekDay: 'الخميس' },
    { weekDay: 'الجمعة' },
  ];
  return (
    <>
      <Row>
        <Col xl={2} />
        <Col xl={5}>
          <label className="label">الحضور</label>
        </Col>
        <Col xl={5}>
          <label className="label">الانصراف</label>
        </Col>
      </Row>
      {timeTableForm.map(({ weekDay }) => (
        <Row
          style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}
        >
          <Col xl={2}>
            <h2>{weekDay}</h2>
          </Col>

          <Col xl={5}>
            <CustomInput Icon={Time} type="time" />
          </Col>

          <Col xl={5}>
            <CustomInput Icon={Time} type="time" />
          </Col>
        </Row>
      ))}
      <Row>
        <Col md={6}>
          <CustomButton
            onClick={previousStep}
            text="رجوع"
            color={ButtonColor.primary}
          />
        </Col>
        <Col md={6}>
          <CustomButton
            text="إنشاء"
            type="submit"
            color={ButtonColor.primary}
          />
        </Col>
      </Row>
    </>
  );
};

export default SignUpStep2;
