import type { ComponentListProps } from "@/views/QuestionnaireEdit/interface";

/**
 * @description 获取下一个高亮的 选中的组件id
*/
const getNextHighlightActiveComponent = (list: ComponentListProps[], id: string): string => {
  const visibleList = list.filter(item => item.isVisible)
  const idx = visibleList.findIndex((item) => item.fe_id === id);
  if (idx === -1) {
    return ''
  }
  if (visibleList.length === 1) {
    return ''
  }
  if (idx === visibleList.length - 1) {
    return visibleList[0].fe_id;
  }
  return visibleList[idx + 1].fe_id;
}

export { getNextHighlightActiveComponent };