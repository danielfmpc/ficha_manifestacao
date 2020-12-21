import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles, Scope, SubmitHandler } from '@unform/core';
import Input from '../../components/Form/Input';

interface PropSubmit {
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const initalData = {
    email: 'daniel@danie.com',
    name: 'Dnaiel',
    password: '123qwe....',
  };

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<PropSubmit> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O nome é obrigatório'),
        address: Yup.object().shape({
          street: Yup.string()
            .min(3, 'No minimo 3 caracteres')
            .required('O nome é obrigatório'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <h1>Formulario</h1>
      <Form initialData={initalData} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </>
  );
};

export default Home;
