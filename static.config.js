import path from "path";

export default {
  getRoutes: () => {
    return [
      {
        path: "/index"
      },
      {
        path: "/about"
      },
      {
        path: "/skill"
      },
      {
        path: "/projects"
      },
      {
        path: "/404",
        template: "src/containers/404"
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
        includePaths: ["..."] // always includes `src/`
      }
    ]
  ]
};
