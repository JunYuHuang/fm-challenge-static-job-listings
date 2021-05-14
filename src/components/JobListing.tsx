import { NewJobListingInterface } from "../API";
import AddFilterButton from "./AddFilterButton";

interface Props {
    jobListing: NewJobListingInterface,
    addJobFilter: (filter: string) => void
}

function JobListing({ jobListing, addJobFilter }: Props) {
    let { id, company, logo, featured, position, postedAt, contract, location, filterTags } = jobListing;

    return (
        <div key={`posting-${id}`} className={`bg-white mt-10 first:mt-14 rounded shadow-lg p-6 relative border-l-4 border-solid ${featured ? "border-cyan" : ""} xl:flex xl:flex-row xl:justify-start xl:p-8 xl:mt-6 xl:first:mt-20`}>
            <img className="w-12 h-12 z-10 absolute -mt-12 xl:static xl:mt-0 xl:w-auto xl: xl:h-auto xl:mr-8" src={`${logo}`} alt={`The logo of the company ${company}.`} />
            <div className="mt-1.5 xl:mt-0">
                <div className="flex flex-row mb-2 items-center">
                    <p className="text-cyan font-bold text-xs py-1.5 mr-3 xl:text-sm xl:py-0">{company}</p>
                    { jobListing.new ? <span className="text-white font-bold text-xxs bg-cyan uppercase rounded-full py-1.5 px-2 mr-2">New!</span> : ``}
                    { featured? <span className="text-white font-bold text-xxs bg-cyan-veryDarkGrayish uppercase rounded-full py-1.5 px-2">Featured</span> : ``}
                </div>
                <p className="block text-sm font-bold text-cyan-veryDarkGrayish hover:text-cyan mb-2 cursor-pointer duration-300 xl:text-base">
                    {position}
                </p>
                <div className="flex flex-row text-xs text-grey font-medium xl:text-sm">
                    <p className="leading-6">{postedAt}</p>
                    <p className="text-base px-1.5 xl:px-2">&#8226;</p>
                    <p className="leading-6">{contract}</p>
                    <p className="text-base px-1.5 xl:px-2">&#8226;</p>
                    <p className="leading-6">{location}</p>
                </div>
            </div>
            <hr className="mt-3 border-solid border-1 border-grey xl:hidden" />
            <div className="xl:flex-grow xl:flex xl:flex-row xl:justify-end xl:items-center">
                { filterTags.map((filterTag) => {
                    return <AddFilterButton key={`filter-${filterTag}`} buttonText={filterTag} addJobFilter={addJobFilter}  />;
                })}
            </div>
        </div>
    );
}

export default JobListing;