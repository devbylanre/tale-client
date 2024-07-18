import React from 'react';
import { Form, Formik } from 'formik';
import Field from '../../../components/Field/Field';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';

const initialValues = { firstName: '', lastName: '', email: '', password: '' };

const RegisterForm = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box spaceY={'sm'}>
          <Field name='firstName'>
            <Field.Label>First name</Field.Label>
            <Field.Segment>
              <TextField
                size={16}
                type={'text'}
                autoComplete={'first name'}
                placeholder={'Enter your first name'}
              />
            </Field.Segment>
          </Field>

          <Field name='lastName'>
            <Field.Label>Last name</Field.Label>
            <Field.Segment>
              <TextField
                size={16}
                type={'text'}
                autoComplete={'last name'}
                placeholder={'Enter your last name'}
              />
            </Field.Segment>
          </Field>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
