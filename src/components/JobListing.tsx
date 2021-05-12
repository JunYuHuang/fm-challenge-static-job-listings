import React from "react";
import { JobListingType } from "../API";

function JobListing(props: JobListingType) {
    let { 
        id,
        company,
        logo,
        // new,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools } = props;

    return (
        <div key={`posting-${id}`} className={`bg-white mt-10 first:mt-14 rounded shadow-lg p-6 relative border-l-4 border-solid ${featured ? "border-cyan" : ""}`}>
            <img className="w-12 h-12 z-10 absolute -mt-12" src={`${logo}`} alt={`The logo of the company ${company}.`} />
            <div className="mt-1.5">
                <div className="flex flex-row mb-2 leading-3">
                    <p className="text-cyan font-bold text-xs py-1.5 mr-3 ">{company}</p>
                    { props.new ? <span className="text-white font-bold text-xxs bg-cyan uppercase rounded-full p-1.5 mr-2 leading-4">New!</span> : ``}
                    { featured? <span className="text-white font-bold text-xxs bg-cyan-veryDarkGrayish uppercase rounded-full p-1.5 leading-4">Featured</span> : ``}
                </div>
                <p className="block text-sm font-bold text-cyan-veryDarkGrayish hover:text-cyan mb-2 cursor-pointer duration-300">
                    {position}
                </p>
                <div className="flex flex-row text-xs text-grey font-medium">
                    <p className="leading-6">{postedAt}</p>
                    <p className="text-base px-1.5">&#8226;</p>
                    <p className="leading-6">{contract}</p>
                    <p className="text-base px-1.5">&#8226;</p>
                    <p className="leading-6">{location}</p>
                </div>
            </div>
            <hr className="mt-3 border-solid border-1 border-grey" />
            <div className="">
                <button className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground rounded-md p-2 mt-4 mr-4 leading-4 duration-300 hover:bg-cyan hover:text-white">{role}</button>
                <button className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground rounded-md p-2 mt-4 mr-4 leading-4 duration-300 hover:bg-cyan hover:text-white">{level}</button>
                { languages.map((language) => {
                    return <button key={`posting-${id}-language-${language}`} className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground rounded-md p-2 mt-4 mr-4 leading-4 duration-300 hover:bg-cyan hover:text-white">{language}</button>;
                })}
                { tools.map((tool) => {
                    return <button key={`posting-${id}-tool-${tool}`} className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground rounded-md p-2 mt-4 mr-4 leading-4 duration-300 hover:bg-cyan hover:text-white">{tool}</button>;
                })}
            </div>
        </div>
    );
}

export default JobListing;