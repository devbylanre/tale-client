import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

const LoginFeature = () => {
  return (
    <React.Fragment>
      <Header />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};

export default LoginFeature;
