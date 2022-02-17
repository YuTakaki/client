import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getTodosMonthAction } from '../../store/actions/calendarTaskAction';
import { setCurrentDateAction } from '../../store/slicers/currentDateSlicers';
import { changeTaskOptionAction } from '../../store/slicers/reminderSlicers';
const CalendarSection = () => {

  const dispatch = useDispatch();
  const [months, setMonths] = useState<any>([])
  const tasks = useSelector((state : RootStateOrAny) => state.calendarTaskReducer);

  const getTaskBasedOnMonth = (date = new Date()) => {
    const data = {
      month: date.getMonth(), 
      year: date.getFullYear()
    }
    dispatch(getTodosMonthAction(data));
    setMonths([...months, date]);
  }

  useEffect(() => {
    getTaskBasedOnMonth()
  }, []);

  const openCreateTaskForm = () => {
    document.querySelector('.create-task-container')?.classList.remove('hide');
  }

  return (
    <div className='calendarSection'>
      <Calendar 
        className="white-calendar"
        onChange={async(date : Date) => {
          await dispatch(setCurrentDateAction(moment(date).format('YYYY-MM-DD')));
          await dispatch(changeTaskOptionAction(''));
        }}
        defaultValue={new Date()}
        onActiveStartDateChange={(obj) => {
          const date = new Date(obj.activeStartDate);
          if(!months.some((_month : any) => new Date(_month).getMonth() === date.getMonth())){
            getTaskBasedOnMonth(date);
          }
        }}
        tileClassName={({ date } : any) => {
          if (
            tasks.find(
              (x : any) =>
                x.date === moment(new Date(date)).format('YYYY-MM-DD')
            )
          ) {
            return "highlight";
          }
          return ""
        }}
      />
      <div className="center">
        <button onClick={openCreateTaskForm} className="button" id='createBtn'>Create</button>
      </div>
    </div>
  );
};

export default CalendarSection;
