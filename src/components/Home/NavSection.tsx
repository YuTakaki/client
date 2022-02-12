import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeTaskOptionAction } from "../../store/slicers/taskOptionSlicer";

const NavSection = () => {
  const options = ['today', 'important', 'upcomming events'];
  const dispatch = useDispatch();
  const currentOption = useSelector((state : RootStateOrAny) => state.taskOptionReducer)
  return (
    <section className='nav-section'>
      <h1>remindMe</h1>
      <nav>
        <ul id="nav1">
          {options.map(_option => (
            <li 
              className={currentOption === _option ? 'active' : ''}
              onClick={() => dispatch(changeTaskOptionAction(_option))}
            >{_option}</li>
          ))}
        </ul>
        
        <ul>
          <li>Profile</li>
          <li>Log-out</li>
        </ul>
      </nav>
    </section>
  );
};

export default NavSection;
