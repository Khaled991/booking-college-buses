import { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomDropdown from '../../../core/components/custom-dropdown/custom-dropdown';
import { ReactComponent as Station } from '../../../assets/icons/station.svg';
import { ReactComponent as Location } from '../../../assets/icons/location.svg';
import DestinationVisualization, {
  IDestinationVisualizationProps,
} from './destination-visualization/destination-visualization';

interface ILeavingPointFormInputsProps extends IDestinationVisualizationProps {}

const LeavingPointFormInputs = (
  leavingPointFormInputsProps: ILeavingPointFormInputsProps
): ReactElement => {
  const items = ['sdafas', 'safsagsa'];

  return (
    <>
      <CustomDropdown item={items} label="المنطقة" Icon={Location} />
      <Row>
        <Col>
          <CustomDropdown item={items} label="المحطة" Icon={Station} />
        </Col>
        <DestinationVisualization {...leavingPointFormInputsProps} />
      </Row>
    </>
  );
};

export default LeavingPointFormInputs;
