import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbCloudDownload, TbExternalLink } from 'react-icons/tb';

const Actions = () => {
  return (
    <Flex
      gap={'md'}
      mt={'3xl'}
    >
      <Button
        p={'sm'}
        size={14}
        gap={'sm'}
        weight={500}
        width={'full'}
        borderRadius={'max'}
        color={'gray-40'}
        backgroundColor={'gray-95'}
        pseudos={{ hover: { backgroundColor: 'gray-90' } }}
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        <Icon
          size={20}
          iconType={TbCloudDownload}
          color={'gray-60'}
        />
        Download
      </Button>
      <Button
        p={'sm'}
        size={14}
        gap={'sm'}
        weight={500}
        width={'full'}
        borderRadius={'max'}
        color={'primary-60'}
        backgroundColor={'primary-95'}
        pseudos={{ hover: { backgroundColor: 'primary-90' } }}
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        <Icon
          size={20}
          iconType={TbExternalLink}
          color={'primary-60'}
        />
        Share
      </Button>
    </Flex>
  );
};

export default Actions;
