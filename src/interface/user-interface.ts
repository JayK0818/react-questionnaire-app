/**
 * @description 用户信息
*/
interface RememberUserInfoProps {
  username: string
  password: string
}

/**
 * @description 登录的用户信息
*/
interface LoginUserInfoProps {
  username: string
  nickname: string
  id: number
  token: string
}

export type { RememberUserInfoProps, LoginUserInfoProps };
