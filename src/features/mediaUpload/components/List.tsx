import React from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import filer from '../../../utils/file';
import { TbAlertTriangleFilled, TbFileInvoice, TbX } from 'react-icons/tb';

type ListProps = {
  files: File[];
  errors: string[];
  uploadProgress: number[];
  removeFile: (index: number) => void;
};

const List = ({ files, errors, removeFile, uploadProgress }: ListProps) => {
  return (
    <Box spaceY={'md'}>
      {files.map(({ name, size }, index) => {
        const hasError = uploadProgress[index] === 100 && errors[index];

        return (
          <Flex
            gap={'md'}
            key={index}
            alignItems={'center'}
          >
            <Box>
              <Icon
                size={20}
                color={hasError ? 'red-60' : 'gray-40'}
                iconType={hasError ? TbAlertTriangleFilled : TbFileInvoice}
              />
            </Box>

            <Box flex={'full'}>
              <Flex
                gap={'sm'}
                alignItems={'center'}
                justifyContent={'between'}
              >
                <Text
                  as={'p'}
                  color={hasError ? 'red-60' : 'gray-10'}
                >
                  {filer.name(name, 14)}.{filer.ext(name)}
                </Text>

                <Text
                  size={12}
                  color={hasError ? 'red-60' : 'gray-40'}
                >
                  {filer.inMB(size)}MB / 5MB
                </Text>
              </Flex>
              <Box mt={'xs'}>
                {hasError ? (
                  <Text
                    size={14}
                    color={'red-60'}
                  >
                    {errors[index]}
                  </Text>
                ) : (
                  <Box
                    height={'2'}
                    width={'full'}
                    overflow={'hidden'}
                    borderRadius={'max'}
                    backgroundColor={'gray-95'}
                  >
                    <Box
                      height={'full'}
                      borderRadius={'max'}
                      backgroundColor={'primary-60'}
                      style={{
                        width: `${uploadProgress[index]}%`,
                        transition: 'all 0.3s ease-in-out',
                      }}
                    ></Box>
                  </Box>
                )}
              </Box>
            </Box>

            <Button
              px={'md'}
              height={'24'}
              color={'gray-40'}
              borderRadius={'max'}
              backgroundColor={'gray-95'}
              onClick={() => removeFile(index)}
              disabled={uploadProgress[index] !== 100}
              pseudos={{
                hover: { color: 'red-60', backgroundColor: 'red-100' },
              }}
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
      })}
    </Box>
  );
};

export default List;
