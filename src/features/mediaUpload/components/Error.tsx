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
      backgroundColor={'red-60'}
      style={{
        zIndex: -1,
        opacity: error ? 1 : 0,
        visibility: error ? 'visible' : 'hidden',
        transform: error ? 'translateY(0em)' : 'translateY(-2.5em)',
        transition: 'opacity .2s ease-in-out, transform .3s ease-in-out',
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
