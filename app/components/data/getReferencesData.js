import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == "references"] {
        referenceName,
          contactDetails,
          roleOfReference
      }`

    const data = await client.fetch(query);
    return data;
};

export default async function getReferencesData() {
    const data = await getData();
    return data;
}