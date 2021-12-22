import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';
import FAQ from '@/pages/supportCenter/FAQ'
// Tables
import TablesBasicPage from '@/pages/Tables/Basic';
import CreateStaff from '@/pages/userManagement/Createstaff'
// Maps
import GoogleMapPage from '@/pages/Maps/Google';
import Permission from '@/pages/userManagement/Permission'
import Staff from '@/pages/userManagement/staff'
// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import AddPermission from '@/pages/userManagement/addPermission'
// Charts
import ChartsPage from '@/pages/Charts/Charts';
import NewShop  from '@/pages/Tables/NewShop';
// Ui
import Tickets from '@/pages/supportCenter/tickets'
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';
import AddProduct from '@/pages/CatalogManagement/addProduct'
import Product from '@/pages/CatalogManagement/products'
import Category from '@/pages/CatalogManagement/categories'
import NewCategory from '@/pages/CatalogManagement/addCategories'
import Roles from '@/pages/userManagement/Roles'
import Invoice from '@/pages/InvoiceManagement/Invoices'
import CreateInvoice from  '@/pages/InvoiceManagement/CreateInvoice';
import Contacts from '@/pages/ContactManagement/contacts.vue'
import Messages from '@/pages/ContactManagement/Message.vue';
import Leads from './pages/LeadManagement/Leads.vue'
import CreateLead from './pages/LeadManagement/CreateLead.vue'
import Opportunity from '@/pages/LeadManagement/Opportunity.vue'
import CreateOpportunity from './pages/LeadManagement/addOpportunity.vue';
import AddRole from '@/pages/userManagement/adddRole.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'leads/leads',
          name: 'leads',
          component:Leads,
        },
        {
          path: 'catalog/products',
          name: 'products',
          component:Product,
        },
        {
          path: 'catalog/category',
          name: 'category',
          component:Category,
        },
        {
          path: 'catalog/newcategory',
          name: 'newcategory',
          component:NewCategory,
        },
        {
          path: 'catalog/newproduct',
          name: 'addproducts',
          component:AddProduct,
        },
        {
          path: 'leads/opportunity',
          name: 'opportunity',
          component:Opportunity,
        },
        {
          path: 'leads/addopportunity',
          name: 'createopportunity',
          component:CreateOpportunity,
        },
        {
          path: 'leads/createleads',
          name: 'createleads',
          component: CreateLead,
        },
        {
          path: 'invoices/invoices',
          name: 'Invoice',
          component: Invoice,
        },
        {
          path: 'contacts/messages',
          name: ' Messages',
          component: Messages,
        },
    
         {
          path: 'invoices/craeteinvoice',
          name: 'newInvoice',
          component: CreateInvoice,
        },
        {
          path: 'support/faq',
          name: 'FAQ',
          component: FAQ,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        
        {
          path: '/error',
          name: 'Error',
          component: ErrorPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        {
          path: 'component/staff',
          name: 'staff',
          component:Staff,
        },
        {
          path: 'support/tickets',
          name: 'Tickets',
          component: Tickets,
        },
        {
          path: 'contacts/contacts',
          name: 'contacts',
          component: Contacts,
        },
        {
          path: 'components/newproduct',
          name: 'addproduct',
          component: AddProduct,
        },
        {
          path: 'component/newrole',
          name: 'addRole',
          component: AddRole,
        },
        {
          path: 'components/newshop',
          name: 'addshop',
          component: NewShop,
        },
        {
          path: 'component/permission',
          name: 'Permission',
          component:Permission,
        },

        {
          path: 'components/addpermission',
          name: 'addPermission',
          component: AddPermission,
        },
        {
          path: 'component/createstaff',
          name: 'createstaff',
          component: CreateStaff,
        },
        {
          path: 'component/roles',
          name: 'Roles',
          component: Roles,
        },
        
      ],
    },
  ],
});
