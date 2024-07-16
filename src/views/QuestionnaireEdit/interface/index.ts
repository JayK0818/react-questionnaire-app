import type { ComponentTypeEnum } from "@/interface/enum";

/**
 * @description 组件库/图层类型
*/
enum QuestionnaireEditTabEnum {
  library = 'library',
  layer = 'layer',
  attr = 'attr',
  setting = 'setting'
}

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
/**
 * @description 多行输入标题
*/
interface QuestionnaireTextareaProps {
  title?: string
  placeholder?: string
}

type QuestionnaireComponentPropsType =
  | QuestionnaireTitleProps
  | QuestionnaireInputProps
  | QuestionnaireTextareaProps;


  /**
   * @description 组件列表
  */
interface ComponentListProps {
  id: number;
  props: QuestionnaireComponentPropsType;
  type: ComponentTypeEnum;
  isVisible: boolean;
  isLocked: boolean;
}

export type {
  QuestionnaireTitleProps,
  QuestionnaireInputProps,
  ComponentListProps,
  QuestionnaireTextareaProps,
  QuestionnaireComponentPropsType,
};

export { QuestionnaireEditTabEnum };