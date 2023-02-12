import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Habits</title>
        <meta name="description" content="Habit Tracker Website" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to <i className={styles.titleEffect}>Main Habits</i></h1>
        <h3 className={styles.subtitle}>Explore the website, find some peace of mind to achive good habits.</h3>

        <div>
          <Image src="/image-welcome.svg" alt="welcome-icon" width={1000} height={1000}/>
        </div>
        <div className={styles.divButton}>
          <button className={styles.button} onClick={() => Router.push('/registration')}> GET STARTED</button>
        </div>
      </main>
      <footer className={styles.footer}>
        Created by @
        <a
          href="https://github.com/fabrinanunes"
          target="_blank" rel="author noreferrer"
        >
           Fabrina
        </a>
        - Fev/23
      </footer>
    </div>
  )
}
