/**
 * @description 问卷标题属性
*/
interface QuestionnaireTitleProps {
  title?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
}

/**
 * @description 问卷标题属性
*/
interface QuestionnaireInputProps {
  title?: string
  placeholder?: string
}

export type { QuestionnaireTitleProps, QuestionnaireInputProps };