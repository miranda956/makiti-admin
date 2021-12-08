import {
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ALL_SHOPS,
    ALL_SHOPS_SUCCESS,
    ADD_SHOP,
    ADD_SHOP_SUCCESS,
    UPDATE_SHOP,
    UPDATE_SHOP_SUCCESS,
    SHOP_BY_ID,
    SHOP_BY_ID_SUCCESS,
    REMOVE_SHOP,
    REMOVE_SHOP_SUCCESS,
    ALL_TRANSCTIONS,
    ALL_TRANSCTIONS_SUCCESS,
    TRANSCTIONS_BY_ID,
    TRANSCTIONS_BY_ID_SUCCESS,
    ALL_CUSTOMERS,
    ALL_CUSTOMERS_SUCCESS,
    CUSTOMERS_BY_ID,CUSTOMERS_BY_ID_SUCCESS,
    ALL_REPORTS,
    ALL_REPORTS_SUCCESS,
    REPORTS_BY_ID,
    REPORTS_BY_ID_SUCCESS,
    ALL_STAFF,
    ALL_STAFF_SUCCESS,
    ADD_STAFF,
    ADD_STAFF_SUCCESS,
    UPDATE_STAFF,
    UPDATE_STAFF_SUCESS,
    STAFF_BY_ID,
    STAFF_BY_ID_SUCCESS,
    REMOVE_STAFF,
    REMOVE_STAFF_SUCESS
} from "./mutation-types";

export const productMutations = {
    [ALL_PRODUCTS] (state) {
      
      state.showLoader = true
    },
    [ALL_PRODUCTS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.product = payload
    },
    [PRODUCT_BY_ID] (state) {
      
      state.showLoader = true
    },
    [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    
      state.showLoader = false
      
      state.product  = payload
    },
    [ADD_PRODUCT]: (state) => {
      
        state.showLoader = true
      },
      [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false
        state.product.push(payload)
      },
    [UPDATE_PRODUCT]: (state) => {
    
      state.showLoader = true
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
        // not yet done 
        state.showLoader = false
        state.product = state.product.map(j => {
          if (j._id === payload._id) {
            payload = {...payload, product: state.product.filter(r => r._id === payload.product)[0]}
            return payload
          }
          return j
        })
      },
      [REMOVE_PRODUCT]: (state) => {
        state.showLoader = true
      },
      [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false
        const index = state.product.findIndex(j => j._id === payload)
        console.debug('index', index)
        state.product.splice(index, 1)
      }
    }


  export const shopMutations = {
    [ALL_SHOPS] (state) {
      
      state.showLoader = true
    },
    [ALL_SHOPS_SUCCESS] (state, payload) {
    
      state.showLoader = false
      
      state.shops = payload
    },
    [SHOP_BY_ID] (state) {
      
      state.showLoader = true
    },
    [SHOP_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.shops = payload
    },
    [ADD_SHOP]: (state) => {
      
      state.showLoader = true
    },
    [ADD_SHOP_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.applicants.push(payload)
    },
    [UPDATE_SHOP]: (state) => {
      state.showLoader = true
    },
    [UPDATE_SHOP_SUCCESS]: (state, payload) => {
      // not yet done 
      state.showLoader = false
      state.shops = state.shops.map(a => {
        if (a._id === payload._id) {
          payload = {...payload,shops: state.shops.filter(t=> t._id === payload.shops)[0]}
          return payload
        }
        return a
      })
    },
    [REMOVE_SHOP]: (state) => {
        state.showLoader = true
      },
      [REMOVE_SHOP_SUCCESS]: (state, payload) => {
        state.showLoader = false
        const index = state.shops.findIndex(j => j._id === payload)
        console.debug('index', index)
        state.shops.splice(index, 1)
      }
    }



  
  export const staffMutations = {
    [ALL_STAFF] (state) {
      
      state.showLoader = true
    },
    [ALL_STAFF_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.staff = payload
    },
    [STAFF_BY_ID] (state) {
      
      state.showLoader = true
    },
    [STAFF_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.staff = payload
    },
    [ADD_STAFF]: (state) => {
      
      state.showLoader = true
    },
    [ADD_STAFF_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.staff.push(payload)
    },
    [UPDATE_STAFF ]: (state) => {
      state.showLoader = true
    },
    [UPDATE_STAFF_SUCESS]: (state, payload) => {
      // not done
      state.showLoader = false
      state.staff = state.staff.map(p => {
        if (p._id === payload._id) {
          payload = {...payload, staff: state.staff.filter(x => x._id === payload.manufacturer)[0]}
          return payload
        }
        return p
      })
    },
    [REMOVE_STAFF]: (state) => {
      state.showLoader = true
    },
    [REMOVE_STAFF_SUCESS]: (state, payload) => {
      state.showLoader = false
      const index = state.staff.findIndex(j => j._id === payload)
      console.debug('index', index)
      state.staff.splice(index, 1)
    }
  }
  
 
  export const customerMutations = {
    // not yet done 
    [ALL_CUSTOMERS] (state) {
      state.showLoader = true
    },
    [ALL_CUSTOMERS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.customers = payload
    },
    [CUSTOMERS_BY_ID] (state) {
      state.showLoader = true
    },

    [CUSTOMERS_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.customer = payload
    }
  }
  export const transctionMutations = {
    // not yet done 
    [ALL_TRANSCTIONS] (state) {
      state.showLoader = true
    },
    [ALL_TRANSCTIONS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.transctions = payload
    },
    [TRANSCTIONS_BY_ID] (state) {
      state.showLoader = true
    },

    [TRANSCTIONS_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.transctions = payload
    }
  }
  export const reportMutations = {
    // not yet done 
    [ALL_REPORTS] (state) {
      state.showLoader = true
    },
    [ALL_REPORTS_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.reports = payload
    },
    [REPORTS_BY_ID] (state) {
      state.showLoader = true
    },

    [REPORTS_BY_ID_SUCCESS] (state, payload) {
      
      state.showLoader = false
      
      state.reports = payload
    }
  }