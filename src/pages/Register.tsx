import axios from 'axios';
import { Form, Formik, FormikProps } from 'formik';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import InputField from '../components/common/InputField';
import { RegisterAction } from '../store/actions/userAction';
import { RegisterValuesType } from '../types/types';
const { REACT_APP_SERVER } = process.env;
const Register = () => {
  const initialValues = {
    username : "",
    email : "",
    password : "",
    retry_password: "",
    first_name : "",
    last_name : "",
  }

  const dispatch = useDispatch();

  const formikRef = useRef<FormikProps<RegisterValuesType>>(null);

  const validationSchema = yup.object({
    username : yup.string().required("Enter username").test(
      "check-if-username-exist",
      "Username already exist",
      async (value) => {
        const check = await axios.get(`${REACT_APP_SERVER}/api/auth/check?username=${value}`);
        return check.data;
      }
    ),
    email : yup.string().email("Enter valid email").required("Enter email").test(
      "check-if-email-exist",
      "Email already exist",
      async (value) => {
        const check = await axios.get(`${REACT_APP_SERVER}/api/auth/check?email=${value}`);
        return check.data;
      }
    ),
    password : yup.string().min(7, "Max of 7 length").required("Enter password"),
    retry_password: yup.string().test(
      "",
      (value) => {
        if (formikRef.current) {
          if (formikRef.current.values.password === value) return true
        }
        return false

      }
    ),
    first_name : yup.string().required("Enter first name"),
    last_name : yup.string().required("Enter last name"),
  })

  const registerSubmit = async(values : RegisterValuesType) => {
    try {
      const data = {...values};
      delete data['retry_password'];
      dispatch(RegisterAction(data));
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerSubmit}
        innerRef={formikRef}
      >
        <Form>
          <InputField name="username" label='username' type="text"/>
          <InputField name="first_name" label='first_name' type="text"/>
          <InputField name="last_name" label='last_name' type="text"/>
          <InputField name="email" label='email' type="email"/>
          <InputField name="password" label='password' type="password"/>
          <InputField name="retry_password" label='retry_password' type="password"/>
          <input type='submit' />
        </Form>
      </Formik>
    </main>
  );
};

export default Register;
