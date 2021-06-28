import Head from 'next/head'
import Layout from '../src/components/layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <link rel ="icon" href ="/favicon.ico"/>
        </Head>
      </Layout>
    </div>
  )
}
