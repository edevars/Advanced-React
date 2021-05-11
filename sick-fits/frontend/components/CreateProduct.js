import useForm from '../hooks/useForm';
import Form from './styles/Form';

const CreateProduct = () => {
  const { handleChange, inputs, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice bag',
    price: 123123,
    description: 'A very expensive and unnecesary bag!',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </label>
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
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="+ Add Product" />
      </fieldset>
    </Form>
  );
};

export default CreateProduct;
