import path from "path";
import dotenv from "dotenv";
import { createClient } from "contentful";
dotenv.config();

export default {
  getRoutes: async () => {
    const client = createClient({
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN
    });
    const resProjects = await client.getEntries({
      content_type: process.env.CTF_TYPE_ID_PROJECTS
    });
    const projects = resProjects.items.map(item => item.fields);
    console.log(projects);

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
