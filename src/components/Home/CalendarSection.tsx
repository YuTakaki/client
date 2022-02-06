import Calendar from 'react-calendar';
const CalendarSection = () => {
  return (
    <div className='calendarSection'>
      <Calendar className="white-calendar"/>
      <div className="center">
        <button className="button" id='createBtn'>Create</button>
      </div>
    </div>
  );
};

export default CalendarSection;
