import { Form, Formik } from 'formik';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { addReminderAction } from '../../store/actions/reminderAction';
import { TasksType } from '../../types/types';
import InputField from '../common/InputField';
import TextField from '../common/TextField';

const CreateTask = () => {
  const initialValue = {
    title : '',
    start_time : '',
    end_time : '',
    note : '',
  }

  const dispatch = useDispatch();
  const currentDate = useSelector((state : RootStateOrAny) => state.currentDateReducer)

  const validateSchema = yup.object({
    title : yup.string().required(),
    start_time : yup.string().required("enter start time"),
    end_time : yup.string().nullable(),
    note : yup.string(),
  });
  const submitTask = async(value : TasksType) => {
    value.date = currentDate;
    value.end_time = value.end_time === "" ? null : value.end_time;
    await dispatch(addReminderAction(value));
    closeCreateTaskForm();
  }

  const closeCreateTaskForm = () => {
    document.querySelector('.create-task-container')?.classList.add('hide');
  }

  return (
    <div className='create-task-container hide'>
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
            <button type='button' onClick={closeCreateTaskForm}>Cancel</button>
            <input type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTask;
