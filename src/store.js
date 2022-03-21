import { createStore } from 'vuex'

const modules = Object.entries(
  import.meta.globEager('/src/store/**/*.js'),
).reduce((acc, [path, module]) => {
  const name = path.split('/').reverse()[0].split('.')[0]
  acc[name] = { namespaced: true, ...module }
  return acc
}, {})

const store = createStore({ modules })
export { store }
