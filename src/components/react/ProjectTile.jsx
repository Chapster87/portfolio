import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const ProjectTile = ({ project_list }) => {
  return (
    <div className="tile-grid mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {project_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div key={i} className="card card-compact bg-base-100 w-96 shadow-xl transition-all hover:scale-105">
            <figure>
              <a href={item.url}>
                <img
                  src="/images/programming-1.webp"
                  alt="" />
              </a>
            </figure>
            <div className="card-body">
              <a href={item.url}>
                <span className="icon text-secondary">
                  <FeatherIcon />
                </span>
                <h2 className="card-title">{item.title}</h2>
              </a>
              <p>{item.start_date} - {item.end_date}</p>
              <p>{item.company}</p>
              <p dangerouslySetInnerHTML={{__html: markdownify(item.desc)}}></p>
              <div className="card-actions justify-end">
                <a href={item.url} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
