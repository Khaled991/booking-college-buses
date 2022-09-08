import { ReactElement } from 'react';
import CustomDropdown from '../../../../core/components/custom-dropdown/custom-dropdown';
import { ReactComponent as Date } from '../../../../assets/icons/date.svg';
import { ReactComponent as Time } from '../../../../assets/icons/time.svg';
import { Row, Col } from 'react-bootstrap';
import { IDestinationVisualizationProps } from './destination-visualization/destination-visualization';
import LeavingPointFormInputs from './leaving-point-form-inputs';

interface IOneDirectionFormProps extends IDestinationVisualizationProps {}

const OneDirectionForm = (
  oneDirectionFormProps: IOneDirectionFormProps
): ReactElement => {
  const items = ['sdafas', 'safsagsa'];

  return (
    <>
      <LeavingPointFormInputs {...oneDirectionFormProps} />
      <Row>
        <Col>
          <CustomDropdown item={items} label="تاريخ التحرك" Icon={Date} />
        </Col>
        <Col>
          <CustomDropdown item={items} label="وقت التحرك" Icon={Time} />
        </Col>
      </Row>
    </>
  );
};

export default OneDirectionForm;
