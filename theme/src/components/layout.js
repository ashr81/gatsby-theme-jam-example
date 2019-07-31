/** @jsx jsx */
import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container, ThemeProvider, jsx } from "theme-ui"
import theme from '../gatsby-plugin-theme-ui';
import { graphql, useStaticQuery } from "gatsby";
import { Footer, Header } from ".";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Header title={data.site.siteMetadata.title}/>
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer author={data.site.siteMetadata.author.name}/>
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
