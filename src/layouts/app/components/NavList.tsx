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
      to={nav.url}
      key={nav.name}
      pseudos={{ hover: { color: 'inherit' } }}
    >
      {({ isActive }) => (
        <Flex
          px={'md'}
          gapX={'lg'}
          height={'32'}
          width={'full'}
          alignItems={'center'}
          pseudos={{ hover: { backgroundColor: 'gray-95' } }}
        >
          <Icon
            size={'20'}
            color={'gray-50'}
            iconType={nav.icon}
          />
          <Text color={'gray-40'}>{nav.name}</Text>
        </Flex>
      )}
    </Link>
  );
};

export default NavList;
