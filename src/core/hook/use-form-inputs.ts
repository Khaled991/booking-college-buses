import { useState } from 'react';

const useFormInputs = (initialValue = {}) => {
  const [formValues, setFormValues] = useState({});

  const onChangeInput = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [name]: value });

  return [formValues, onChangeInput];
};

export default useFormInputs;
