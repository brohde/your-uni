import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Search from '@/components/Search'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Find the university that’s right for you – YourUni</title>
        <meta name="description" content="Find the university that’s right for you at YourUni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={`container ${styles.hero}`}>
          <div className={styles.left}>
            <h1 className={styles.title}>Find the university that’s right <span className="nowrap">for you</span></h1>
            <p className={styles.subtitle}>Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
          </div>
          <div className={styles.right}>
            <Image className={styles.img} role="presentation" src="/hero-2x.png" width="384" height="383" alt="Man standing on mountains" />
          </div>
        </div>
        <div className="container">
          <Search />
        </div>
      </main>
    </>
  )
}
