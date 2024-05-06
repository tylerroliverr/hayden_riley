import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `
    *[_type == "projects"] {
        projectTags,
          company,
          directorOfPhotography,
          projectTitle,
          format
      }`

    const data = await client.fetch(query);
    return data;
};

export default async function getProjectData() {
    const data = await getData();
    return data;
}