import axios from 'axios'

export default {
  install(Vue) {
    Vue.prototype.$api = axios.create({baseURL: '/api'});
  }
}