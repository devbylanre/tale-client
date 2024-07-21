import React from 'react';
import Link from '../../../components/Link/Link';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Footer = () => {
  return (
    <Box>
      <Text color={'gray-50'}>
        Not a blogger yet? <Link to={'/auth/new/'}>Create account</Link>
      </Text>
    </Box>
  );
};

export default Footer;
