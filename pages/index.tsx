import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="Welcome to my personal blog!" desc="This site is all about the world and me in that...">
      </Mains>

      <Footer />
    </div>
  )
}

export default Home
