module.exports = {
    siteMetadata: {
        title: `Bruce Smith Portfolio`,
        description: `Hi. I'm Bruce. My superpower is a frontend developer in the React world.`,
        author: `@bruqui`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-transformer-react-docgen`,
        `@bruqui/gatsby-plugin-react-helmet-async`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ['./node_modules/'],
            },
        },
        'gatsby-plugin-mdx',
        // get the component files to be documented
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'components',
                path: './src/components',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'documents',
                path: './src/docs',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
