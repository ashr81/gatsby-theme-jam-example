import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout";
import Head from "../components/head";

const ProfileTemplate = ({ pageContext }) => (
  <Layout>
    <Head title='Profile'/>
    <Styled.h1>{pageContext.heading}</Styled.h1>
  </Layout>
)

export default ProfileTemplate;
