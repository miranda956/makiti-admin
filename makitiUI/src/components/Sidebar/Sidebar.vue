<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/dashboard"><span class="primary-word">MakitiPlus</span> <span class="secondary-word"> SAS</span></router-link>
      </header>


      <h5 class="navTitle first">
       
      </h5>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
      
        <NavLink
            :activeItem="activeItem"
            header="Shops"
            link="/app/tables"
            iconName="flaticon-house"
            index="tables"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Customers"
            link="/app/notifications"
            iconName="flaticon-user"
            index="notifications"
            isHeader
        />
       <NavLink
            :activeItem="activeItem"
            header="Catalog"
            link="/app/catalog"
            iconName="flaticon-gift"
            index="catalog"
            :childrenLinks="[
              { header: 'Products', link: '/app/catalog/products' },
              { header: 'Categories', link: '/app/catalog/category' },

            ]"
        />
      
          <NavLink
            :activeItem="activeItem"
            header="Aggrigations"
            link="/app/components"
            iconName="flaticon-network"
            index="components"
            :childrenLinks="[
              { header: 'Analytics', link: '/app/components/charts' },
            ]"
        />
       
        <NavLink
            :activeItem="activeItem"
            header="User Management"
            link="/app/component"
            iconName="flaticon-users"
            index="component"
            :childrenLinks="[
              { header: 'Staff', link: '/app/component/staff ' },
              { header: 'Roles', link: '/app/component/roles' },
              { header: 'Permissions', link:'/app/component/permission' },
            ]"
        />
           <NavLink
            :activeItem="activeItem"
            header="Support Center"
            link="/app/support"
            iconName="flaticon-help"
            index="support"
            :childrenLinks="[
              { header: 'Tickets', link: '/app/support/tickets' },
              { header: 'FAQ', link: '/app/support/faq' },
            ]"
        />
           <NavLink
            :activeItem="activeItem"
            header="InvoiceManagement"
            link="/app/invoices"
            iconName="flaticon-briefcase"
            index="invoices"
            :childrenLinks="[
              { header: 'Invoices', link: '/app/invoices/invoices' },
              { header: ' GenerateInvoices', link: '/app/invoices/craeteinvoice' }

             
            ]"
        />
         
           <NavLink
            :activeItem="activeItem"
            header="LeadManagement"
            link="/app/leads"
            iconName="flaticon-spotlight"
            index="leads"
            :childrenLinks="[
              { header: 'Leads', link: '/app/leads/leads' },
              { header: ' Opportunity', link: '/app/leads/opportunity' },

             
            ]"
        />
         <NavLink
            :activeItem="activeItem"
            header="ContactManagement"
            link="/app/contacts"
            iconName="flaticon-user-3"
            index="contacts"
            :childrenLinks="[
              { header: 'Message', link: '/app/contacts/messages' },
               { header: 'Contacts', link: '/app/contacts/contacts' },

             
            ]"
        />
       
      </ul>
      
    
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
