import { ReactElement, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import './navs.scss';

interface INavsProps {
  navs: INav[];
  defaultActiveKey: string;
  onChange: (index: number) => void;
}

export interface INav {
  title: string;
  eventKey: string;
}

const Navs = ({
  navs,
  defaultActiveKey,
  onChange,
}: INavsProps): ReactElement => {
  const activeIndex = navs.findIndex(nav => nav.eventKey === defaultActiveKey);
  if (activeIndex === -1)
    throw new Error(
      'defaultActiveKey must includes value inside navs[].eventKey '
    );

  useEffect(() => {
    onChange(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="navs">
      <Nav variant="pills" defaultActiveKey={defaultActiveKey}>
        {navs.map((nav, i) => (
          <Nav.Link onClick={() => onChange(i)} eventKey={nav.eventKey} key={i}>
            {nav.title}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Navs;
