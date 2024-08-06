import React from 'react';
import Container from '../../../components/Container/Container';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import Link from '../../../components/Link/Link';

type ErrorProps = { message: string | undefined };

const Error = ({ message }: ErrorProps) => {
  return (
    <Section>
      <Container px={'md'}>
        <Flex
          gapY={'2xl'}
          height={'lvh'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Box spaceY={'xs'}>
            <Text
              as={'h1'}
              size={20}
              weight={500}
            >
              System error
            </Text>
            <Text as={'p'}>
              We experienced an issue connecting to the server try refreshing
              the page or sign in again.
            </Text>
          </Box>

          <Box
            p={'sm'}
            borderRadius={'sm'}
            backgroundColor={'red-100'}
          >
            <Text
              size={14}
              weight={500}
              color={'red-50'}
            >
              {message ? message : null}
            </Text>
          </Box>

          <Flex gapX={'md'}>
            <Link
              to={'/app/'}
              color={'inherit'}
              reloadDocument={true}
            >
              <Button
                height={'32'}
                color={'gray-40'}
                backgroundColor={'gray-95'}
                pseudos={{
                  hover: { backgroundColor: 'gray-90', color: 'gray-10' },
                }}
              >
                Refresh page
              </Button>
            </Link>
            <Link
              replace={true}
              to={'/auth/user/'}
            >
              <Button height={'32'}>Sign in</Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Error;
