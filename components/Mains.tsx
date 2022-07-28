import styles from '../styles/Home.module.css'

import { MainMenu } from './MainMenu'

export { Mains }

function Mains({ title, desc, children }: {title: string, desc: string, children:any}) {
  return (
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>
            {desc}
          </p>

          <MainMenu />

          {children}
        </div>
      </main>
  )
}
