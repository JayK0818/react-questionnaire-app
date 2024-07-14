import React from 'react'
import styles from './index.module.scss'
import QuestionnaireCanvas from './components/QuestionnaireCanvas'
import QuestionnaireLibraryLayer from './components/QuestionnaireLibraryLayer'
import QuestionnaireAttrSetting from './components/QuestionnaireAttrSetting'
import QuestionnaireToolBar from './components/QuestionnaireToolBar'

const QuestionnaireEdit: React.FC = () => {
  return (
    <div className={ styles['flex-page'] }>
      <QuestionnaireToolBar />
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
    </div>
  )
}

export default QuestionnaireEdit