import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div className="root">
            <Main />
            <Footer></Footer>
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
