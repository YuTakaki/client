import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CalendarSection from "../components/Home/CalendarSection";
import CreateTask from "../components/Home/CreateTask";
import DetailSection from "../components/Home/DetailSection";
import NavSection from "../components/Home/NavSection";
import TodosSection from "../components/Home/TodosSection";
import WeatherSeaction from "../components/Home/WeatherSeaction";
import { getReminderAction } from "../store/actions/reminderAction";
import { setTodosAction } from "../store/slicers/reminderSlicers";
import "../styles/home.scss";

const Home = () => {
  const auth = useSelector((state : RootStateOrAny) => state.userReducer.auth);
  const dispatch = useDispatch();
  const currentOption = useSelector((state : RootStateOrAny) => state.reminderReducer.currentOption);
  const currentDate = useSelector((state : RootStateOrAny) => state.currentDateReducer);
  const tasks = useSelector((state : RootStateOrAny) => state.calendarTaskReducer)

  useEffect(() => {
    if (auth) {
      if (currentOption !== "" && currentOption !== "search") {
        dispatch(getReminderAction(currentOption));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, auth, currentOption]);

  useEffect(() => {
    if (auth && currentOption === "") {
      const filterTasks = tasks.filter((_task : any) => _task.date === currentDate);
      dispatch(setTodosAction(filterTasks))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, auth, currentOption, currentDate]);

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
