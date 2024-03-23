import { useLoaderData, useParams } from "react-router-dom";
import BannerDetails from "../BannerDetails/BannerDetails";
import { setItemLS } from "../../Utility/Utility";

const JobDetails = () => {
  const { jobs } = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const { job_description, job_responsibility, educational_requirement, contact_information } = job;

  const handleSubmit = () => {
    setItemLS(idInt);
  };

  return (
    <div className="mb-24">
      <BannerDetails />
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-4 space-y-5">
          <div>
            <h2 className="text-2xl font-bold underline mb-2">Job Description:</h2>
            <p>{job_description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold underline mb-2">Job Responsibility:</h2>
            <ul>
              {job_responsibility.map((res, idx) => (
                <li key={idx} className="ml-3 list-disc">
                  {res}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold underline mb-2">Educational Requirement:</h2>
            <p>{educational_requirement}</p>
          </div>
        </div>
        <div className="col-span-2 space-y-3">
          <h2 className="text-2xl font-semibold">{contact_information.Phone}</h2>
          <h2 className="text-2xl font-semibold">{contact_information.email}</h2>
          <h2 className="text-2xl font-semibold">{contact_information.Address}</h2>
          <button onClick={handleSubmit} className="btn btn-primary w-full">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
