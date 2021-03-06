import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getUsers } from '../utils/users'

export default function Home() {
  const [data, setData] = useState([])

  async function setUserData() {
    const data = await getUsers()
    setData(data)
  }

  useEffect(() => {
    setUserData()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Next.js with Firebase!</h1>

        <section>
          <h2>Get data from Firestore</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <div className={styles.grid}>
            {data.length
              ? data.map(({ name, gender }) => (
                  <div key={name} className={styles.card}>
                    <h2>Name: {name}</h2>
                    <p>Gender: {gender}</p>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </section>
      </main>
    </div>
  )
}
