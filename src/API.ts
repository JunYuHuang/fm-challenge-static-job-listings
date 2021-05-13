export interface JobListingType {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
};

// export async function fetchJobListings(): Promise<JobListingType[]> {
//     const API_URL = "data.json";
//     const data = await (await fetch(API_URL)).json();
//     return data.map((jobListing: JobListingType) => {
//         jobListing
//     });
// };