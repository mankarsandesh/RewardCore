<template>
<v-flex class="imageCollection pa-4" style="height: 100%;">
  <h3 class="mb-3">Image Collection</h3>
  <hr class="border"/>
      <v-card class="mx-auto mt-3" >
        <v-card-text>
          <v-row class="d-flex align-center pa-4">
            <h4 class="mr-auto">Power Gems</h4>

            <v-btn class="ml-auto primary" small >Change Collection</v-btn>
          </v-row>

          <v-row class="align-center pa-1">
            <v-col cols="3" v-for="n in 12" :key="n">
              <v-card :outlined="false" color="#F3F3F3" outlined min-height="130px">
                <v-card-text class="justify-center text-center">
                  <v-img
                    class="rounded-circle justify-center"
                    style="margin: 0 auto"
                    height="40"
                    width="40"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                  <h4 class="mt-3">Word of the Day {{ n }}</h4>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
</v-flex>
</template>

<script>
export default {
  data() {
    return {
 
    }
  },
}
</script>
<style  scoped>
.imageCollection{
    background-color: #F3F3F3;
}
.border{
  border: 0.3px solid #e8e8e8;
  height: 1px;
}
</style>
