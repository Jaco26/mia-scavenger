import axios from 'axios'

const axiosApiInstance = axios.create({
  baseURL: 'https://search.artsmia.org/'
})

export default {
  install(Vue) {
    Vue.prototype.$miapi = axiosApiInstance
  }
}