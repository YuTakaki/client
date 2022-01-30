import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import InputField from '../components/common/InputField';
import { LoginAction } from '../store/actions/userAction';
import { LoginValuesType } from '../types/types';


const Login = () => {
  const initialValues : LoginValuesType = {
    usernameOrEmail: "",
    password: "",
  }

  const dispatch = useDispatch()

  const validationSchema = yup.object({
    usernameOrEmail : yup.string().required("Please type your username"),
    password : yup.string().required("Please type your password"),

  })

  const loginSubmit = (values : LoginValuesType, {setErrors} : any) => {
    console.log(values)
    dispatch(LoginAction(values));
  }
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={loginSubmit}
      >
        <Form>
          <InputField label="usernameOrEmail" name="usernameOrEmail" type="text"/>
          <InputField label="password" name="password" type="password"/>
          <input type='submit' />
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
