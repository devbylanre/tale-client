import React from 'react';
import Tabs from '../../../components/Tabs/Tabs';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { IoResize } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import useMedia from '../../../hooks/useMedia';
import MediaDetailFeature from '../../mediaDetail/Feature';
import MediaUpdateFeature from '../../mediaUpdate/Feature';
import MediaDeleteFeature from '../../mediaDelete/Feature';

const Header = () => {
  const { setMedia } = useMedia();
  const [, setSearchParams] = useSearchParams();

  const handleHide = () => {
    setSearchParams('');
    setMedia({ type: 'CLEAR_SINGLE', payload: null });
  };

  return (
    <Tabs defaultTab={'about'}>
      <Flex
        px={'lg'}
        height={'48'}
        borderBottom={'1'}
        alignItems={'center'}
        borderColor={'gray-95'}
        justifyContent={'between'}
      >
        <Tabs.Triggers>
          <Tabs.Trigger value={'about'}>About</Tabs.Trigger>
          <Tabs.Trigger value={'update'}>Update</Tabs.Trigger>
          <Tabs.Trigger value={'delete'}>Delete</Tabs.Trigger>
        </Tabs.Triggers>

        <Button
          px={'none'}
          width={'32'}
          height={'32'}
          color={'gray-40'}
          borderRadius={'max'}
          onClick={handleHide}
          backgroundColor={'inherit'}
          pseudos={{ hover: { backgroundColor: 'gray-90' } }}
        >
          <Icon
            size={20}
            iconType={IoResize}
          />
        </Button>
      </Flex>

      <Tabs.Body
        p={'lg'}
        flex={'full'}
        value={'about'}
        backgroundColor={'gray-100'}
      >
        <MediaDetailFeature />
      </Tabs.Body>
      <Tabs.Body
        p={'lg'}
        flex={'full'}
        value={'update'}
        backgroundColor={'gray-100'}
      >
        <MediaUpdateFeature />
      </Tabs.Body>
      <Tabs.Body
        flex={'full'}
        value={'delete'}
        backgroundColor={'gray-100'}
      >
        <MediaDeleteFeature />
      </Tabs.Body>
    </Tabs>
  );
};

export default Header;
