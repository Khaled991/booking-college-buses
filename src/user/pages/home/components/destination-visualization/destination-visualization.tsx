import { ReactElement } from 'react';
import { ReactComponent as GoToUniversity } from '../../../../../assets/icons/go-bus.svg';
import { ReactComponent as BackFromUniversity } from '../../../../../assets/icons/back-bus.svg';
import { ReactComponent as GoAndBack } from '../../../../../assets/icons/go-and-back-bus.svg';

import './destination-visualization.scss';
import { Col } from 'react-bootstrap';

export interface IDestinationVisualizationProps {
  direction: Direction;
}

type Direction = 'goToUniversity' | 'backFromUniversity' | 'goAndBack';

const icons = new Map<Direction, JSX.Element>([
  ['goToUniversity', <GoToUniversity className="destination__icon" />],
  ['backFromUniversity', <BackFromUniversity className="destination__icon" />],
  ['goAndBack', <GoAndBack className="destination__icon" />],
]);

const DestinationVisualization = ({
  direction,
}: IDestinationVisualizationProps): ReactElement => {
  const icon = icons.get(direction);

  if (icon === undefined) throw Error('Icon not found in icons map');

  return (
    <Col className="destination">
      {icon}
      <span className="destination__name">الجامعة</span>
    </Col>
  );
};

export default DestinationVisualization;
