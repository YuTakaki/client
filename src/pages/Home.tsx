import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CalendarSection from "../components/Home/CalendarSection";
import CreateTask from "../components/Home/CreateTask";
import DetailSection from "../components/Home/DetailSection";
import NavSection from "../components/Home/NavSection";
import TodosSection from "../components/Home/TodosSection";
import WeatherSeaction from "../components/Home/WeatherSeaction";
import { getReminderAction } from "../store/actions/reminderAction";
import "../styles/home.scss";

const Home = () => {
  const auth = useSelector((state : RootStateOrAny) => state.userReducer.auth);
  const dispatch = useDispatch();
  const currentOption = useSelector((state : RootStateOrAny) => state.taskOptionReducer)

  useEffect(() => {
    if (auth) {
      dispatch(getReminderAction(currentOption.replace(' ', '-')));
    }
  }, [dispatch, auth, currentOption]);

  return (
    <main>
      <CreateTask />
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
