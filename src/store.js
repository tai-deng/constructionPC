import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import globalState from '@/store/globalState/index.js'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules:{
    globalState:{...globalState},
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
