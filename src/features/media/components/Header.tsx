import React from 'react';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import MediaUploadFeature from '../../mediaUpload/Feature';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      borderBottom={'1'}
      position={'sticky'}
      alignItems={'center'}
      borderColor={'gray-95'}
      justifyContent={'between'}
      backgroundColor={'white'}
      style={{ top: '0rem', zIndex: 1, height: 'var(--header-panel)' }}
    >
      <Text
        as={'p'}
        color={'gray-40'}
      >
        Manage your docs, videos, audios and more...
      </Text>

      <MediaUploadFeature />
    </Flex>
  );
};

export default Header;
