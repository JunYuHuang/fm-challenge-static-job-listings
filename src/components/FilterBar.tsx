import React from "react";
import { JobListingType } from "../API";

function FilterBar() {
    return (
        <div className="bg-white -mt-9 mb-14 rounded-md shadow-lg p-5 z-10 flex flex-row justify-between">
            <div className="flex flex-row flex-wrap gap-4">
                <div className="flex flex-row justify-start rounded-md">
                    <div className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground leading-4 p-2 rounded-l-md">Frontend
                    </div>
                    <button className="duration-300 bg-cyan hover:bg-cyan-veryDarkGrayish p-2 rounded-r-md">
                        <img src="./images/icon-remove.svg" alt="An icon of a cross or x." />
                    </button>
                </div>
                <div className="flex flex-row justify-start rounded-md">
                    <div className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground leading-4 p-2 rounded-l-md">CSS
                    </div>
                    <button className="duration-300 bg-cyan hover:bg-cyan-veryDarkGrayish p-2 rounded-r-md">
                        <img src="./images/icon-remove.svg" alt="An icon of a cross or x." />
                    </button>
                </div>
                <div className="flex flex-row justify-start rounded-md">
                    <div className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground leading-4 p-2 rounded-l-md">JavaScript
                    </div>
                    <button className="duration-300 bg-cyan hover:bg-cyan-veryDarkGrayish p-2 rounded-r-md">
                        <img src="./images/icon-remove.svg" alt="An icon of a cross or x." />
                    </button>
                </div>
            </div> 
            <button className="text-grey font-bold text-xs rounded-md p-2 leading-4 duration-300 hover:underline hover:text-cyan">Clear
            </button>
        </div>
    );
}

export default FilterBar;