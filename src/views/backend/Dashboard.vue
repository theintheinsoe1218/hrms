<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <h1>Dashboard</h1>
        <p class="text-disabled">Welcome back! Here's what's happening today, January 30, 2026</p>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg pa-4">
          <div class="d-flex align-center justify-space-between">
            <div>
              <p class="text-subtitle-2 text-grey-darken-1 mb-1">Total Employees</p>
              <h2 class="text-h5 font-weight-bold">4</h2>
              <span class="text-caption text-success font-weight-bold">5 total</span>
            </div>
            <v-avatar color="blue-lighten-5" size="56">
              <v-icon color="blue" size="32">mdi-cart-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg pa-4">
          <div class="d-flex align-center justify-space-between">
            <div>
              <p class="text-subtitle-2 text-grey-darken-1 mb-1">Total Purchase</p>
              <h2 class="text-h5 font-weight-bold">$12,800</h2>
              <span class="text-caption text-error font-weight-bold">-5% from last month</span>
            </div>
            <v-avatar color="orange-lighten-5" size="56">
              <v-icon color="orange" size="32">mdi-cart-arrow-up</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg pa-4">
          <div class="d-flex align-center justify-space-between">
            <div>
              <p class="text-subtitle-2 text-grey-darken-1 mb-1">Customers</p>
              <h2 class="text-h5 font-weight-bold">1,240</h2>
              <span class="text-caption text-grey font-weight-bold">Total active users</span>
            </div>
            <v-avatar color="purple-lighten-5" size="56">
              <v-icon color="purple" size="32">mdi-account-group-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg pa-4">
          <div class="d-flex align-center justify-space-between">
            <div>
              <p class="text-subtitle-2 text-grey-darken-1 mb-1">Reports Generated</p>
              <h2 class="text-h5 font-weight-bold">85</h2>
              <span class="text-caption text-info font-weight-bold">Last 30 days</span>
            </div>
            <v-avatar color="teal-lighten-5" size="56">
              <v-icon color="teal" size="32">mdi-file-chart-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="1" class="rounded-lg pa-6" min-height="300">
          <h3 class="text-h6 mb-4">Recent Transactions</h3>
          <p class="text-grey">Data table or charts will go here...</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
}
</style>
