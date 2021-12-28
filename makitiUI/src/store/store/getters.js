// @ts-nocheck
export const productGetters = {
    
    allproducts: (state, getters) => {
      return state.products
    },
    
    productById: (state, getters) => id => {
      if (getters.allproducts.length > 0) {
        return getters.allproducts.filter(j => j._id === id)[0]
      } else {
        return state.product
      }
    },
  }
  export const shopGetters = {

    allapplicants: (state, getters) => {
      return state.shop
    },
    
    shopById: (state, getters) => id => {
      if (getters.allshops.length > 0) {
        return getters.allshops.filter(a => a._id === id)[0]
      } else {
        return state.shop
      }
    },
  }
  export const transctionGetters = {
    
    alltransctions: (state, getters) => {
      return state.transctions
    },
    
    recruiterById: (state, getters) => id => {
      if (getters.alltransctions.length > 0) {
        return getters.alltransctions.filter(r => r._id === id)[0]
      } else {
        return state.transction
      }
    },
  }
  export const customersGetters = {
    
    alldmins: (state, getters) => {
      return state.customers
    },

    adminById: (state, getters) => id => {
      if (getters.allcustomers.length > 0) {
        return getters.allcustomers.filter(d => d._id === id)[0]
      } else {
        return state.customers
      }
    },
  }
  export const reportsGetters = {
    
    allapplications: (state, getters) => {
      return state.reports
    },
    
    applicationsById: (state, getters) => id => {
      if (getters.allreports.length > 0) {
        return getters.allreports.filter(p => p._id === id)[0]
      } else {
        return state.reports
      }
    },
  }

  export const staffGetters = {
    
    allapplications: (state, getters) => {
      return state.staff
    },
    
    applicationsById: (state, getters) => id => {
      if (getters.allstaff.length > 0) {
        return getters.allstaff.filter(p => p._id === id)[0]
      } else {
        return state.staff
      }
    },
  }