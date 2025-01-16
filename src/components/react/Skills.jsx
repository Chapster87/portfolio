const Skills = ({ skills }) => {
  return (
    <>
      {(skills && skills.length > 0) && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const { name, logo, level } = skill;
            let levelPercentage = 0;

            if (level === "Novice") {
              levelPercentage = 25;
            } else if (level === "Intermediate") {
              levelPercentage = 50;
            } else if (level === "Proficient") {
              levelPercentage = 75;
            } else if (level === "Expert") {
              levelPercentage = 100;
            }

            return (
              <div key={i} className="card bg-base-200 dark:bg-neutral border-2 border-base-300 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                {logo && (
                  <div className="p-3">
                    <figure className="p-3 bg-white rounded-xl">
                      <img src={logo} alt={name} loading="lazy" />
                    </figure>
                  </div>
                )}
                <div className="card-body items-center text-center p-6">
                  {name && (<h2 className="card-title text-lg">{name}</h2>)}
                  {level  && (
                    <>
                      <div className="skill-level">
                        <span className="text-sm font-bold">Proficiency: </span>
                        <span>{level}</span>
                      </div>
                      <progress className="progress progress-secondary w-full" value={levelPercentage} max="100"></progress>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  );
};

export default Skills;

