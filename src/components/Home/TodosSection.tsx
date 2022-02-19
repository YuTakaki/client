import React, { FormEvent, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { favoriteReminderAction, searchAction } from '../../store/actions/reminderAction';
import { setCurrentReminderAction } from '../../store/slicers/reminderSlicers';
import { TasksType } from '../../types/types';

const TodosSection = () => {

  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');

  const currentReminder : TasksType = useSelector((state : RootStateOrAny) => state.reminderReducer.currentReminder);

  const reminders = useSelector((state : RootStateOrAny) => {
    const formatReminders = [];
    const reminders = state.reminderReducer.reminders
    for (let date in reminders){
      formatReminders.push([date, reminders[date]])
    }
    return formatReminders;
  });

  const favoriteHandle = (e: any ,id : number) => {
    e.stopPropagation();
    dispatch(favoriteReminderAction(id))
  };

  const listReminders = reminders.map((data : any) => {
    const date = data[0];
    const reminders = data[1];
    return (
      <li key={date}>
        <h3>{date}</h3>
        <ul className="todos-lists">
          {reminders.map((reminder : TasksType) => (
            <li 
              className={`todo ${currentReminder && currentReminder.id === reminder.id && 'currentReminder'} ${reminder.favorite ? 'important' : 'not-important'}`} 
              key={reminder.id}
              onClick={() => dispatch(setCurrentReminderAction(reminder))}
            >
              <div className="date">
                <i className='fa fa-bell'></i>
                <p>{reminder.start_time}</p>
              </div>
              <div className="todo-info">
                <h3>{reminder.title}</h3>
              </div>
              <div className="center star">
                <i 
                  className='fa fa-star' 
                  onClick={(e) => favoriteHandle(e, reminder.id!)}></i>
              </div>
            </li>
          ))}
        </ul>
      </li>
    )
  });

  const searchKeyword = (e : FormEvent) => {
    e.preventDefault();
    dispatch(searchAction(keyword));
  }
  return (
    <section className='todos-section'>
      <form onSubmit={searchKeyword}>
        <input type='search' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        <input type="submit" className='button' />
      </form>
      <ul className="todos-dates">
        {listReminders}
      </ul>
    </section>
  );
};

export default TodosSection;
