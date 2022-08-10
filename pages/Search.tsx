import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

const Search: NextPage = () => {
  function handleSubmit(e: any)
  {
    console.log(e)
  }

  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="Search" desc="Find resources on the net...">
        <div className={styles.card}>
          <form>
            <input type="text" name="q" placeholder="Search for resources"></input>
            <input type="button" onClick={handleSubmit} value="Submit"></input>
          </form>
        </div>
      </Mains>

      <Footer />
    </div>
  )
}

export default Search
