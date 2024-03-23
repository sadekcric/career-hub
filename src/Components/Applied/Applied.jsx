import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemsLS } from "../../Utility/Utility";
import AppliedJob from "./AppliedJob";

const Applied = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const { jobs } = useLoaderData();

  useEffect(() => {
    const storedJob = getItemsLS();

    if (jobs.length) {
      const jobsApplied = jobs.filter((job) => storedJob.includes(job.id));
      setAppliedJob(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      {appliedJob.map((job) => (
        <AppliedJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Applied;
