<template>
  <v-flex class="imageCollection pa-4">
    <h3>System Event</h3>
    <v-card class="mt-2">
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="item in allEvent"
            @click="systemEvent(item)"
            :key="item.id"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="font-weight-bold"
              ></v-list-item-title>
              <v-list-item-title v-text="item.description"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="allEvent.length == 0">
            <v-list-item-content>
              There are no System Event
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
import config from '~/config/config.global'
export default {
  data() {
    return {
      allEvent: [],
      model: 1,
    }
  },
  created() {
    // View all System event
    this.viewAllevent()
  },
  methods: {
    ...mapActions('store', ['setSystemEvent']),
    async viewAllevent() {
      try {
        const res = await this.$axios.get(config.rewardEvent.url)
        this.allEvent = res.data
      } catch (ex) {
        console.log(ex)
      }
    },
    // System event get Data
    systemEvent(eventData) {
      this.setSystemEvent(eventData)
    },
  },
}
</script>
<style scoped>
.imageCollection {
  background-color: #f3f3f3;
}
</style>
