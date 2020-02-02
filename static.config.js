import path from "path";
import dotenv from "dotenv";
import { createClient } from "contentful";
import Project from "./src/models/Project";
import Contact from "./src/models/Contact";
dotenv.config();

let client = null;

const getClient = () => {
  if (!client) {
    client = createClient({
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN
    });
  }

  return client;
};

export default {
  getRoutes: async () => {
    const contentfulClient = getClient();
    const resProjects = await contentfulClient.getEntries({
      content_type: process.env.CTF_TYPE_ID_PROJECTS
    });
    const projects = resProjects.items.map(item => {
      return new Project(
        item.fields.id,
        item.fields.name,
        item.fields.url,
        item.fields.github,
        `https:${item.fields.windowImage.fields.file.url}`,
        item.fields.technologyUsed,
        item.fields.description,
        item.fields.Images
      );
    });

    return [
      {
        path: "/",
        template: "src/components/pages/home/home",
        getData: () => ({ projects }),
        children: projects.map(project => ({
          path: `/project/${project.id}`,
          template: "src/components/pages/project/project",
          getData: () => ({ project })
        }))
      },
      {
        path: "404",
        template: "src/components/pages/404"
      }
    ];
  },

  getSiteData: async () => {
    const contentfulClient = getClient();
    const contactRes = await contentfulClient.getEntry({
      content_type: process.env.CTF_TYPE_ID_CONTACT
    });

    const contact = new Contact(
      contactRes.fields.email,
      contactRes.fields.facebook,
      contactRes.fields.github,
      contactRes.fields.linkedin,
      contactRes.fields.resumePdf.fields.file.url
    );
    return { contact: contact };
  },

  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    [
      "react-static-plugin-sass",
      {
        includePaths: ["..."]
      }
    ]
  ]
};
