import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles, Scope } from '@unform/core';
// import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';
import Input from '../../components/Form/Input';
import getValidationErros from '../../utils/getValidationErros';
import { Container, Content, Background } from './styles';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O Email é obrigatório'),
        address: Yup.object().shape({
          street: Yup.string()
            .min(3, 'No minimo 3 caracteres')
            .required('A rua é obrigatória'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErros(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <h1>Formulario</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome Completo" />
          <Input
            type="email"
            autoComplete="username"
            name="email"
            placeholder="E-mail"
          />
          <Input
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="Sua senha"
          />
          <Scope path="address">
            <Input name="street" placeholder="Rua" />
            <Input name="number" placeholder="Número" />
          </Scope>

          <button type="submit">Enviar</button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
