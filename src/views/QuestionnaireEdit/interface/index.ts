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
  text?: string;
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

/**
 * @description 段落
*/
interface QuestionnaireParagraphProps {
  text?: string
  isCenter?: boolean
}

// 描述
interface QuestionnaireDescriptionProps {
  title?: string
  description?: string
}
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

/**
 * @description 单选按钮
*/
interface QuestionnaireRadioProps {
  title?: string
  isVertical?: boolean
  options?: Array<{
    label: string
    value: string
  }>
  value?: string
}

/**
 * @description 移动组件 上/下
*/
enum MoveComponentEnum {
  up = 1,
  down
}

// 所有属性联合类型
type QuestionnaireComponentPropsType =
  | QuestionnaireTitleProps
  | QuestionnaireInputProps
  | QuestionnaireTextareaProps
  | QuestionnaireParagraphProps
  | QuestionnaireDescriptionProps
  | QuestionnaireRadioProps;

export type {
  QuestionnaireTitleProps,
  QuestionnaireInputProps,
  QuestionnaireTextareaProps,
  QuestionnaireParagraphProps,
  ComponentListProps,
  QuestionnaireRadioProps,
  QuestionnaireDescriptionProps,
  QuestionnaireComponentPropsType,
};

export { QuestionnaireEditTabEnum, MoveComponentEnum };