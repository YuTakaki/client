import NavSection from "../components/Home/NavSection";
import TodosSection from "../components/Home/TodosSection";
import "../styles/home.scss";

const Home = () => {
  return (
    <main>
      <NavSection />
      <TodosSection />
      <section className='calendar-details-section'>
        <section className='details-section'>
          <div className="details">
            <p className="fade">Saturday April 22</p>
            <i></i>
          </div>
          <div className="details">
            <h1>Todo Title</h1>
            <i></i>
          </div>
          <div className="details-inline">
            <span className="tag">Work</span>
            <span className="tag">Work</span>
            <span className="tag">Work</span>
          </div>
          <div className="details-inline">
            <div>
              <p className="fade">Duration</p>
              <h2>7hrs</h2>
            </div>
            <div>
              <p className="fade">Time start</p>
              <h2>13:00 pm</h2>
            </div>
          </div>
          <article className="">
            <p>Ipsum magna adipisicing dolore minim dolor occaecat veniam in dolore. Commodo cupidatat aliquip consequat incididunt. Cillum esse culpa fugiat veniam voluptate eu id eu. Tempor aliquip nostrud reprehenderit elit ullamco id incididunt aute veniam. Anim culpa occaecat eiusmod magna incididunt ad ipsum ex qui. Esse sunt incididunt consectetur commodo.</p>
            <br />
            <p>Ipsum magna adipisicing dolore minim dolor occaecat veniam in dolore. Commodo cupidatat aliquip consequat incididunt. Cillum esse culpa fugiat veniam voluptate eu id eu. Tempor aliquip nostrud reprehenderit elit ullamco id incididunt aute veniam. Anim culpa occaecat eiusmod magna incididunt ad ipsum ex qui. Esse sunt incididunt consectetur commodo.</p>
          </article>
        </section>
        <section className='calendar-section'>
        </section>
      </section>
    </main>
  );
};

export default Home;
