import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../hooks/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import verifyNull from '../lib/verifyInputsForm';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      price
      description
    }
  }
`;

const CreateProduct = () => {
  const { handleChange, inputs, resetForm, clearForm } = useForm({
    name: '',
    image: '',
    price: 0,
    description: '',
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
    }
  );

  const onSubmitCreateProduct = async (event) => {
    event.preventDefault();
    try {
      const nullOrEmptyField = verifyNull(inputs);
      if (nullOrEmptyField) {
        throw new Error(`Please fill the field: ${nullOrEmptyField}`);
      }
      await createProduct();
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={onSubmitCreateProduct}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
            required
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
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="+ Add Product" />
      </fieldset>
    </Form>
  );
};

export default CreateProduct;
