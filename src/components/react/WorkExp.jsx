import { Calendar, MapPin } from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const WorkExp = ({ employment_history }) => {
  return (
    <section className="work-history">
      <div className="row">
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          {employment_history.map((job, i) => {
            const { employer, location, remote, positions } = job;
            return (
              <li>
                { i !== 0 && (
                  <hr />
                )}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <div className={`timeline-end pl-2${i < (employment_history.length - 1) ? ' !mb-2' : ''}`}>
                  <div className="employer flex" >
                    { employer && ( <div className="text-lg font-black text-primary" dangerouslySetInnerHTML={{__html: markdownify(employer)}}></div> )}
                    { location && (
                      <div className="flex items-center">
                        <span className="text-gray-400 px-2">-</span>
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
                        <div className={`employment-position p-2${i < (positions.length - 1) ? ' mb-2' : ''}`}>
                          <div className="flex items-center">
                            { title && ( <div className="text-lg font-black italic">{title}</div> )}
                            { ( start_date || end_date ) && (
                              <>
                                <span className="text-gray-400 px-2">-</span>
                                <Calendar className="text-gray-400 pr-1"/>
                                <time className="font-mono italic">
                                  { start_date && ( start_date ) }{ end_date && ( ` - ${end_date}`) }
                                </time>
                              </>
                            )}
                          </div>
                          {(notes && notes.length > 0) && (
                            <ul class="list-disc ml-4">
                              {notes.map((note, i) => (
                                <li>{note}</li>
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
    </section>
  );
};

export default WorkExp;

