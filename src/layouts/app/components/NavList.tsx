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
    >
      {({ isActive }) => (
        <Flex
          px={'md'}
          gapX={'lg'}
          height={'32'}
          width={'full'}
          alignItems={'center'}
          backgroundColor={isActive ? 'primary-95' : 'transparent'}
          pseudos={{
            hover: { backgroundColor: isActive ? 'primary-90' : 'gray-95' },
          }}
        >
          <Icon
            size={'20'}
            iconType={nav.icon}
            color={isActive ? 'primary-50' : 'gray-50'}
          />
          <Text
            size={14}
            weight={500}
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
