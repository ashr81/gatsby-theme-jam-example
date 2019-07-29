import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { Layout, Head, TimelineList, ProfileView } from "../components";

const ProfileTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allTimeline(sort: {fields: startDate, order: ASC}) {
        nodes {
          id
          name
          startDate(formatString: "MMMM Do, YYYY")
          endDate(formatString: "MMMM Do, YYYY")
          location
          description
          url
        }
      }
      site {
        siteMetadata {
          author {
            name
            github
            twitter
            image_url
          }
        }
      }
    }
  `)
  const { allTimeline: { nodes: timelines }, site: { siteMetadata: { author }} } = data;

  return (
    <Layout>
      <Head title='Profile'/>
      <ProfileView {...author}/>
      <TimelineList timelineEvents={timelines}/>
    </Layout>
  )
}

export default ProfileTemplate;
