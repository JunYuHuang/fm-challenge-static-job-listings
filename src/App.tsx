import React, { useState, useEffect } from 'react';
import { JobListingType } from "./API";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobListings, setJobListings] = useState<JobListingType[]>([]);
  const [jobFilters, setJobFilters] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setJobListings(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  // helper functions
  //

  const addJobFilter = (filter: string) => {
    setJobFilters((prev) => new Set(prev.add(filter)));
  };

  const removeJobFilter = (filter: string) => {
    const newArray = Array.from(jobFilters).filter((jobFilter) =>  jobFilter !== filter);
    setJobFilters(new Set(newArray));
  };

  const clearJobFilter = () => {
    setJobFilters(new Set());
  };

  return (
    <div className="font-sans bg-cyan-lightGrayishFilterTablets min-h-full">
      <div className="h-40 bg-cyan bg-bg-header-mobile md:bg-bg-header-desktop"></div>
      <div className="mx-6 pb-8 relative xl:max-w-desktop xl:mx-auto xl:pb-32">
        { jobFilters.size > 0 && <FilterBar jobFilters={jobFilters} removeJobFilter={removeJobFilter} clearJobFilter={clearJobFilter} />}
        { jobListings.map((jobListing: JobListingType) => {
          return <JobListing key={jobListing.id} jobListing={jobListing} addJobFilter={addJobFilter} />;
        })}
      </div>
    </div>
  );
}

export default App;
