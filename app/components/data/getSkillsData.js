import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `
    *[_type == "skill"] {
        skill,
          description
      }`

    const data = await client.fetch(query);
    return data;
};

export default async function getSkillsData() {
    const data = await getData();
    return data;
}