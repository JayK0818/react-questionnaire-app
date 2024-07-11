import type { ComponentTypeEnum } from "@/interface/enum";
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

type QuestionnaireComponentPropsType =
  | QuestionnaireTitleProps
  | QuestionnaireInputProps;


  /**
   * @description 组件列表
  */
interface ComponentListProps {
  id: number
  props: QuestionnaireComponentPropsType
  type: ComponentTypeEnum
}

export type {
  QuestionnaireTitleProps,
  QuestionnaireInputProps,
  ComponentListProps,
  QuestionnaireComponentPropsType,
};