import path from "path";
import dotenv from "dotenv";
dotenv.config();

import projects from "./data";

export default {
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
  ],
  getRoutes: () => {
    return [
      {
        path: "project",
        template: "src/components/pages/project/project",
        children: projects.map(project => ({
          path: `/${project.id}`,
          template: "src/components/pages/project/project",
          getData: () => ({ project: project })
        }))
      }
    ];
  }
};
