import { Form, Formik } from 'formik';
import React from 'react';
import Calendar from 'react-calendar';
import * as yup from 'yup';
import InputField from '../common/InputField';
import TextField from '../common/TextField';

const CreateTask = () => {
  const initialValue = {

  }
  const validateSchema = yup.object({});
  const submitTask = () => {
  }
  return (
    <div className='create-task-container'>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchema}
        onSubmit={submitTask}
      >
        <Form>
          <InputField type="text" name='title' label='Title'/>
          <div className='time-fields'>
            <InputField type="time" name='start_time' label='start time'/>
            <InputField type="time" name='end_time' label='end time'/>
          </div>
          <TextField name="note" label='Note' />
          <div className='time-fields'>
            <button>Cancel</button>
            <input type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTask;
