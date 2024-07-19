import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Header = () => {
  return (
    <Box spaceY={'sm'}>
      <Text
        as={'h1'}
        size={32}
        weight={500}
      >
        Join the bloggers
      </Text>
      <Text as={'p'}>
        Sign up and join the community of african talented bloggers who share
        the same interest as you.
      </Text>
    </Box>
  );
};

export default Header;
