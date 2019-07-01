import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import Nav from './../components/Nav'
import { HomeNav, MusicNav } from './../config/nav'

export default class SelfDocument extends Document {
  static async getInitialProps (ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main/>
          <NextScript />
        </body>
        {/* <script src="d-utils.js"></script> */}
      </html>
    )
  }
}
