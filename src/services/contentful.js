import { createClient } from "contentful";
import About from "../models/About";

export async function getAboutInfo() {
  const client = createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  });
  const res = await client.getEntries({
    content_type: process.env.CTF_TYPE_ID
  });
  const aboutData = res.items[0].fields;
  console.log(aboutData.name);
  return new About(
    aboutData.name,
    aboutData.detail,
    aboutData.email,
    aboutData.facebook,
    aboutData.github,
    aboutData.linkedin,
    aboutData.resume
  );
}
