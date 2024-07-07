// import { USER_INFO_KEY } from '@/constants'
import type { RememberUserInfoProps } from "@/interface/user-interface";
import { LocalKeyEnum } from "@/interface/enum";

const setItem = window.localStorage.setItem
const removeItem = window.localStorage.removeItem;
const getItem = window.localStorage.getItem;

/**
 * @description 保存用户信息至本地
*/
const saveUserInfo = (userInfo: RememberUserInfoProps): void => {
  try {
    setItem(LocalKeyEnum.remember_user_key, JSON.stringify(userInfo));
  } catch (err) {}
};
/**
 * @description 删除用户信息
*/
const removeUserInfo = (): void => {
  try {
    removeItem(LocalKeyEnum.remember_user_key);
  } catch (err) {
  }
}

/**
 * @description 获取用户信息
*/
const getUserInfo = (): null | RememberUserInfoProps => {
  try {
    const userinfo = getItem(LocalKeyEnum.remember_user_key);
    return userinfo ? JSON.parse(userinfo) : null;
  } catch (err) {
    return null;
  }
};

export { saveUserInfo, removeUserInfo, getUserInfo };
