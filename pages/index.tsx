import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 面试助手</title>
        <meta
          name="description"
          content="AI 面试助手"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className='text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400'><Image src={'/logo.png'} width="32" height="32" alt="MagickPen logo" /> AI 面试助手</h1>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        <div className="py-10 w-full md:flex items-center justify-center md:space-x-6">
          <div className="flex items-center justify-center space-x-6 mt-4 md:m-0">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://github.com/Owater/interview-ai2"
                className="flex items-center justify-center"
              >
                <Image src={'/github.svg'} width="24" height="24" alt="Github logo" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
