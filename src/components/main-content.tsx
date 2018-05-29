import * as React from 'react'
import Circle from './circle'
import Cross from './cross'
import * as styles from './main-content.css'

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.row}>
        <Cross/>
        <Circle/>
        <Circle/>
      </div>
      <div className={styles.row}>
        <Circle/>
        <Cross/>
        <Circle/>
      </div>
      <div className={styles.row}>
        <Circle/>
        <Circle/>
        <Cross/>
      </div>
    </div>
  )
}

export default MainContent