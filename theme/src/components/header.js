/** @jsx jsx */
import React from "react"
import { Header as Container, jsx, useColorMode } from "theme-ui"
import { Helmet } from 'react-helmet';

const Header = ({ title }) => {
  const [mode, setMode] = useColorMode()
  const toggleMode = e => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container sx={{
      justifyContent: 'space-between'
    }}>
      <span>{title}</span>
      <button title="Toggle Dark Mode" onClick={toggleMode}>
        {mode}
      </button>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,800&display=swap" rel="stylesheet"></link>
      </Helmet>
    </Container>
  )
}

export default Header;
