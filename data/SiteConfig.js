const config = {
  siteTitle: "Ryo Togashi",
  siteTitleShort: "ryotogashi",
  siteUrl: "https://vagr9k.github.io",
  pathPrefix: "/gatsby-material-starter", //todo Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, //todo Whether the footer component is fixed, i.e. always visible
  siteDescription: "Ryo Togashi portfolio site.",
  siteRss: "/rss.xml",
  siteGATrackingID: "UA-47311644-4", //todo Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", //todo Disqus shortname.
  postDefaultCategoryID: "Tech", //todo Default category for posts.
  dateFromFormat: "YYYY-MM-DD", //todo Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", //todo Date format for display.
  userName: "RyoTogashi", //todo Username to display in the author segment.
  userEmail: "ryotogashi.ca@gmail.com", //todo Email used for RSS feed's author segment
  userTwitter: "", //todo Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Vancouver, BC, Canada", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", //todo User avatar to display in the author segment.
  userDescription: "",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ryotogashi",
      iconClassName: "fa fa-linkedin-square"
    },
    {
      label: "GitHub",
      url: "https://github.com/ryotogashi",
      iconClassName: "fa fa-github-square"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/ryotogashi304",
      iconClassName: "fa fa-facebook-square"
    },
    {
      label: "Email",
      url: "mailto:ryo.togashi.ca@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Resume",
      url:
        "https://drive.google.com/file/d/1_PvAc43SeKEHPmmEPw-qlDFBtcMRu1HA/view",
      iconClassName: "fa fa-paperclip"
    }
  ],
  copyright: "Copyright © 2019. Material User" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
