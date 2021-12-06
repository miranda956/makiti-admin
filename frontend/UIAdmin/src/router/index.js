import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		// @ts-ignore
		layout: "dashboard",

		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// @ts-ignore
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/customers',
		name: 'customer',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/customers.vue'),

	},
	
	{
		path: '/listShops',
		name: 'listShop',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/listShops.vue'),

	},
	{
		path: '/Transctions',
		name: 'transctions',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/Transctions.vue'),

	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		// @ts-ignore
		component: () => import('../views/Billing.vue'),
	},
	{path: '/products',
	name: 'products',
	layout: "dashboard",
	// @ts-ignore
	component: () => import('../views/Listproducts.vue')
},

	{path: '/Staff',
	name: 'Staff',
	layout: "dashboard",
	// @ts-ignore
	component: () => import('../views/Liststaff.vue')
},
	{
		path: '/rtl',
		name: 'RTL',   
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		// @ts-ignore
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		// @ts-ignore
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		// @ts-ignore
		component: () => import('../views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		// @ts-ignore
		component: () => import('../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	// @ts-ignore
	base: process.env.BASE_URL,
	routes,
	// @ts-ignore
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
