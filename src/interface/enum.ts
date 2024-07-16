enum PathEnum {
  login = '/login',
  register = '/register'
}

/**
 * @description 存储至本地的key
*/
enum LocalKeyEnum {
  remember_user_key = '__REMEMBER_USER_KEY__',
  userinfo_key = '__USERINFO_KEY__'
}

/**
 * @description 定义的一些常用变量枚举
*/
enum FieldEnum {
  keywords = 'keywords'
}
/**
 * @description 画布组件类型, 此类型需要和后台的数据保持一致
*/
enum ComponentTypeEnum {
  title = "title",
  input = "input",
  textarea = "textarea",
  paragraph = "paragraph",
}

export { PathEnum, LocalKeyEnum, FieldEnum, ComponentTypeEnum };