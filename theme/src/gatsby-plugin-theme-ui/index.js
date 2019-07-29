/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: [600, 900, 1200],
  initialColorMode: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    muted: '#f6f6f6f',
    modes: {
      dark: {
        text: '#fff',
        background: '#171616',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      }
    }
  },
  fonts: {
    body: 'Nunito, sans-serif',
    heading: 'Nunito, sans-serif',
    default:
      'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        maxWidth: "container",
        padding: 3,
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
    },
  },
}
