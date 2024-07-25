import React from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { TbUpload } from 'react-icons/tb';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';

type WidgetProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  uploadProgress: number[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openStorage: () => void;
};

const Widget = ({
  inputRef,
  uploadProgress,
  handleChange,
  openStorage,
}: WidgetProps) => {
  return (
    <Box
      p={'lg'}
      border={'1'}
      borderRadius={'xl'}
      borderColor={'gray-95'}
      backgroundColor={'gray-100'}
    >
      <Flex
        mx={'auto'}
        gapY={'lg'}
        width={'6/12'}
        height={'200'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Icon
          size={32}
          color={'gray-50'}
          iconType={TbUpload}
          style={{ strokeWidth: '1.5px' }}
        />
        <Text
          as={'h3'}
          weight={400}
          align={'center'}
        >
          Drag or drop files to upload
        </Text>

        <input
          type='file'
          name='medias'
          ref={inputRef}
          multiple={true}
          onChange={handleChange}
          className={'display-none'}
        />

        <Button
          size={14}
          weight={500}
          height={'32'}
          borderRadius={'max'}
          onClick={openStorage}
          disabled={
            uploadProgress.length > 0 &&
            uploadProgress.every((number) => number !== 100)
          }
        >
          Select files
        </Button>
      </Flex>
    </Box>
  );
};

export default Widget;
