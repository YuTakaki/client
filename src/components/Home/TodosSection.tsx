import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { TasksType } from '../../types/types';

const TodosSection = () => {
  const reminders = useSelector((state : RootStateOrAny) => {
    const formatReminders = [];
    const reminders = state.reminderReducer.reminders
    for (let date in reminders){
      formatReminders.push([date, reminders[date]])
    }
    return formatReminders;
  });

  const listReminders = reminders.map((data : any) => {
    const date = data[0];
    const reminders = data[1]
    return (
      <li key={date}>
        <h3>{date}</h3>
        <ul className="todos-lists">
          {reminders.map((reminder : TasksType) => (
            <li className="todo" key={reminder.id}>
              <div className="date">
                <i></i>
                <p>{reminder.start_time}</p>
              </div>
              <div className="todo-info">
                <h3>{reminder.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </li>
    )
  })
  return (
    <section className='todos-section'>
      <form>
        <input type='search'/>
        <input type="submit" className='button' />
      </form>
      <ul className="todos-dates">
        {listReminders}
      </ul>
    </section>
  );
};

export default TodosSection;
