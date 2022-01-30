import axios from 'axios';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import InputField from '../components/common/InputField';
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

  const validationSchema = yup.object({
    username : yup.string().required("Enter username").test(
      "check-if-username-exist",
      "Username already exist",
      async (value) => {
        const check = await axios.get(`${REACT_APP_SERVER}/api/auth/check?username=${value}`);
        return check.data;
      }
    ),
    email : yup.string().required("Enter email").test(
      "check-if-email-exist",
      "Email already exist",
      async (value) => {
        const check = await axios.get(`${REACT_APP_SERVER}/api/auth/check?email=${value}`);
        return check.data;
      }
    ),
    password : yup.string().required("Enter password"),
    retry_password: yup.string(),
    first_name : yup.string().required("Enter first name"),
    last_name : yup.string().required("Enter last name"),
  })

  const registerSubmit = () => {

  }
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerSubmit}
      
      >
        <Form>
          <InputField name="username" label='username' type="text"/>
          <InputField name="first_name" label='first_name' type="text"/>
          <InputField name="last_name" label='last_name' type="text"/>
          <InputField name="email" label='email' type="email"/>
          <InputField name="password" label='password' type="password"/>
          <InputField name="retry_password" label='retry_password' type="password"/>
        </Form>
      </Formik>
    </main>
  );
};

export default Register;
