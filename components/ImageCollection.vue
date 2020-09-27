<template>
  <v-flex class="imageCollection pa-4" style="height: 100%">
    <h3 class="mb-3">Image Collection</h3>
    <hr class="border" />
    <v-card class="mx-auto mt-3" v-if="!showCategory">
      <v-card-text>
        <v-row class="align-center pa-1">
          <v-col
            cols="4"
            v-for="item in imageCollection"
            class="iamgeCol"
            :key="item.id"
          >
            <v-card
              :outlined="false"
              color="#F3F3F3"
              outlined
              min-height="130px"
              @click="clickImageCollection(item.id, item.title)"
            >
              <v-card-text class="justify-center text-center">
                <v-img
                  class="rounded-circle justify-center"
                  style="margin: 0 auto"
                  height="100"
                  width="100"
                  :src="item.media.url"
                />
                <h4 class="mt-3">{{ item.name }}</h4>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mx-auto mt-3" v-if="showCategory">
      <v-card-text>
        <v-row class="d-flex align-center pa-4">
          <h4 class="mr-auto">Power Gems</h4>

          <v-btn class="ml-auto primary" small @click="showCategory = false"
            >Change Collection</v-btn
          >
        </v-row>

        <v-row class="align-center pa-1">
          <v-col
            cols="4"
            v-for="item in categoryImageCollection"
            class="iamgeCol"
            :key="item.id"
          >
            <v-card
              :outlined="false"
              color="#F3F3F3"
              outlined
              min-height="130px"
              @click="imageMediaSet(item.id, item.url)"
            >
              <v-card-text class="justify-center text-center">
                <v-img
                  class="rounded-circle justify-center"
                  style="margin: 0 auto"
                  height="80"
                  width="80"
                  :src="item.url"
                />
                <h4 class="mt-3">{{ item.title }}</h4>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import config from '~/config/config.global'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      imageCollection: [],
      imageId: '',
      categoryImageCollection: [],
      showCategory: false,
      categoryName: '',
    }
  },
  created() {
    // View all Image Collection
    this.viewAllImageCollection()
  },
  methods: {
    ...mapActions('store', ['setMediaCollection']),
    async viewAllImageCollection() {
      try {
        const res = await this.$axios.get(config.rewardMedia.url)
        this.imageCollection = res.data
      } catch (ex) {
        console.log(ex)
      }
    },
    // Image Collection Set on Vuex
    imageMediaSet(id, image) {
      const data = {
        mediaId: id,
        mediaImage: image,
      }
      this.setMediaCollection(data)
    },
    // After Click image Collection
    async clickImageCollection(imageType, categoryName) {
      try {
        const res = await this.$axios.get(
          config.rewardMedia.url + '/' + imageType
        )
        this.categoryName = categoryName
        this.showCategory = true
        this.categoryImageCollection = res.data
      } catch (ex) {
        console.log(ex)
      }
    },
  },
}
</script>
<style scoped>
.imageCollection {
  background-color: #f3f3f3;
}
.iamgeCol {
  background-color: #fff;
}
.border {
  border: 0.3px solid #e8e8e8;
  height: 1px;
}
</style>
