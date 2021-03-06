const path = require("path")

module.exports = {
  siteMetadata: {
    year: `2021`,
    description: `Gatsby blog built with Gatsby and MDX and Tailwindcss`,
    author: `Near Closer`,
    siteUrl: "https://near_closer0215.netlify.app/",
    image: `near_closer.png`,
    social: {
      github: `NearCloser`,
      twitter: `nina0215nina`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Near`,
        short_name: `Near String`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/near_closer_.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "contents",
        path: path.resolve(__dirname, "contents"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "static"),
        name: "images",
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 320,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true, // Enable tailwindcss support
        //  develop: true, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
      },
    },
  ],
}
