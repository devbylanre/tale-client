import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Loader from '../../../components/Loader/Loader';

const Progress = () => {
  return (
    <Section>
      <Container px={'md'}>
        <Flex
          gapY={'sm'}
          minHeight={'lvh'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Loader>
            <Loader.Parent>
              <Loader.Child />
            </Loader.Parent>
          </Loader>
          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            Fetching data...
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Progress;
