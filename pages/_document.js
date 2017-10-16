import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class CustomDocument extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()

    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return(
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
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
      </html>
    )
  }
}
