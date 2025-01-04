import { markdownify } from "@/lib/utils/textConverter";

const Education = ({ education_data }) => {
  const { school, start_year, end_year, location, degree, concentration } = education_data;
  return (
    <ul className="education-info">
      <li>
        {(school && location) && (
          <div class="flex items-center">
            <h3 className="text-lg font-black">{school}</h3><span className="font-bold pl-1">{`- ${location}`}</span>
          </div>
        )}
        {(start_year && end_year) && (
            <li>
              <span className="text-lg font-bold">{`${start_year} - ${end_year}`}</span>
            </li>
        )}
        <ul>
          {degree && (
            <li>
              <span className="text-sm font-bold">Degree: </span>
              <span>{degree}</span>
            </li>
          )}
          {(concentration && concentration.length > 0) && (
            <li>
              <span className="text-sm font-bold">Concentration(s): </span>
              {concentration.map((major, i) => {
                return (
                  <>
                    <span key={i}>{major}</span>
                    {i < concentration.length - 1 && (<span>, </span>)}
                  </>
                )
              })}
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default Education;

