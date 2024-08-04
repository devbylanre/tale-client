import React from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import filer from '../../../utils/file';
import { TbPolaroidFilled, TbCircleArrowUpFilled, TbX } from 'react-icons/tb';

type ListProps = {
  file: File;
  error: any;
  percent: number;
  onRemove: () => void;
};

const List = ({ file, error, onRemove, percent }: ListProps) => {
  const isLoading = percent !== 100;
  const isError = !isLoading && error !== undefined;
  const handleRemove = () => onRemove();

  return (
    <Flex gap={'md'}>
      <Icon
        size={24}
        iconType={TbPolaroidFilled}
        color={isError ? 'red-60' : 'gray-60'}
      />
      <Box
        as={'span'}
        flex={'full'}
        spaceY={'2xs'}
        overflow={'hidden'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'between'}
        >
          <Text
            as={'p'}
            color={isError ? 'red-60' : 'gray-10'}
            style={{ transition: 'color .3s ease-in-out' }}
          >
            {filer.name(file.name, 14)}
            {filer.ext(file.name)}
          </Text>

          <Icon
            size={20}
            color={isError ? 'red-60' : 'gray-60'}
            iconType={TbCircleArrowUpFilled}
            style={{
              opacity: isError || !isLoading ? 1 : 0,
              transition: 'opacity .2s ease-in-out',
            }}
          />
        </Flex>
        <Box
          style={{
            opacity: isError ? 1 : 0,
            transition: 'all .2s ease-in-out',
            visibility: isError ? 'visible' : 'hidden',
            transform: isError ? 'translateX(0em)' : 'translateX(-.75em)',
          }}
        >
          <Text
            size={14}
            color={'red-60'}
          >
            {isError ? error : null}
          </Text>
        </Box>
        <Box
          width={'full'}
          overflow={'hidden'}
          borderRadius={'max'}
          backgroundColor={'gray-95'}
          style={{
            opacity: isLoading ? '1' : '0',
            height: isLoading ? '1.5px' : '0px',
            transition: 'all .2s ease-in-out',
          }}
        >
          <Box
            height={'full'}
            backgroundColor={'blue-60'}
            style={{
              width: `${percent || 0}%`,
              transition: 'width 0.2s linear',
            }}
          />
        </Box>
      </Box>
      <Button
        px={'md'}
        height={'24'}
        type={'button'}
        color={'gray-40'}
        borderRadius={'max'}
        disabled={isLoading}
        onClick={handleRemove}
        backgroundColor={'gray-95'}
        pseudos={{ hover: { color: 'red-60', backgroundColor: 'red-100' } }}
      >
        <Icon
          size={18}
          iconType={TbX}
          color={'inherit'}
          style={{ strokeWidth: '1.5px' }}
        />
      </Button>
    </Flex>
  );
};

export default List;
