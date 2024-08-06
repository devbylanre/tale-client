import React, { useRef } from 'react';
import Field from '../../../components/Field/Field';
import Flex from '../../../components/Flex/Flex';
import File from '../../../components/File/File';
import Icon from '../../../components/Icon/Icon';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { IoAlbums, IoChevronForwardSharp } from 'react-icons/io5';

const FileHandler = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <Field name={'files'}>
      <Flex
        mt={'xl'}
        mx={'lg'}
        gap={'lg'}
        height={'240'}
        borderRadius={'xl'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        backgroundColor={'primary-100'}
      >
        <File
          ref={inputRef}
          multiple={true}
          onChange={handleChange}
        />
        <Icon
          size={'56'}
          iconType={IoAlbums}
          color={'primary-40'}
        />
        <Box
          mx={'auto'}
          width={'8/12'}
        >
          <Text
            as={'p'}
            size={24}
            weight={500}
            align={'center'}
          >
            Choose files from your local storage
          </Text>
        </Box>
        <Button
          gap={'xs'}
          height={'32'}
          type={'button'}
          color={'primary-40'}
          backgroundColor={'inherit'}
          onClick={() => inputRef.current?.click()}
          pseudos={{ hover: { color: 'primary-30' } }}
        >
          Open
          <Icon
            size={12}
            iconType={IoChevronForwardSharp}
          />
        </Button>
      </Flex>
    </Field>
  );
};

export default FileHandler;
