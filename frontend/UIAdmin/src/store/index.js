import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters ,shopGetters,transctionGetters,customersGetters,reportsGetters } from './getters'
import { recruiterMutations, adminMutations, jobsMutations,applicantMutations,applicationMutations } from './mutations'
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

    mutations: Object.assign({},recruiterMutations, adminMutations, jobsMutations,applicantMutations,applicationMutations ),

    actions: Object.assign({}, productsActions,shopActions,staffActions,customersActions,transctionsActions, reportsActions ),
  })