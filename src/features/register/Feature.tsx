import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import RegisterForm from './components/RegisterForm';

const RegisterFeature = () => {
  return (
    <Section>
      <Container py={'3xl'}>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default RegisterFeature;
