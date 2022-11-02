import '@material-tailwind/react'
import 'tailwindcss/tailwind.css'
import Head from "next/head"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
