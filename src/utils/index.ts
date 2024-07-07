import type {
  RememberUserInfoProps,
  LoginUserInfoProps,
} from "@/interface/user-interface";
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

/**
 * @description 保存登录的用户信息
*/
const saveLoginUser = (user: LoginUserInfoProps): void => {
  try {
    setItem(LocalKeyEnum.userinfo_key, JSON.stringify(user));
  } catch (err) {

  }
}
/**
 * @description 删除本地登录的用户信息
*/
const removeLoginUser = (): void => {
  try {
    removeItem(LocalKeyEnum.userinfo_key)
  } catch (err) {

  }
}
/**
 * @description 获取登录的用户信息
*/
const getLogionUser = (): LoginUserInfoProps | null => {
  try {
    const user = getItem(LocalKeyEnum.userinfo_key)
    if (!user) {
      return null
    }
    return JSON.parse(user);
  } catch (err) {
    return null
  }
}

export {
  saveUserInfo,
  removeUserInfo,
  getUserInfo,
  saveLoginUser,
  removeLoginUser,
  getLogionUser,
};
