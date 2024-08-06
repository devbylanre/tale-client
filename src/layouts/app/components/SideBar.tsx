import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { IoCogOutline } from 'react-icons/io5';
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
        transform: user ? 'translateX(0em)' : 'translateX(-1.5em)',
        transition: 'opacity .3s ease-in, transform .3s ease-in',
      }}
    >
      <Container container={'full'}>
        <Flex
          borderRight={'1'}
          minHeight={'screen'}
          borderColor={'gray-95'}
          flexDirection={'column'}
        >
          <Flex
            px={'lg'}
            height={'48'}
            borderBottom={'1'}
            alignItems={'center'}
            borderColor={'gray-95'}
            justifyContent={'between'}
          >
            <Text transform={'capitalize'}>
              {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
            </Text>

            <Icon
              size={20}
              color={'gray-40'}
              iconType={IoCogOutline}
            />
          </Flex>

          <Box
            px={'xl'}
            mt={'lg'}
            spaceY={'2xs'}
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
            px={'xl'}
            mt={'2xl'}
            flex={'full'}
            spaceY={'2xs'}
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
            px={'xl'}
            my={'lg'}
            spaceY={'2xs'}
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
