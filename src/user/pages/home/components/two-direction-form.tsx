import { ReactElement } from 'react';
import CustomDropdown from '../../../../core/components/custom-dropdown/custom-dropdown';
import { ReactComponent as Date } from '../../../../assets/icons/date.svg';
import { ReactComponent as Time } from '../../../../assets/icons/time.svg';
import { Row, Col } from 'react-bootstrap';
import LeavingPointFormInputs from './leaving-point-form-inputs';

const TwoDirectionForm = (): ReactElement => {
  const items = ['sdafas', 'safsagsa'];

  return (
    <>
      <LeavingPointFormInputs direction="goAndBack" />
      <CustomDropdown label="تاريخ التحرك" item={items} Icon={Date} />
      <Row>
        <Col>
          <CustomDropdown
            label="وقت التحرك من المحطة"
            item={items}
            Icon={Time}
          />
        </Col>
        <Col>
          <CustomDropdown
            label="وقت الذهاب من الجامعة"
            item={items}
            Icon={Time}
          />
        </Col>
      </Row>
    </>
  );
};

export default TwoDirectionForm;
