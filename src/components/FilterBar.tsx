import RemoveFilterButton from "./RemoveFilterButton";

interface Props {
    jobFilters: Set<string>,
    removeJobFilter: (filter: string) => void,
    clearJobFilter: () => void
}

function FilterBar({ jobFilters, removeJobFilter, clearJobFilter }: Props) {
    return (
        <div className="bg-white -mt-9 mb-14 rounded-md shadow-lg p-5 z-10 flex flex-row justify-between xl:mb-10">
            <div className="flex flex-row flex-wrap gap-4">
                { Array.from(jobFilters).map((jobFilter: string) => {
                    return (
                        <RemoveFilterButton key={`filter-${jobFilter}`} buttonText={jobFilter} removeJobFilter={removeJobFilter} />
                    );
                })}
            </div> 
            <button onClick={() => clearJobFilter()} className="text-grey font-bold text-xs rounded-md p-2 leading-4 duration-300 hover:underline hover:text-cyan">Clear
            </button>
        </div>
    );
}

export default FilterBar;