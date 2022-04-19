import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../Components/Sidebar'
import styles from '../styles/Home.module.css'
import { ToDo } from '../Components/to-do'
import {Gym} from '../Components/Gym'
import {SearchBar} from '../Components/SearchBar';
import { GymList } from '../Components/GymList'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GymRate!</title>
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
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
