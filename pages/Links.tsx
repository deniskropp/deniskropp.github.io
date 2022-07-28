import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

const Links: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="Links" desc="All my favorites...">
      </Mains>

      <Footer />
    </div>
  )
}

export default Links
