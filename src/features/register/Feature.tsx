import React from 'react';
import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import Footer from './components/Footer';

const RegisterFeature = () => {
  return (
    <React.Fragment>
      <Header />
      <RegisterForm />
      <Footer />
    </React.Fragment>
  );
};

export default RegisterFeature;
