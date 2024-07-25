import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { TbSettings } from 'react-icons/tb';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import useUser from '../../../hooks/useUser';
import navData from '../../../data/navData';
import NavList from './NavList';

const SideBar = () => {
  const { user } = useUser();

  return (
    <Section
      display={{ initial: 'none', lg: 'block' }}
      style={{
        zIndex: 1,
        position: 'fixed',
        opacity: user ? 1 : 0,
        width: 'var(--sidebar-panel)',
      }}
    >
      <Container container={'full'}>
        <Flex
          borderRight={'1'}
          minHeight={'screen'}
          borderColor={'gray-95'}
          transitionProperty={'all'}
          backgroundColor={'gray-100'}
          transitionDuration={'slower'}
          transitionTimingFunction={'ease-in-out'}
          flexDirection={'column'}
        >
          <Flex
            px={'lg'}
            py={'md'}
            borderBottom={'1'}
            alignItems={'center'}
            borderColor={'gray-95'}
            justifyContent={'between'}
          >
            <Text
              weight={500}
              transform={'capitalize'}
            >
              {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
            </Text>

            <Icon
              size={20}
              color={'gray-60'}
              iconType={TbSettings}
            />
          </Flex>

          <Box
            mt={'lg'}
            spaceY={'xs'}
          >
            {navData
              .filter((nav) => nav.tag === 'default')
              .map((nav) => (
                <NavList
                  nav={nav}
                  key={nav.name}
                />
              ))}
          </Box>

          <Box
            px={'lg'}
            mt={'3xl'}
          >
            <Text
              size={13}
              weight={500}
            >
              Manage
            </Text>
          </Box>
          <Box
            mt={'sm'}
            flex={'full'}
            spaceY={'xs'}
          >
            {navData
              .filter((nav) => nav.tag === 'management')
              .map((nav) => (
                <NavList
                  nav={nav}
                  key={nav.name}
                />
              ))}
          </Box>

          <Box
            mt={'lg'}
            spaceY={'xs'}
          >
            {navData
              .filter((nav) => nav.tag === 'help')
              .map((nav) => (
                <NavList
                  nav={nav}
                  key={nav.name}
                />
              ))}
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default SideBar;
