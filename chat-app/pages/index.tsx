import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <main className=" flex flex-col bg-brown text-center">

        <label htmlFor="userID" className="p-3">Identification</label>
        <input placeholder="Your user ID..." className="m-3 p-1 rounded-xl" id="userID" type="text" />

        <Link href="/chats"><button className="bg-beige p-1 rounded-xl text-dark mb-4">Log in</button></Link>

      </main>
    </>
  )
}
