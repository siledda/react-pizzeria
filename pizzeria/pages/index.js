import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Navbar/>
      <Head>
        <title>Pizzeria</title>
        <meta name="description" content="Pizzeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/image/logo.png"/>
      homepage
    <Footer/>
    </>
  )
}
