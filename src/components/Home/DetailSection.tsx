import moment from "moment";
import { useRef } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setCurrentReminderAction } from "../../store/slicers/reminderSlicers";
import { TasksType } from "../../types/types";

const DetailSection = () => {

  const detailSectionRef = useRef<HTMLElement>(null);

  const currentReminder : TasksType = useSelector((state : RootStateOrAny) => state.reminderReducer.currentReminder);
  const dispatch = useDispatch();


  return (
    <section 
      ref={detailSectionRef}
      className={`details-section ${currentReminder === null ? 'closeDetailSection' : 'openDetailSection'}`}
    >
      {currentReminder && (
        <>
          <i className='fa fa-close' onClick={() => dispatch(setCurrentReminderAction(null))}></i>
          <div className="details">
            <p className="fade">{currentReminder && moment(currentReminder.date).format('dddd, MMMM DD')}</p>
            <i></i>
          </div>
          <div className="details">
            <h1>{currentReminder?.title}</h1>
            <i></i>
          </div>
          <div className="details-inline">
            <div>
              <p className="fade">Time start</p>
              <h2>{currentReminder?.start_time}</h2>
            </div>
            <div>
              <p className="fade">End Time</p>
              <h2>{currentReminder?.end_time || 'NA'}</h2>
            </div>
          </div>
          <article className="">
            {currentReminder?.note.split(/\n/).map((note : string) => (
              <>
                <p>{note}</p>
                <br />
              </>
            ))}
          </article>
        </>
      )}
    </section>
  );
};

export default DetailSection;
