import { Image } from 'astro:assets';
import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const ProjectTile = ({ projects, projectsContent }) => {
  return (
    <div className="tile-grid mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((item, i) => {
        const { image_thumb, title, company, platform, start_date, end_date, short_desc, content_id, url } = item;
        const content = projectsContent.find((content) => content.id === content_id);
        return (
          <>
            <div key={i} className="card card-compact bg-base-100 border-2 border-base-300 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="card-top p-7 pb-4"> 
                {(content && content.body) ? (
                  <button onClick={()=>document.getElementById(`project_modal_${i}`).showModal()}>
                    {title && (<h2 className="card-title !text-xl font-bold !mb-0">{title}</h2>)}
                  </button>
                ) : (
                  title && (<h2 className="card-title !text-xl font-bold !mb-0">{title}</h2>)
                )}
              </div>
              {image_thumb && (
                <figure className="px-7">
                  {(content && content.body) ? (
                    <button className="border-2 border-neutral" onClick={()=>document.getElementById(`project_modal_${i}`).showModal()}>
                      <img src={image_thumb} alt={`${title} Screenshot`} />
                    </button>
                  ) : (
                    <img src={image_thumb} alt={`${title} Screenshot`} />
                  )}
                </figure>
              )}
              <div className="card-body !p-7 !pt-4">
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
                {platform &&(
                  <div className="badge badge-secondary mt-1">{platform}</div>
                )}
                {short_desc && (<div className="py-3" dangerouslySetInnerHTML={{__html: markdownify(short_desc)}}></div>)}
                <div className="card-actions justify-center">
                  {(content && content.body) && (
                    <button className="btn btn-primary btn-wide" onClick={()=>document.getElementById(`project_modal_${i}`).showModal()}>Read More</button>
                  )}
                </div>
              </div>
            </div>
            <dialog id={`project_modal_${i}`} className="modal">
              <div className="modal-box max-w-7xl">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="modal-body mt-6">
                  {(content && content.data && content.data.hero_image) && (
                    <figure className="pb-4">
                      <a href={url} className="card-image" target="_blank">
                        <img src={content.data.hero_image} alt={`${title} Screenshot`} />
                      </a>
                    </figure>
                  )}
                  <div className="flex items-center mb-3">
                    {title && (<h3 className="font-bold text-4xl ">{title}</h3>)} 
                    {url && (<span className="text-2xl ml-4 mr-4">|</span>)}
                    {url && (<a className="link link-secondary text-2xl" href={url}>View Site</a>)}
                  </div>
                  {(content && content.body) && (
                    <div className="long-desc" dangerouslySetInnerHTML={{__html: markdownify(content.body)}}></div>
                  )}
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>
          </>
        );
      })}
    </div>
  );
};

export default ProjectTile;
