import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {SearchBar} from '../Components/SearchBar';
import { GymList } from '../Components/GymList'
import Link from 'next/link'
import {useUserContext } from '../Components/userContext'

const Home: NextPage = () => {
  const {user} = useUserContext();
  return (
    <>
      <Head>
        <title>GymRate!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <div className={styles.navbarConteiner}>
    <div className={styles.navbar}>
     <Link href='/login' passHref><a>Log In</a></Link>
     </div>
     <div className={styles.navbar}>
     <Link href='/signUp' passHref><a>Sign Up</a></Link>
     </div>
     
     <div className={styles.navbar}>
       <Link href='/logout' passHref><a>Log Out</a></Link>
    </div>
     <div className={styles.navbar}>{user?.user?.email ? user?.user?.email : "User undefined"}</div>
  </div>
     
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GymFinder
        </h1>
        <h4 className={styles.description1}>Find your Gym!</h4>
        <SearchBar/>
        <div>
        <h1 className={styles.smallTitle}>Top Rating</h1>
          <div className={styles.grid}>
          <GymList/>
          </div>
        </div>
      </main>
    </>
  )
}
export default Home