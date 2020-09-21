<template>
  <v-row>
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <v-row >
        <h3 class="mr-auto">Create Reward</h3>
        <v-btn class="ml-auto">Create</v-btn>
      </v-row>
      <hr />
      <v-row pa-2>
        <v-col cols="5" md="2">Title *</v-col>
        <v-col cols="5" md="8">
          <v-text-field label="Solo" solo></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mb-8 text-center" lg="5" xs="6" sm="6">
      <v-card        
        flat
        class="banner-2 justify-center text-center"
        max-width="344"
      >
        <h2>Show Extra Reward Info</h2>
      </v-card>
    </v-col>
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <v-card
       
        flat
        class="banner-2 justify-center text-center"
        max-width="344"
      >
        <h2>View Reward Card </h2>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style></style>
