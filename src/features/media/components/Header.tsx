import React from 'react';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import MediaUploadFeature from '../../mediaUpload/Feature';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      height={'48'}
      borderBottom={'1'}
      position={'sticky'}
      alignItems={'center'}
      borderColor={'gray-95'}
      justifyContent={'between'}
      backgroundColor={'white'}
      style={{ top: '0rem', zIndex: 1 }}
    >
      <Text as={'p'}>Manage your docs, videos, audios and more...</Text>

      <MediaUploadFeature />
    </Flex>
  );
};

export default Header;
