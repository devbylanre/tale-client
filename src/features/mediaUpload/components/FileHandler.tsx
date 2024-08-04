import React, { useRef } from 'react';
import Field from '../../../components/Field/Field';
import Flex from '../../../components/Flex/Flex';
import File from '../../../components/File/File';
import Icon from '../../../components/Icon/Icon';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { IoAlbums } from 'react-icons/io5';

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
        backgroundColor={'primary-95'}
      >
        <File
          ref={inputRef}
          multiple={true}
          onChange={handleChange}
        />
        <Icon
          size={'56'}
          color={'primary-60'}
          iconType={IoAlbums}
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
          height={'32'}
          type={'button'}
          color={'primary-60'}
          backgroundColor={'inherit'}
          pseudos={{ hover: { backgroundColor: 'primary-90' } }}
          onClick={() => inputRef.current?.click()}
        >
          Open
        </Button>
      </Flex>
    </Field>
  );
};

export default FileHandler;
