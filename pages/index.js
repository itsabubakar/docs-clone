import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Google Docs</title>
      </Head>
      <Header />
    </div>
  )
}
