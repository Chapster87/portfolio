import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const ProjectTile = ({ project_list }) => {
  return (
    <div className="tile-grid mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {project_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div key={i} className="flex flex-col border-gray-200 shadow dark:bg-gray-800 dark:border-gray-70 rounded-lg bg-surface transition-all hover:scale-105">
            <a href={item.url}>
              <img class="rounded-t-lg" src="/images/programming-1.webp" alt="" />
            </a>
            <div class="p-5">
              <a href={item.url} className="text-secondary">
                <span className="icon">
                  <FeatherIcon />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              </a>
              <p>{item.start_date} - {item.end_date}</p>
              <p>{item.company}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html: markdownify(item.desc)}}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
