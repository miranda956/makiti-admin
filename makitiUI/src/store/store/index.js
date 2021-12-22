import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters ,shopGetters,transctionGetters,customersGetters,reportsGetters } from './getters'
import { productMutations,shopMutations,staffMutations,customerMutations,transctionMutations,reportMutations} from './mutation'
import {   productsActions,shopActions,staffActions,customersActions,transctionsActions, reportsActions} from "./action"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      
      product: [],
      
      showLoader: false,
      
      staff: [],
      transctions:[],
      reports:[],
      shops:[],
      customers:[]

    },
    // GETTERS
    getters: Object.assign({}, productGetters ,shopGetters,transctionGetters,customersGetters,reportsGetters),

    mutations: Object.assign({},productMutations,shopMutations,staffMutations,customerMutations,transctionMutations,reportMutations ),

    actions: Object.assign({}, productsActions,shopActions,staffActions,customersActions,transctionsActions, reportsActions ),
  })