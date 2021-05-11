import { useState } from 'react';
import useForm from '../hooks/useForm';

const CreateProduct = () => {
  const { handleChange, inputs, resetForm, clearForm } = useForm({
    name: '',
    price: 0,
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <input type="button" value="Reset" onClick={resetForm} />
      <input type="button" value="Clear" onClick={clearForm} />
    </form>
  );
};

export default CreateProduct;
