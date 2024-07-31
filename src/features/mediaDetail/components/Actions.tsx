import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbArrowDown, TbDownload, TbLinkPlus } from 'react-icons/tb';

const Actions = () => {
  return (
    <Flex
      mt={'xl'}
      gap={'sm'}
    >
      <Button
        size={14}
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
          iconType={TbArrowDown}
          style={{ strokeWidth: '2px' }}
        />
        Save
      </Button>

      <Button
        size={14}
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
          iconType={TbLinkPlus}
          style={{ strokeWidth: '2px' }}
        />
        Copy
      </Button>
    </Flex>
  );
};

export default Actions;
