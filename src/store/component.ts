import { createSlice } from '@reduxjs/toolkit'
import type { ComponentListProps } from '@/views/QuestionnaireEdit/interface'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './index'
import { getNextHighlightActiveComponent } from './utils/index'

const componentSlice = createSlice({
  name: "component",
  initialState: {
    list: [] as ComponentListProps[],
    activeComponentId: 0
  },
  reducers: {
    increment( // 将组件添加至画布
      state,
      action: PayloadAction<ComponentListProps>
    ) {
      const idx = state.list.findIndex(item => item.id === action.payload.id)
      if (idx === -1) {
        state.list.push(action.payload)
        state.activeComponentId = state.list[state.list.length - 1].id
      } else {
        state.list.splice(idx + 1, 0, action.payload)
        state.activeComponentId = action.payload.id
      }
    },
    delete(state) { // 删除选中的组件
      const activeComponentId = getNextHighlightActiveComponent(
        state.list,
        state.activeComponentId
      );
      state.activeComponentId = activeComponentId
      const idx = state.list.findIndex(item => item.id === state.activeComponentId)
      if (idx >= 0) {
        state.list.splice(idx, 1)
      }
    },
    toggleVisible(state, action: PayloadAction<number | undefined>) { // 切换隐藏/显示组件
      const activeId = action.payload ?? state.activeComponentId
      const targetComponent = state.list.find(item => item.id === action.payload)
      if (targetComponent) {
        if (targetComponent.isVisible) {
          state.activeComponentId = getNextHighlightActiveComponent(
            state.list,
            activeId
          );
        } else {
          state.activeComponentId = action.payload as number
        }
        targetComponent.isVisible = !targetComponent.isVisible;
      }
    },
    toggleLock(state, action: PayloadAction<number>) {
      const targetComponent = state.list.find(item => item.id === action.payload)
      if (targetComponent) {
        targetComponent.isLocked = !targetComponent.isLocked
      }
    }
  }
});

/**
 * @description 选择高亮id
*/
const selectActiveComponentId = (state: RootState) => state.component.activeComponentId

/**
 * @description 选择高亮的组件
*/
const selectActiveComponent = (state: RootState) => state.component.list.find(item => item.id === state.component.activeComponentId)

/**
 * @description 选择组件列表
*/
const selectComponentList = (state: RootState) => state.component.list;

export const { increment } = componentSlice.actions

export { selectActiveComponentId, selectComponentList, selectActiveComponent };

export default componentSlice.reducer