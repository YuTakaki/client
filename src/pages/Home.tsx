import NavSection from "../components/Home/NavSection";
import "../styles/home.scss";

const Home = () => {
  return (
    <main>
      <NavSection />
      <section className='todos-section'>
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
        </ul>
      </section>
      <section className='calendar-details-section'>
        <section className='details-section'>
        </section>
        <section className='calendar-section'>
        </section>
      </section>
    </main>
  );
};

export default Home;
