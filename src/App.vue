<template>
  <v-app>
    <Navbar />

    <v-main class="main-container">
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow-y: auto !important;
}
.main-container {
  background-color: #f8fafc !important;
  min-height: 100vh;
}

.v-app-bar-nav-icon .v-icon {
  font-size: 24px !important;
  color: #333 !important;
}

.v-list-item--active {
  background: linear-gradient(135deg, #7c3aed, #3b82f6) !important;
  color: #ffffff !important;
  border-radius: 12px;
}

.v-list-item--active .v-icon {
  color: #fff !important;
}
</style>
