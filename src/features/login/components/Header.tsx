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
        Login into your account
      </Text>
      <Text as={'p'}>
        Good to have you back. Continue from where you left off. Post a new blog
        or check out your post performance.
      </Text>
    </Box>
  );
};

export default Header;
