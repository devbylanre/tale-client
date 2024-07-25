import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import List from './components/List';

const ListMediaFeature = () => {
  return (
    <Section>
      <Container container={'full'}>
        <List />
      </Container>
    </Section>
  );
};

export default ListMediaFeature;
