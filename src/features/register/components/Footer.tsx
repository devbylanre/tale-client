import React from 'react';
import Link from '../../../components/Link/Link';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Footer = () => {
  return (
    <Box>
      <Text color={'gray-50'}>
        Already have an account? <Link to={'/auth/user/'}>Sign in</Link>
      </Text>
    </Box>
  );
};

export default Footer;
