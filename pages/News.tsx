import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Footer } from '../components/Footer'
import { Heads } from '../components/Heads'
import { Mains } from '../components/Mains'

interface NewsItem {
  date: string
  title: string
  content: string
}

const news: NewsItem[] = require('./news.json')

const News: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heads />

      <Mains title="News" desc="Weekly informs you...">
        {news && news.map((e: NewsItem) =>
          <>
            <div className={styles.newsitem}>
              <h4 className={styles.newsitemtitle}>{e.title}</h4><div className={styles.newsitemdate}>{e.date}</div>
              <p className={styles.newsitemcontent}>{e.content}</p>
            </div>
          </>
          )
        }
      </Mains>

      <Footer />
    </div>
  )
}

export default News
