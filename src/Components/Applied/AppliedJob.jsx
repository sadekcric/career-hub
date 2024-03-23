import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const { logo, job_title, company_name, job_type, remote_or_onsite, salary, id, location } = job;
  return (
    <div className="flex gap-3 items-center p-4 mb-5 border-2 rounded-sm w-1/2 mx-auto">
      <div className="w-[200px]">
        <img src={logo} alt="" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="card-title text-3xl mb-1">{job_title}</h2>
          <p className="text-start text-xl  mb-1">{company_name}</p>

          <div className="mb-1 text-start">
            <button className="btn text-[#7E90FE] font-bold mr-3 border-2 border-[#7E90FE]">{job_type}</button>
            <button className="btn text-[#7E90FE] font-bold mr-3 border-2 border-[#7E90FE]">{remote_or_onsite}</button>
          </div>

          <div className="mb-1 flex gap-5 items-center">
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-lg" />
              <p>{location}</p>
            </div>

            <div className="flex items-center gap-1">
              <MdCurrencyExchange className="text-lg" />
              <p>{salary}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card-actions">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
