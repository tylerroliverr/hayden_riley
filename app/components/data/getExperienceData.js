import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `
    *[_type == "experience"] {
        experienceTitle,
          description,
          dates
      }`

    const data = await client.fetch(query);
    return data;
};

export default async function getExperienceData() {
    const data = await getData();
    return data;
}