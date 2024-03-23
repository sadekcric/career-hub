import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";

const Job = ({ job }) => {
  const { logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job;
  return (
    <div className="card card-compact p-5 bg-base-100 shadow-xl">
      <div className="w-[400px] h-[250px]">
        <img className="w-full" src={logo} alt={company_name} />
      </div>

      <div>
        <h2 className="card-title text-5xl mb-3">{job_title}</h2>
        <p className="text-start text-xl  mb-3">{company_name}</p>

        <div className="mb-3 text-start ml-10">
          <button className="btn text-[#7E90FE] font-bold mr-3 border-2 border-[#7E90FE]">{job_type}</button>
          <button className="btn text-[#7E90FE] font-bold mr-3 border-2 border-[#7E90FE]">{remote_or_onsite}</button>
        </div>

        <div className="mb-3 flex gap-10 items-center">
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-lg" />
            <p>{location}</p>
          </div>

          <div className="flex items-center gap-1">
            <MdCurrencyExchange className="text-lg" />
            <p>{salary}</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
