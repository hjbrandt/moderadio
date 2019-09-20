import Head from 'next/head'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Moderadio</title>
    </Head>

    <div id="main">{props.children}</div>
    <footer></footer>
  </div>
)
