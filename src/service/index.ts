import axios from 'axios'
import type { AxiosResponse } from 'axios'

interface AxiosResponseProps {
  code: number;
  data?: any;
  msg?: string;
}

const instance = axios.create({
  timeout: 10 * 1000
})

/**
 * @description 拦截全局请求
*/
instance.interceptors.response.use((response: AxiosResponse) => {
  const { code, data, msg } = (response.data ?? {}) as AxiosResponseProps;
  switch (code) {
    case 200:
      return data
    default:
      return Promise.reject(msg);
  }
})

export default instance