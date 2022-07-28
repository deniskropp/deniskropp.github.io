import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="Images" desc="Look at my pictures...">
      </Mains>

      <Footer />
    </div>
  )
}

export default Images
