<template>
  <v-app-bar app fixed elevation="2" density="comfortable" style="z-index: 1001">
    <v-app-bar-nav-icon color="black" @click="drawer = !drawer" />

    <v-toolbar-title class="title-link" @click="$router.push('/')">HRMS Pro</v-toolbar-title>

    <v-spacer />

    <!-- <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text">
          <v-icon start>mdi-cart</v-icon>
          Sale
          <v-icon end>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list density="comfortable">
        <v-list-item to="/sale/invoice"><v-list-item-title>Invoice</v-list-item-title></v-list-item>
        <v-list-item to="/sale/payment"><v-list-item-title>Payment</v-list-item-title></v-list-item>
      </v-list>
    </v-menu> -->

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" icon variant="text" class="mr-5">
          <v-avatar color="primary" size="35">
            <span class="text-white text-subtitle-2">T</span>
          </v-avatar>
        </v-btn>
      </template>

      <v-list density="comfortable">
        <v-list-item to="/profile" link>
          <template #prepend>
            <v-icon>mdi-account-circle-outline</v-icon>
          </template>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="handleLogout" color="error" link>
          <template #prepend>
            <v-icon color="error">mdi-logout</v-icon>
          </template>
          <v-list-item-title class="text-error">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <v-btn icon to="/settings">
      <v-icon>mdi-cog</v-icon>
    </v-btn> -->
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" :temporary="isMobile" :permanent="!isMobile" width="260">
    <v-list nav density="comfortable">
      <template v-for="item in menus" :key="item.title">
        <v-list-group v-if="item.subItems" :value="item.title">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title"></v-list-item>
          </template>

          <v-list-item
            v-for="sub in item.subItems"
            :key="sub.title"
            :title="sub.title"
            :prepend-icon="sub.icon"
            :to="sub.to"
            link
          ></v-list-item>
        </v-list-group>

        <v-list-item
          v-else
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          link
        ></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
const drawer = ref(!isMobile.value)

const menus = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },

  { title: 'Attendance', icon: 'mdi-calendar-clock-outline', to: '/attendance' },
  { title: 'Leave Management', icon: 'mdi-calendar-range-outline', to: '/leave' },
  { title: 'Overtime', icon: 'mdi-clock-outline', to: '/overtime' },
  { title: 'Payroll', icon: 'mdi-wallet-outline', to: '/payroll' },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    subItems: [
      { title: 'Employees', icon: 'mdi-account-group-outline', to: '/setting/employee' },
      { title: 'Department', icon: 'mdi-sitemap-outline', to: '/setting/department' },
      { title: 'User', icon: 'mdi-account-multiple-outline', to: '/setting/useraccount' },
    ],
  },
]

watch(isMobile, (val) => {
  drawer.value = !val
})
</script>
<style scoped>
.title-link {
  cursor: pointer;
  user-select: none;
  font-weight: bold;
}

.title-link:hover {
  opacity: 0.8;
}

.v-list-group__items .v-list-item {
  padding-inline-start: 48px !important;
  font-size: 0.9rem;
}

.v-list-group--active > .v-list-item {
  /* color: #0284c7 !important; */
  background: linear-gradient(135deg, #3b82f6, #7c3aed) !important;
  color: #ffffff !important;
  border-radius: 12px;
}
</style>
