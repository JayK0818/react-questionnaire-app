import { createSlice } from '@reduxjs/toolkit'
import type { ComponentListProps } from '@/views/QuestionnaireEdit/interface'
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './index'
import { getNextHighlightActiveComponent } from './utils/index'
import { MoveComponentEnum } from '@/views/QuestionnaireEdit/interface/index'

// document.activeElement
interface StoreComponentStateProps {
  list: ComponentListProps[];
  selectedComponentId: number;
  copiedComponent: null | ComponentListProps;
}

const initialState: StoreComponentStateProps = {
  list: [] as ComponentListProps[],
  selectedComponentId: 0,
  copiedComponent: null,
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    increment(
      // 将组件添加至画布
      state,
      action: PayloadAction<ComponentListProps>
    ) {
      const idx = state.list.findIndex(
        (item) => item.id === state.selectedComponentId
      );
      if (idx === -1) {
        state.list.push(action.payload);
      } else {
        state.list.splice(idx + 1, 0, action.payload);
      }
      state.selectedComponentId = action.payload.id;
    },
    delete(state) {
      // 删除选中的组件
      const activeComponentId = getNextHighlightActiveComponent(
        state.list,
        state.selectedComponentId
      );
      state.selectedComponentId = activeComponentId;
      const idx = state.list.findIndex(
        (item) => item.id === state.selectedComponentId
      );
      if (idx >= 0) {
        state.list.splice(idx, 1);
      }
    },
    toggleVisible(state, action: PayloadAction<number | undefined>) {
      // 切换隐藏/显示组件
      const activeId = action.payload ?? state.selectedComponentId;
      const targetComponent = state.list.find(
        (item) => item.id === action.payload
      );
      if (targetComponent) {
        if (targetComponent.isVisible) {
          state.selectedComponentId = getNextHighlightActiveComponent(
            state.list,
            activeId
          );
        } else {
          state.selectedComponentId = action.payload as number;
        }
        targetComponent.isVisible = !targetComponent.isVisible;
      }
    },
    toggleLock(state, action: PayloadAction<number>) {
      const targetComponent = state.list.find(
        (item) => item.id === action.payload
      );
      if (targetComponent) {
        targetComponent.isLocked = !targetComponent.isLocked;
      }
    },
    copy(state, action: PayloadAction<number>) {
      // 复制组件
      const targetComponent = state.list.find(
        (item) => item.id === action.payload
      );
      if (targetComponent) {
        state.copiedComponent = targetComponent;
      }
    },
    paste(state) {
      // 黏贴
      if (state.copiedComponent) {
        const idx = state.list.findIndex(
          (item) => item.id === state.selectedComponentId
        );
        if (idx === -1) {
          state.list.push(state.copiedComponent);
        } else {
          state.list.splice(idx + 1, 0, state.copiedComponent);
        }
      }
    },
    // 移动高亮组件 上-下操作
    move(state, action: PayloadAction<MoveComponentEnum>) {
      if (state.list.length <= 1) {
        return
      }
      const idx = state.list.findIndex(item => item.id === state.selectedComponentId)
      if (idx === -1) {
        return
      }
      switch (action.payload) {
        case MoveComponentEnum.down:
          if (idx === state.list.length - 1) {
            state.selectedComponentId = 0
          } else {
            state.selectedComponentId = state.list[idx + 1].id
          }
          break
        case MoveComponentEnum.up:
          if (idx === 0) {
            state.selectedComponentId = state.list[state.list.length - 1].id
          } else {
            state.selectedComponentId = state.list[idx - 1].id
          }
          break
      }
    },
  },
});

/**
 * @description 选择高亮id
*/
const selectActiveComponentId = (state: RootState) =>
  state.component.selectedComponentId;

/**
 * @description 选择高亮的组件
*/
const selectActiveComponent = (state: RootState) =>
  state.component.list.find(
    (item) => item.id === state.component.selectedComponentId
  );

/**
 * @description 选择组件列表
*/
const selectComponentList = (state: RootState) => state.component.list;

export const { increment } = componentSlice.actions

export { selectActiveComponentId, selectComponentList, selectActiveComponent };

export default componentSlice.reducer