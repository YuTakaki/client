import React from 'react';

const TodosSection = () => {
  return (
    <section className='todos-section'>
      <form>
        <input type='search'/>
        <input type="submit" className='button' />
      </form>
      <ul className="todos-dates">
        <li>
          <h3>April 2</h3>
          <ul className="todos-lists">


            <li className="todo">
              <div className="date">
                <i></i>
                <p>12:00 pm</p>
              </div>
              <div className="todo-info">
                <h3>Conference Meeting</h3>
              </div>
            </li>

            <li className="todo">
              <div className="date">
                <i></i>
                <p>12:00 pm</p>
              </div>
              <div className="todo-info">
                <h3>Conference Meeting</h3>
              </div>
            </li>

          </ul>
        </li>

        <li>
          <h3>April 2</h3>
          <ul className="todos-lists">

            <li className="todo important">
              <div className="date">
                <i></i>
                <p>12:00 pm</p>
              </div>
              <div className="todo-info">
                <h3>Conference Meeting</h3>
              </div>
            </li>

          </ul>
        </li>
      </ul>
    </section>
  );
};

export default TodosSection;
