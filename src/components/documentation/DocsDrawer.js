import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import {map} from 'lodash';
import getClassName from 'tools/getClassName';

import Headline from 'components/core/Headline';
import {
    List,
    ListLink,
    ListGroup,
    ListGroupSubheader,
    ListItem,
} from 'components/core/list';

import './DocsDrawer.scss';

const LINKS = graphql`
    query LINKS {
        allComponentMetadata(
            filter: {props: {elemMatch: {name: {ne: "null"}}}}
            sort: {fields: fields___slug}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    displayName
                }
            }
        }
        allFile(
            filter: {extension: {eq: "mdx"}, sourceInstanceName: {eq: "documents"}}
            sort: {fields: name}
        ) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

// eslint-disable-next-line
export default function DocsDrawer({className, toggleDrawerOpen, drawerOpen}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        modifiers: {
            closed: !drawerOpen,
        },
        rootClass: 'docs-drawer',
    });
    const {
        allComponentMetadata: {edges: componentLinks},
        allFile: {edges: documentLinks},
    } = useStaticQuery(LINKS);
    const sections = useMemo(() => {
        const sectionsResponse = {};

        if (documentLinks && componentLinks) {
            map([...documentLinks, ...componentLinks], ({node}, index) => {
                const {fields, displayName, name} = node;
                const currentFileType = fields
                    ? `Components ${fields.slug.split('/').slice(1, 2)[0]}`
                    : 'Docs';

                if (!sectionsResponse[currentFileType]) {
                    sectionsResponse[currentFileType] = [];
                }

                if (displayName || name) {
                    sectionsResponse[currentFileType].push(renderLink(node));
                }
            });
        }

        return sectionsResponse;
    }, [documentLinks, componentLinks]);

    function handleListLinkClick(event) {
        event.target.blur();
        toggleDrawerOpen();
    }

    /* eslint-disable react/prop-types */
    function renderLink({displayName, id, fields, name}) {
        const toLink = fields ? `/docs${fields.slug}` : `/docs/${name}`;

        // taking tabIndex off of ListItem and letting link take the tab works much betters
        return (
            <ListItem tabIndex={-1}>
                <ListLink
                    key={id}
                    className={getChildClass('link')}
                    to={toLink.toLowerCase()}
                    onClick={handleListLinkClick}
                >
                    {displayName || name}
                </ListLink>
            </ListItem>
        );
    }
    /* eslint-enable react/prop-types */

    function renderHeadline(headline) {
        return (
            <ListGroupSubheader>
                <Headline className={getChildClass('headline')} level={3} size={6}>
                    {headline}
                </Headline>
            </ListGroupSubheader>
        );
    }

    function renderSections() {
        return map(sections, (sectionLinks, sectionHeader) => (
            <ListGroup className={getChildClass('section')} key={sectionHeader}>
                {renderHeadline(sectionHeader)}
                <List>{sectionLinks}</List>
            </ListGroup>
        ));
    }

    return (
        <div className={rootClassName}>
            <aside className={getChildClass('aside')}>{renderSections()}</aside>
        </div>
    );
}

DocsDrawer.propTypes = {
    className: PropTypes.string,
    toggleDrawerOpen: PropTypes.func.isRequired,
    drawerOpen: PropTypes.bool,
};
