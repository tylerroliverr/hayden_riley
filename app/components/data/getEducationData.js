import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `
    *[_type == "education"] {
        description,
          dates,
          schoolName,
          areaStudied
      }`

    const data = await client.fetch(query);
    return data;
};

export default async function getEducationData() {
    const data = await getData();
    return data;
}