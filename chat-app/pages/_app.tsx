import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import firebaseApp from "../firebase/firebase"
import ContextProvider from "../context/user-context"
firebaseApp;


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} className="h-screen w-screen bg-green" />
      </Layout>
    </ContextProvider>
  )
}
