import { Calendar, MapPin } from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const WorkExp = ({ employment_history }) => {
  return (
    <div className="work-history row">
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical ml-0">
        {employment_history.map((job, i) => {
          const { employer, location, remote, positions } = job;
          return (
            <li key={i}>
              { i !== 0 && (
                <hr />
              )}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-secondary h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className={`timeline-end pl-2${i < (employment_history.length - 1) ? ' !mb-2' : ''}`}>
                <div className="employer flex flex-col md:flex-row" >
                  { employer && ( <div className="text-lg font-black text-secondary" dangerouslySetInnerHTML={{__html: markdownify(employer)}}></div> )}
                  { location && (
                    <div className="flex items-center mt-1 md:mt-0">
                      <span className="text-gray-400 px-2 hidden md:inline">-</span>
                      <MapPin className="text-gray-400 pr-1" />
                      {location}
                      { remote && (<span className="pl-1">(Remote)</span>)}
                    </div>
                  )}
                </div>
                {(positions && positions.length > 0) && (
                  positions.map((position, i) => {
                    const { title, start_date, end_date, notes } = position;
                    return ( 
                      <div key={i} className={`employment-position py-2 md:p-2${i < (positions.length - 1) ? ' mb-2' : ''}`}>
                        <div className="flex flex-col md:flex-row md:items-center">
                          { title && ( <div className="text-lg font-black italic">{title}</div> )}
                          { ( start_date || end_date ) && (
                            <div className="badge badge-md badge-neutral p-3 mt-2 md:mt-0 md:ml-3">
                              <Calendar className="pr-2"/>
                              <time className="">
                                { start_date && ( start_date ) }{ end_date && ( ` - ${end_date}`) }
                              </time>
                            </div>
                          )}
                        </div>
                        {(notes && notes.length > 0) && (
                          <ul className="mt-3 md:mt-2">
                            {notes.map((note, i) => (
                              <li key={i}>{note}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  })
                )}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExp;

