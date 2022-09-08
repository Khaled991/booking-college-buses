import { ReactElement } from 'react';
import './home.scss';
import HomeImage from '../../../assets/images/home-image.svg';
import { Col, Row } from 'react-bootstrap';
import BookingForm from './components/booking-form/booking-form';

const Home = (): ReactElement => {
  return (
    <Row className="home">
      <Col lg={6}>
        <div className="right-content">
          <BookingForm />
        </div>
      </Col>
      <Col className="left-content" lg={6}>
        <img
          src={HomeImage}
          alt="homeImage"
          className="left-content__home-image"
        />
        <h1 className="left-content__title">احجز أتوبيسك الآن</h1>
        <span className="left-content__description">
          اختر وجهتك و يمكنك الانطلاق الآن
        </span>
      </Col>
    </Row>
  );
};

export default Home;
