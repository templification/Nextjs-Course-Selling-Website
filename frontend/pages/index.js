import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Course Selling Website</title>
        <meta name="description" content="Best Course Selling Website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Card />
    </div>
  )
}
