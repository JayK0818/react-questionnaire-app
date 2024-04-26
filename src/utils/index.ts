import { USER_INFO_KEY } from '@/constants'
import type { UserInfoProps } from '@/interface/user-interface'
/**
 * @description 保存用户信息至本地
*/
const saveUserInfo = (userInfo: UserInfoProps): void => {
  try {
    window.localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  } catch (err) {}
};
/**
 * @description 删除用户信息
*/
const removeUserInfo = (): void => {
  try {
    window.localStorage.removeItem(USER_INFO_KEY);
  } catch (err) {
  }
}

/**
 * @description 获取用户信息
*/
const getUserInfo = (): null | UserInfoProps => {
  try {
    const userinfo = window.localStorage.getItem(USER_INFO_KEY)
    return userinfo ? JSON.parse(userinfo) : null
  } catch (err) {
    return null;
  }
};

export { saveUserInfo, removeUserInfo, getUserInfo };
