import { ComponentTypeEnum } from "@/interface/enum";
/**
 * @description 组件类型对应的标题
*/
const componentTitleMap = {
  [ComponentTypeEnum.checkbox]: '多选框',
  [ComponentTypeEnum.description]: '问卷描述',
  [ComponentTypeEnum.input]: '用户输入',
  [ComponentTypeEnum.paragraph]: '段落',
  [ComponentTypeEnum.radio]: '单选框',
  [ComponentTypeEnum.textarea]: '多行输入',
  [ComponentTypeEnum.title]: '标题'
}

export { componentTitleMap };
