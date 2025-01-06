const Education = ({ education_data }) => {
  const { school, logo, start_year, end_year, location, degree, concentration } = education_data;
  return (
    <div className="card bg-base-200 dark:bg-neutral-content dark:text-neutral border-2 border-base-300 shadow-lg hover:shadow-xl transition-all hover:scale-105">
      {logo && (
        <figure className="px-6 pt-6">
          <img src={logo} alt={school} className="max-w-40" loading="lazy" />
        </figure>
      )}
      <div className="card-body block text-center p-6">
        {school && (<h3 className="text-lg font-black mb-0">{school}</h3>)}
        {location && (
          <div className="block">
            <p className="text-md font-bold pl-1">{location}</p>
          </div>
        )}
        {(start_year && end_year) && (<span className="text-lg font-bold">{`${start_year} - ${end_year}`}</span>)}
        {degree && (
          <div>
            <span className="text-sm font-bold">Degree: </span>
            <span>{degree}</span>
          </div>
        )}
        {(concentration && concentration.length > 0) && (
          <div>
            <span className="text-sm font-bold">Concentration(s): </span>
            {concentration.map((major, i) => {
              return (
                <>
                  <span key={i}>{major}</span>
                  {i < concentration.length - 1 && (<span>, </span>)}
                </>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;

