import type { ComponentListProps } from "@/views/QuestionnaireEdit/interface";

/**
 * @description 获取下一个高亮的 选中的组件id
*/
const getNextHighlightActiveComponent = (list: ComponentListProps[], id: string): string => {
  const visibleComponentList = list.filter(item => item.isVisible)
  const idx = visibleComponentList.findIndex((item) => item.fe_id === id);
  if (idx === -1) {
    return ''
  }
  if (visibleComponentList.length === 1) {
    return ''
  }
  // 删除的是最后一个数据
  if (idx === visibleComponentList.length - 1) {
    return visibleComponentList[0].fe_id;
  }
  return visibleComponentList[idx + 1].fe_id;
}

export { getNextHighlightActiveComponent };