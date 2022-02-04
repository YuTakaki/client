import CalendarSection from "../components/Home/CalendarSection";
import DetailSection from "../components/Home/DetailSection";
import NavSection from "../components/Home/NavSection";
import TodosSection from "../components/Home/TodosSection";
import WeatherSeaction from "../components/Home/WeatherSeaction";
import "../styles/home.scss";

const Home = () => {
  return (
    <main>
      <NavSection />
      <TodosSection />
      <section className='calendar-weather-details-section'>
        <DetailSection />
        <section className='calendar-weather-section'>
          <WeatherSeaction />
          <CalendarSection />
        </section>
      </section>
    </main>
  );
};

export default Home;
