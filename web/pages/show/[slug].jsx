import { useRouter } from 'next/router'
import client from '../../client'

const Show = props => {
  const router = useRouter()

  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  )
}

Show.getInitialProps = async function(context) {
  // It's important to default the slug so that is doesn't return "undefined"
  const { slug = '' } = context.query
  await client.fetch(
    `
  *[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )
}

export default Show
