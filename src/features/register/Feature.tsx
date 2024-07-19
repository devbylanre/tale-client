import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import Footer from './components/Footer';

const RegisterFeature = () => {
  return (
    <Section>
      <Container
        px={'md'}
        py={'3xl'}
        spaceY={'3xl'}
      >
        <Header />
        <RegisterForm />
        <Footer />
      </Container>
    </Section>
  );
};

export default RegisterFeature;
