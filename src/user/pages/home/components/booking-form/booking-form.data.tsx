import { ReactElement } from 'react';
import { INav } from '../../../../../core/components/navs/navs';
import OneDirectionForm from '../one-direction-form';
import TwoDirectionForm from '../two-direction-form';

interface Form extends INav {
  navForm: ReactElement;
}

export const forms: Form[] = [
  {
    title: 'ذهاب',
    eventKey: 'go',
    navForm: <OneDirectionForm direction="goToUniversity" />,
  },
  {
    title: 'عودة',
    eventKey: 'back',
    navForm: <OneDirectionForm direction="backFromUniversity" />,
  },
  {
    title: 'ذهاب و عودة',
    eventKey: 'goAndBack',
    navForm: <TwoDirectionForm />,
  },
];
