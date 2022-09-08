import { ReactElement } from 'react';
import CustomDropdown from '../../../../core/components/custom-dropdown/custom-dropdown';
import { ReactComponent as Date } from '../../../../assets/icons/date.svg';
import { ReactComponent as Time } from '../../../../assets/icons/time.svg';
import { Row, Col } from 'react-bootstrap';
import LeavingPointFormInputs from './leaving-point-form-inputs';

const TwoDirectionForm = (): ReactElement => {
  const date = ['02-09-2022', '03-09-2022'];
  const time = ['08:05', '08:15'];

  return (
    <>
      <LeavingPointFormInputs direction="goAndBack" />
      <CustomDropdown label="تاريخ التحرك" item={date} Icon={Date} />
      <Row>
        <Col>
          <CustomDropdown
            label="وقت التحرك من المحطة"
            item={time}
            Icon={Time}
          />
        </Col>
        <Col>
          <CustomDropdown
            label="وقت الذهاب من الجامعة"
            item={time}
            Icon={Time}
          />
        </Col>
      </Row>
    </>
  );
};

export default TwoDirectionForm;
