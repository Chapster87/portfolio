const ProjectTile = ({ content }) => {
  const hasPage = content && content.body;
  const  { title, company, platform, start_date, end_date, short_desc, image_thumb } =  (content && content.data) || {};
  return (
    <div className="card card-compact bg-base-100 border-2 border-base-300 shadow-lg hover:shadow-xl transition-all hover:scale-105">
      {image_thumb && (
        <figure className="bg-base-200 pt-5 px-7">
          {hasPage ? (
            <a href={`/project/${content.id}`} data-astro-prefetch>
              <img src={image_thumb} alt={`${title} Screenshot`} />
            </a>
          ) : (
            <img src={image_thumb} alt={`${title} Screenshot`} />
          )}
        </figure>
      )}
      <div className="card-body !p-7 !pt-4">
        {hasPage ? (
          <a href={`/project/${content.id}`} data-astro-prefetch>
            {title && (<h2 className="card-title !text-xl font-bold !mb-0">{title}</h2>)}
          </a>
        ) : (
          title && (<h2 className="card-title !text-xl font-bold !mb-0">{title}</h2>)
        )}
        {(start_date || end_date) && (
          <div className="text-md">
            <span className="font-bold">Project Date: </span>
            <span>
              {start_date}
              {(end_date && start_date) && (" - ")}
              {end_date}
            </span>
          </div>
        )}
        {company && (<div className="text-md">
          <span className="font-bold">Employer: </span>
          <span>{company}</span>
        </div>)}
        {platform && (
          <div className="badge badge-md badge-secondary mt-1">{platform}</div>
        )}
        {short_desc && (<div className="py-3"><p class="text-md">{short_desc}</p></div>)}
        <div className="card-actions justify-center">
          {hasPage && (
            <a href={`/project/${content.id}`} className="btn btn-primary btn-wide" data-astro-prefetch>Read More</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
