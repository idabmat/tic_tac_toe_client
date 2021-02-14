import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class CustomDocument extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()

    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return(
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }
            body {
              background-color: #819ca9;
              margin: 0;
              font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
