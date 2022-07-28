import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

const Search: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="Search" desc="Find resources on the net...">
      </Mains>

      <Footer />
    </div>
  )
}

export default Search
