import React, { useState, useEffect } from 'react';
import { JobListingInterface, NewJobListingInterface } from "./API";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobListings, setJobListings] = useState<NewJobListingInterface[]>([]);
  const [jobFilters, setJobFilters] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        let array = data.map((datum: JobListingInterface) => {
          return {
            id: datum.id,
            company: datum.company,
            logo: datum.logo,
            new: datum.new,
            featured: datum.featured,
            position: datum.position,
            postedAt: datum.postedAt,
            contract: datum.contract,
            location: datum.location,
            filterTags: [datum.role, datum.level, ...datum.languages, ...datum.tools]
          };
        });
        setJobListings(array);
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

  const shouldShowJobListing = (array: string[], filterArray: string[]) => {
    return (filterArray.every(element => array.includes(element)));
  };

  return (
    <div className="font-sans bg-cyan-lightGrayishFilterTablets min-h-screen">
      <div className="h-40 bg-cyan bg-bg-header-mobile md:bg-bg-header-desktop"></div>
      <div className="mx-6 pb-8 relative xl:max-w-desktop xl:mx-auto xl:pb-32">
        { jobFilters.size > 0 && <FilterBar jobFilters={jobFilters} removeJobFilter={removeJobFilter} clearJobFilter={clearJobFilter} />}
        { jobListings.map((jobListing: NewJobListingInterface) => {
          return shouldShowJobListing(jobListing.filterTags, Array.from(jobFilters)) && <JobListing key={jobListing.id} jobListing={jobListing} addJobFilter={addJobFilter} />
        })}
      </div>
    </div>
  );
}

export default App;
