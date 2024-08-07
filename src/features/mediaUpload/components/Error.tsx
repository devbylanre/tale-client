import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { useMutationState } from '@tanstack/react-query';

const Error = () => {
  const errors = useMutationState({
    filters: { mutationKey: ['createMedias'] },
    select: (mutation) => mutation.state.error,
  });

  const error = errors[0];

  return (
    <Box
      px={'xl'}
      position={'relative'}
      backgroundColor={'red-40'}
      style={{
        zIndex: -1,
        visibility: error ? 'visible' : 'hidden',
        transform: error ? 'translateY(0em)' : 'translateY(-1.75em)',
        transition: 'transform .15s ease-in',
      }}
    >
      {error ? (
        <Box py={'sm'}>
          <Text
            size={14}
            color={'white'}
          >
            {error ? error.message : null}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default Error;
