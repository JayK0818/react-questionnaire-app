import React from 'react'
import styles from './index.module.scss'
import QuestionnaireCanvas from './components/QuestionnaireCanvas'
import QuestionnaireLibraryLayer from './components/QuestionnaireLibraryLayer'
import QuestionnaireAttrSetting from './components/QuestionnaireAttrSetting'

const QuestionnaireEdit: React.FC = () => {
  return (
    <div
      className={styles.page}
    >
      <div className={styles['library-layer-container']}>
        <QuestionnaireLibraryLayer/>
      </div>
      <div className={styles['content']}>
        <div className={styles['canvas-container']}>
          <QuestionnaireCanvas/>
        </div>
      </div>
      <div className={styles['attr-setting-container']}>
        <QuestionnaireAttrSetting/>
      </div>
    </div>
  )
}

export default QuestionnaireEdit