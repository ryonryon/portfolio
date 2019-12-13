import path from "path";
import dotenv from "dotenv";
dotenv.config();

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
    const projects = [
      {
        id: 1,
        name: "Portfolio Site",
        url: "https://ryotogashi.com",
        github: "https://github.com/ryotogashi/portfolio",
        windowImage: "/assets/project/bank.jpg",
        technologyUsed: [
          "react-static",
          "HTML",
          "CSS",
          "JavaScript",
          "Contentful API",
          "Sketch"
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Vestibulum sed arcu non odio euismod."
      },
      {
        id: 2,
        name: "Online Programming teacher",
        url: "https://www.sejuku.net/",
        github: "",
        windowImage: "/assets/project/food.jpg",
        technologyUsed: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypesSript",
          "Firebase",
          "Python",
          "Django",
          "SQL"
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi. Cras semper auctor neque vitae tempus quam pellentesque."
      },
      {
        id: 3,
        name: "parrot",
        url: "",
        github: "https://github.com/agnosticful/saraka-mobile",
        windowImage: "/assets/project/gent.jpg",
        technologyUsed: ["Dart", "Flutter", "Text-to-speak API", "Firebase"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Vestibulum sed arcu non odio euismod."
      },
      {
        id: 4,
        name: "Leetcode Assistant",
        url: "",
        github: "https://github.com/agnosticful/LeetCodeAssistant",
        windowImage: "/assets/project/wintry.jpg",
        technologyUsed: ["Swift"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Vestibulum sed arcu non odio euismod."
      }
    ];

    return [
      {
        path: "home",
        template: "src/components/pages/projects/projects",
        getData: () => ({ projects }),
        children: projects.map(project => ({
          path: `/${project.id}`,
          template: "src/components/pages/project/project",
          getData: () => ({ project })
        }))
      },
      {
        path: "404",
        template: "src/components/pages/404"
      }
    ];
  }
};
