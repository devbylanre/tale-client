import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Section>
      <Container
        px={'md'}
        py={'3xl'}
        spaceY={'3xl'}
      >
        <Outlet />
      </Container>
    </Section>
  );
};

export default AuthLayout;
