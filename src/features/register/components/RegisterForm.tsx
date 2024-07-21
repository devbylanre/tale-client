import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Field from '../../../components/Field/Field';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import { TbEye, TbEyeClosed } from 'react-icons/tb';
import Button from '../../../components/Button/Button';
import { useMutation } from '@apollo/client';
import auth from '../../../apis/auth';
import * as Yup from 'yup';
import Alert from '../../../components/Alert/Alert';
import Text from '../../../components/Text/Text';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#]/,
      'Password must contain at least one special character'
    ),
});

const RegisterForm = () => {
  const [isTypeText, setIsTypeText] = useState(false);
  const [signUp, { loading, error, data }] = useMutation(auth.register, {
    onError: (error) => console.error(error),
  });

  const handleSubmit = (values: typeof initialValues) => {
    signUp({
      variables: {
        payload: { email: values.email, password: values.password },
      },
    });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <Box spaceY={'lg'}>
          <Field name='email'>
            <Field.Block>
              <Field.Label>Email</Field.Label>
              <Field.Segment>
                <TextField
                  size={16}
                  type={'email'}
                  autoComplete={'email'}
                  placeholder={'Enter your email address'}
                />
              </Field.Segment>
              <Field.Message />
            </Field.Block>
          </Field>

          <Field name='password'>
            <Field.Block>
              <Field.Label>Password</Field.Label>
              <Field.Segment>
                <TextField
                  pe={'3xl'}
                  size={16}
                  autoComplete={'password'}
                  type={isTypeText ? 'text' : 'password'}
                  placeholder={'Minimum of 8 characters'}
                />
                <Field.Slot
                  style={{ right: '8px', cursor: 'pointer' }}
                  onClick={() => setIsTypeText(!isTypeText)}
                >
                  {isTypeText ? <TbEyeClosed size={20} /> : <TbEye size={20} />}
                </Field.Slot>
              </Field.Segment>
              <Field.Message />
            </Field.Block>
          </Field>

          <Button
            width={'full'}
            type={'submit'}
            disabled={loading}
          >
            Sign up
          </Button>

          {error ? (
            <Alert>
              <Alert.Body backgroundColor={'red-100'}>
                <Text color={'red-50'}>{error ? error.message : null}</Text>
              </Alert.Body>
            </Alert>
          ) : null}
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
