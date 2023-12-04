import { useState } from 'react';

const useForm = (submitHandler, initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    setFormValues(formValues => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(formValues);
  };

  return {
    formValues,
    changeHandler,
    onSubmit,
  };
};

export default useForm;
