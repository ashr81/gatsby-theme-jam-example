/** @jsx jsx */
import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container, useColorMode, ThemeProvider, jsx } from "theme-ui"
import theme from '../gatsby-plugin-theme-ui';
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [mode, setMode] = useColorMode()
  const toggleMode = e => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

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
        <Header sx={{
          justifyContent: 'space-between'
        }}>
          <span>{data.site.siteMetadata.title}</span>
          <button title="Toggle Dark Mode" onClick={toggleMode}>
            {mode}
          </button>
          <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,800&display=swap" rel="stylesheet"></link>
          </Helmet>
        </Header>
        <Main>
          <Container>{children}</Container>
        </Main>
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
