import Head from 'next/head'

type Params = {
  params: {
    slug: string
  }
}

// export async function generateMetadata({ params }: Params) {
//   return { title: `Post: ${params.slug}` }
// }

export default function Page({ params }: Params) {
  return (
    <>
      <Head>{params.slug}</Head>
      <h1>Slug: {params.slug}</h1>
    </>
  )
}
