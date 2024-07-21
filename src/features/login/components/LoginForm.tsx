import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Box from '../../../components/Box/Box';
import Field from '../../../components/Field/Field';
import TextField from '../../../components/TextField/TextField';
import { useMutation } from '@apollo/client';
import auth from '../../../api/auth';
import Button from '../../../components/Button/Button';
import Alert from '../../../components/Alert/Alert';
import Text from '../../../components/Text/Text';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Account email address'),
  password: Yup.string()
    .required('Password is required')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#.]/,
      'Password must contain at least one special character'
    ),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [signIn, { loading, error }] = useMutation(auth.login, {
    onError: (error) => console.log(error),
    onCompleted({ signIn }) {
      navigate('/app/');
      localStorage.setItem('accessToken', JSON.stringify(signIn.accessToken));
    },
  });

  const handleSubmit = async (values: typeof initialValues) => {
    await signIn({
      variables: {
        payload: values,
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
              <Field.Label>Email address</Field.Label>
              <Field.Segment>
                <TextField
                  size={16}
                  autoComplete={'work email webauthn'}
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
                  size={16}
                  autoComplete={'current-password'}
                  placeholder={'Enter your password'}
                />
              </Field.Segment>
              <Field.Message />
            </Field.Block>
          </Field>
          <Button
            width={'full'}
            type={'submit'}
            disabled={loading}
          >
            Sign in
          </Button>
          <Alert>
            <Alert.Content>
              {error ? (
                <Alert.Body justifyContent={'between'}>
                  <Text color={'white'}>{error.message}</Text>
                </Alert.Body>
              ) : null}
            </Alert.Content>
          </Alert>
        </Box>
      </Form>
    </Formik>
  );
};

export default LoginForm;
