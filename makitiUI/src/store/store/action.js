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
import axios from 'axios';
const API_BASE = 'http://localhost:5000';

export const productsActions={

    allProducts ({commit}) {
        commit(ALL_PRODUCTS)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_PRODUCTS_SUCCESS, response.data)
        })
    },
    productById ({commit}, payload) {
        commit(PRODUCT_BY_ID)
    
        axios.get(`${API_BASE}/${payload}`).then(response => {
            commit(PRODUCT_BY_ID_SUCCESS, response.data)
        })
    },
    addProduct ({commit}, payload) {
        commit(ADD_PRODUCT)
        axios.post(`${API_BASE}/`, payload).then(response => {
            commit(ADD_PRODUCT_SUCCESS, response.data)
        })
    },
    updateProduct ({commit}, payload) {
        commit(UPDATE_PRODUCT)
        
        axios.patch(`${API_BASE}/${payload._id}`, payload).then(response => {
            commit(UPDATE_PRODUCT_SUCCESS, response.data)
        })
    },
    removeProduct ({commit}, payload) {
        commit(REMOVE_PRODUCT)
        axios.delete(`${API_BASE}/${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_PRODUCT_SUCCESS, response.data)
        })
    }

}

export const shopActions={


    allShops({commit}) {
        commit(ALL_SHOPS)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_SHOPS_SUCCESS, response.data)
        })
    },
    shopById ({commit}, payload) {
        commit(SHOP_BY_ID)
    
        axios.get(`${API_BASE}//${payload}`).then(response => {
            commit(SHOP_BY_ID_SUCCESS, response.data)
        })
    },
    addShop ({commit}, payload) {
        commit(ADD_SHOP)
        axios.post(`${API_BASE}/`, payload).then(response => {
            commit(ADD_SHOP_SUCCESS, response.data)
        })

},
updateShop ({commit}, payload) {
    commit(UPDATE_SHOP)
    
    axios.patch(`${API_BASE}/${payload._id}`, payload).then(response => {
        commit(UPDATE_SHOP_SUCCESS, response.data)
    })
},
removeShop ({commit}, payload) {
    commit(REMOVE_SHOP)
    axios.delete(`${API_BASE}/${payload}`, payload).then(response => {
        console.debug('response', response.data)
        commit(REMOVE_SHOP_SUCCESS, response.data)
    })
}
}



export const staffActions={
    allStaff({commit}) {
        commit(ALL_STAFF)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_STAFF_SUCCESS, response.data)
        })
    },
    staffById ({commit}, payload) {
        commit(STAFF_BY_ID)
    
        axios.get(`${API_BASE}/${payload}`).then(response => {
            commit(STAFF_BY_ID_SUCCESS, response.data)
        })
    },
    addStaff ({commit}, payload) {
        commit(ADD_STAFF)
        axios.post(`${API_BASE}/`, payload).then(response => {
            commit(ADD_STAFF_SUCCESS, response.data)
        })
    },
    updateStaff({commit}, payload) {
        commit(UPDATE_STAFF)   
        axios.patch(`${API_BASE}/${payload._id}`, payload).then(response => {
            commit(UPDATE_STAFF_SUCESS, response.data)
        })
    },removeStaff ({commit}, payload) {
        commit(REMOVE_STAFF)
        axios.delete(`${API_BASE}${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_STAFF_SUCESS, response.data)
        })
    }

}

export const customersActions ={

    allCustomers({commit}) {
        commit(ALL_CUSTOMERS)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_CUSTOMERS_SUCCESS, response.data)
        })
    },
    customerById ({commit}, payload) {
        commit(CUSTOMERS_BY_ID)
           axios.get(`${API_BASE}/${payload}`).then(response => {
            commit(CUSTOMERS_BY_ID_SUCCESS, response.data)
        })
    },
    
    
}
export const transctionsActions ={

    allTransctions({commit}) {
        commit(ALL_TRANSCTIONS)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_TRANSCTIONS_SUCCESS, response.data)
        })
    },
    transctionById ({commit}, payload) {
        commit(TRANSCTIONS_BY_ID)
           axios.get(`${API_BASE}/${payload}`).then(response => {
            commit(TRANSCTIONS_BY_ID_SUCCESS, response.data)
        })
    },
    
    
}
export const reportsActions ={

    allReports({commit}) {
        commit(ALL_REPORTS)      
        axios.get(`${API_BASE}/`).then(response => {
        commit(ALL_REPORTS_SUCCESS, response.data)
        })
    },
    reportsById ({commit}, payload) {
        commit(REPORTS_BY_ID)
           axios.get(`${API_BASE}/${payload}`).then(response => {
            commit(REPORTS_BY_ID_SUCCESS, response.data)
        })
    },
    
    
}

