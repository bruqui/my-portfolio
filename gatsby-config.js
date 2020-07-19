const sass = require('sass');
const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'Bruce Smith Portfolio',
        description: `
            Expert in the design, development and global introduction of advanced
            technologies to meet business, financial, competitive, and customer demands.
            Experience combining strong development with outstanding performance for
            leading complex technology organizations. Diverse understanding of web-based
            applications from concept, business case, and feasibility analysis through
            development, usability testing, deployment and maintenance.

            As a primarily front-end React developer, my focus and expertise revolves
            around building efficient, reusable components and performant, scalable apps
            to align with the face paced world of development. My skills include the
            modern web stack such as Webpack, NodeJS, Babel, GraphQL, SCSS, etc. Much of
            my recent experience and passions is architecting new apps or rebuilding apps
            from an older technology.
        `,
        author: '@bruqui',
    },
    plugins: [
        'gatsby-plugin-resolve-src',
        '@bruqui/gatsby-plugin-react-helmet-async',
        // {
        //     resolve: `gatsby-source-contentful`,
        //     options: {
        //         spaceId: process.env.CONTENTFUL_SPACE_ID,
        //         // Learn about environment variables: https://gatsby.dev/env-vars
        //         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        //         downloadLocal: true,
        //         // host: 'cdn.contentful.com',
        //         environment: process.env.CONTENTFUL_ACCESS_ENVIRONMENT,
        //     },
        // },
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src', // <- will be used as a root dir
                aliases: {},
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Ubuntu:300,400,500', 'Material Icons', 'Iceland'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: sass,
                includePaths: [
                    path.join(__dirname, 'node_modules'),
                    path.join(__dirname, 'node_modules/@material/*'),
                    path.join(__dirname, 'src/styles'),
                ],
                webpackImporter: false,
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
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pageContent',
                path: './src/page-content/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#1D09C0',
                display: 'minimal-ui',
                icon: 'src/images/behivetech-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },

        {
            resolve: 'gatsby-plugin-prettier-eslint',
            options: {
                prettier: {
                    patterns: [
                        // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
                        '**/*.{css,scss,less}',
                        '**/*.{json,json5}',
                        '**/*.{graphql}',
                        '**/*.{md,mdx}',
                        '**/*.{html}',
                        '**/*.{yaml,yml}',
                    ],
                },
                eslint: {
                    patterns: '**/*.{js,jsx,ts,tsx}',
                    customOptions: {
                        fix: true,
                        cache: true,
                    },
                    ignorePatterns: [
                        '**/node_modules/**/*',
                        '**/.git/**/*',
                        '**/dist/**/*',
                        '.cache/**/*',
                        'public/**/*',
                        'src/components/core/*',
                    ], // string or array of paths/files/globs to ignore
                },
            },
        },
        'gatsby-transformer-react-docgen',

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        'gatsby-plugin-offline',
    ],
};
