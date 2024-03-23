import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => setData(json.jobs));
  }, []);
  // console.log(data.jobs);

  return (
    <div className="text-center mt-24">
      <h3 className="text-5xl">Featured Jobs</h3>
      <p className="text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="grid grid-cols-2 gap-6">
        {data.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div className={dataLength === data.length && "hidden"}>
        <button onClick={() => setDataLength(data.length)} className="btn btn-primary my-10 mx-auto">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Featured;
