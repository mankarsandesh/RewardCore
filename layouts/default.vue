<template>
  <v-app id="page">
    <v-main >
      <v-container  fluid>
        <v-card class="d-flex mb-2 mt-2" flat tile>
          <h2 class="mr-auto" to="/" >Reward Core</h2>
          <v-btn
            class="ml-auto"
            to="/createReward"
            v-if="$nuxt.$route.path == '/'"
          >
            Add Reward</v-btn
          >
          <v-btn
            class="ml-auto"
            to="/"
            v-if="$nuxt.$route.path == '/createReward'"
          >
            View Reward</v-btn
          >
        </v-card>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>
