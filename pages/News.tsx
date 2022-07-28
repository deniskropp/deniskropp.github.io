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

const news: NewsItem[] = [
  {
    date: '2022-07-27 18:30',
    title: 'New site at deniskropp.github.io',
    content: 'Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript. Welcome to the new site. I am using Next.js with React and TypeScript.'
  }
]

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
