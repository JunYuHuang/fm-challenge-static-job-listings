import React, { useState, useEffect} from 'react';
import { JobListingType, JobFilterType } from "./API";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobListings, setJobListings] = useState<JobListingType[]>([]);
  const [jobFilters, setJobFilters] = useState<JobFilterType | null>();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setJobListings(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen font-sans bg-cyan-lightGrayishFilterTablets min-h-full">
      <div className="h-40 bg-cyan bg-bg-header-mobile md:bg-bg-header-desktop"></div>
      <div className="mx-6 mb-8 relative">
        <FilterBar />
        { jobListings.map((jobListing: JobListingType) => {
          return <JobListing key={jobListing.id} {...jobListing} />;
        })}
      </div>
    </div>
  );
}

export default App;
