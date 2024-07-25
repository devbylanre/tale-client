import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import FormPanel from './components/FormPanel';

const CreateCategoryFeature = () => {
  return (
    <Section>
      <Container
        spaceY={'lg'}
        container={'full'}
      >
        <FormPanel />
      </Container>
    </Section>
  );
};

export default CreateCategoryFeature;
