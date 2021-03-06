import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from "../db.json"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.secondaryText}
  }
  html, body {
    min-height: 100vh;
  }
  #_next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
