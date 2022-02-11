import moment from 'moment';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { setCurrentDateAction } from '../../store/slicers/currentDateSlicers';
const CalendarSection = () => {

  const dispatch = useDispatch();

  const openCreateTaskForm = () => {
    document.querySelector('.create-task-container')?.classList.remove('hide');
  }
  return (
    <div className='calendarSection'>
      <Calendar 
        className="white-calendar"
        onChange={(date : Date) => dispatch(setCurrentDateAction(moment(date).format('YYYY-MM-DD')))}
        defaultValue={new Date()}
      />
      <div className="center">
        <button onClick={openCreateTaskForm} className="button" id='createBtn'>Create</button>
      </div>
    </div>
  );
};

export default CalendarSection;
