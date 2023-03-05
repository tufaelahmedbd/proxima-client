import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project bg-slate-800 p-5 rounded-xl  shadow-xl border-slate-700 flex flex-col gap-5 w-[30rem]">
      <div className="top">
        <span className=" text-sky-400">ID: {project._id}</span>
        <h3 className=" text-3xl font-medium">{project.title}</h3>
        <span className=" uppercase text-xs tracking-widest text-slate-500 font-medium">
          {project.tech}
        </span>
      </div>

      <div className="mid text-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added on: {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last updated: {new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>

        <div className="right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default ProjectDetails;
