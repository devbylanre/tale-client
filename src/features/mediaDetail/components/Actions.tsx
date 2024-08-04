import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { IoPushSharp, IoShareSocialSharp } from 'react-icons/io5';

const Actions = () => {
  return (
    <Flex
      mt={'sm'}
      gap={'sm'}
    >
      <Button
        gap={'xs'}
        weight={500}
        width={'full'}
        height={'40'}
        color={'gray-40'}
        borderRadius={'lg'}
        backgroundColor={'gray-95'}
        pseudos={{ hover: { backgroundColor: 'gray-90' } }}
      >
        <Icon
          size={20}
          iconType={IoPushSharp}
          style={{ strokeWidth: '2px' }}
        />
        Save
      </Button>

      <Button
        gap={'sm'}
        weight={500}
        width={'full'}
        borderRadius={'lg'}
        color={'primary-60'}
        backgroundColor={'primary-95'}
        pseudos={{ hover: { backgroundColor: 'primary-90' } }}
      >
        <Icon
          size={20}
          color={'primary-60'}
          iconType={IoShareSocialSharp}
          style={{ strokeWidth: '2px' }}
        />
        Share
      </Button>
    </Flex>
  );
};

export default Actions;
