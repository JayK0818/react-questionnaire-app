import { createSlice } from '@reduxjs/toolkit'
import type { ComponentListProps } from '@/views/QuestionnaireEdit/interface'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './index'

const componentSlice = createSlice({
  name: "component",
  initialState: {
    list: [] as ComponentListProps[],
    activeComponentId: 0
  },
  reducers: {
    increment(
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
    }
  },
});

/**
 * @description 选择高亮id
*/
const selectActiveComponent = (state: RootState) => state.component.activeComponentId

/**
 * @description 选择组件列表
*/
const selectComponentList = (state: RootState) => state.component.list;

export const { increment } = componentSlice.actions

export { selectActiveComponent, selectComponentList };

export default componentSlice.reducer