import axios from 'redaxios'

axios.defaults.baseURL = import.meta.env.PROD
  ? 'https://iru.lan.axel-verse.ml'
  : 'http://localhost:3000'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export { axios }
