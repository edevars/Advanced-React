import { useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (event) => {
    let { value, name, type } = event.target;
    if (type === 'number') value = parseInt(value);
    if (type === 'file') [value] = event.target.files;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankArray = Object.entries(inputs).map(([key, value]) => [key, '']);

    setInputs(Object.fromEntries(blankArray));
  };

  return { inputs, handleChange, resetForm, clearForm };
};

export default useForm;
