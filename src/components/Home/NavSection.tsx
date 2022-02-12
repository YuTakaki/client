import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeTaskOptionAction } from "../../store/slicers/reminderSlicers";

const NavSection = () => {
  const options = ['today', 'important', 'upcomming events'];
  const dispatch = useDispatch();
  const currentOption = useSelector((state : RootStateOrAny) => state.reminderReducer.currentOption);
  return (
    <section className='nav-section'>
      <h1>remindMe</h1>
      <nav>
        <ul id="nav1">
          {options.map(_option => (
            <li
              key={_option}
              className={currentOption.replace('-', ' ') === _option ? 'active' : ''}
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
