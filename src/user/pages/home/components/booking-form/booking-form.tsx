import { ReactElement, useState } from 'react';
import CustomForm from '../../../../../core/components/form/form';
import Navs from '../../../../../core/components/navs/navs';
import { ReactComponent as Ticket } from '../../../../../assets/icons/ticket.svg';
import { forms } from './booking-form.data';

const BookingForm = (): ReactElement => {
  const [activeFormIndex, setActiveFormIndex] = useState<number>(0);
  return (
    <>
      <CustomForm
        Icon={Ticket}
        title="احجز أتوبيسك"
        maxWidth="70%"
        minHeight="70%"
        buttontext="احجز الآن"
        showButton={true}
      >
        <Navs
          navs={forms.map(({ title, eventKey }) => ({ title, eventKey }))}
          defaultActiveKey="go"
          onChange={index => setActiveFormIndex(index)}
        />
        {forms.length ? forms[activeFormIndex].navForm : <></>}
      </CustomForm>
    </>
  );
};

export default BookingForm;
