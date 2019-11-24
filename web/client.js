import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'uol1nt0y',
  dataset: 'production',
  useCdn: true
})
