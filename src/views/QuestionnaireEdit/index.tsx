import React from 'react'
import styles from './index.module.scss'

const QuestionnaireEdit: React.FC = () => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles['layer-container']}>图层</div>
      <div className={styles['content']}>
        <div className={styles['canvas-container']}>
        </div>
      </div>
      <div className={styles['attr-container']}>属性</div>
    </div>
  )
}

export default QuestionnaireEdit