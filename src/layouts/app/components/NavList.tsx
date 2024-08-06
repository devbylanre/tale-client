import React from 'react';
import navData from '../../../data/navData';
import Link from '../../../components/Link/Link';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import Text from '../../../components/Text/Text';

type NavListProps = {
  nav: (typeof navData)[number];
};

const NavList = ({ nav }: NavListProps) => {
  return (
    <Link
      end={true}
      to={nav.url}
      key={nav.name}
      pseudos={{ hover: { color: 'inherit' } }}
      style={{ display: 'block' }}
    >
      {({ isActive }) => (
        <Flex
          px={'sm'}
          gapX={'sm'}
          height={'32'}
          width={'full'}
          borderRadius={'md'}
          alignItems={'center'}
          backgroundColor={isActive ? 'primary-100' : 'transparent'}
          pseudos={{
            hover: { backgroundColor: isActive ? 'primary-95' : 'gray-100' },
          }}
          style={{ transition: 'all .3s ease-in-out' }}
        >
          <Icon
            size={'20'}
            iconType={nav.icon}
            color={isActive ? 'primary-40' : 'gray-60'}
          />
          <Text
            size={14}
            color={isActive ? 'primary-40' : 'gray-40'}
          >
            {nav.name}
          </Text>
        </Flex>
      )}
    </Link>
  );
};

export default NavList;
