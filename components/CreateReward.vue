<template>
  <div class="pa-5 createReward" style="height: 900px">
    <v-row class="d-flex align-center pa-4">
      <h4 class="mr-auto">Create Reward</h4>

      <v-btn
        class="ml-auto text-white primary"
        small
        :disabled="!createReward"
        @click="createRewardData"
        >{{ buttonText }}</v-btn
      >
    </v-row>

    <hr class="borderMain" />

    <v-row class="align-center">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Active </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-switch v-model="rewardStatus" height="0" color="primary"></v-switch>
      </v-col>
    </v-row>

    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Title </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          v-model="rewardTitle"
          label="title"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
          @input="sendRewardInfo('title')"
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Sub Title </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          v-model="rewardSubTitle"
          label="Sub title"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
          @input="sendRewardInfo('subtitle')"
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Description </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6" class="mt-5">
        <v-textarea
          v-model="rewardDescription"
          height="80"
          :no-resize="false"
          solo
          label="description"
          @input="sendRewardInfo('description')"
        ></v-textarea>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center pa-1 inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Image </label> *</v-col>

      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-avatar class="pa-1 mediaImage">
          <img
            :src="GetMediaCollectionData.mediaImage"
            v-if="GetMediaCollectionData.mediaImage"
          />
        </v-avatar>
        <v-btn
          small
          class="ml-2"
          v-if="!GetMediaCollectionData.mediaImage"
          @click="searchCollection"
          >Search Collection</v-btn
        >
        <span v-if="GetMediaCollectionData.mediaImage">
          <v-btn small class="ml-2" @click="searchCollection">Change</v-btn>
          <v-btn small class="ml-2" @click="removeImageCollection"
            >Remove</v-btn
          >
        </span>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center pa-1 inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Action Type </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-select
          :items="actionType"
          v-model="rewardActionType"
          height="35"
          flat
          class="inputClass"
          :dense="true"
          label="Please select one"
          solo
          @change="eventSystem"
        ></v-select>
      </v-col>
    </v-row>
    <hr class="border" v-if="GetSystemEvent.length != 0" />
    <v-row class="align-center pa-1 inputDiv" v-if="GetSystemEvent.length != 0">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Action </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-flex>
          <h4>{{ GetSystemEvent.title }}</h4>
          <p>{{ GetSystemEvent.description }}</p>
          <v-btn small outlined>Chnage </v-btn>
        </v-flex>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Points </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          type="number"
          v-model="rewardPoints"
          label="experience points"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
          @input="sendRewardInfo('rewardPoints')"
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Prize </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-switch v-model="prizeStatus" height="0" color="primary"></v-switch>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-flex v-if="prizeStatus">
      <v-row class="align-center inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Prize </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            v-model="rewardPrizeTitle"
            label="Prize title"
            height="35"
            class="inputClass"
            :dense="true"
            flat
            solo
            @input="sendRewardInfo('rewardPrizeTitle')"
          ></v-text-field>
        </v-col>
      </v-row>

      <hr class="border" />
      <v-row class="align-center inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"
          ><label>Prize Description </label> *</v-col
        >
        <v-col cols="6" lg="9" xs="6" sm="6" class="mt-5">
          <v-textarea
            v-model="rewardPrizeDescription"
            height="80"
            solo
            label="Prize description"
            @input="sendRewardInfo('rewardPrizeDescription')"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-flex>
    <v-snackbar
      class="mb-5"
      v-model="resultSnackbar"
      :right="'right'"
      color="green"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
import config from '~/config/config.global'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      buttonText: 'Create',
      message: '',
      resultSnackbar: false,
      createReward: false,
      viewPrize: false,
      rewardStatus: true,

      rewardTitle: '',
      rewardSubTitle: '',
      rewardDescription: '',
      changeCollection: true,
      actionType: ['System Event', 'Trail'],
      rewardExperice: '',
      rewardActionType: '',
      rewardPoints: '',
      prizeStatus: false,
      rewardPrizeTitle: '',
      rewardPrizeDescription: '',
    }
  },
  computed: {
    ...mapGetters('store', [
      'GetMediaCollectionData',
      'GetSystemEvent',
      'GetRewardTitle',
      'GetRewardSubtitle',
    ]),
  },
  mounted() {
    // this.rewardTitle = this.GetRewardTitle;
  },
  created() {
    if (this.$route.params.id) {
      this.getRewardInfo()
    }
  },
  methods: {
    ...mapMutations('store', [
      'CLEAR_MEDIA_COLLECTION',
      'SET_REWARD_TITLE',
      'SET_REWARD_SUBTITLE',
      'SET_REWARD_DESCRIPTION',
      'SET_REWARD_POINTS',
      'SET_REWARD_PRIZE_TITLE',
      'SET_REWARD_PRIZE_DESCRIPTION',
      'CLEAR_MEDIA_COLLECTION',
      'CLEAR_SYSTEM_EVENT',
    ]),
    ...mapActions('store', ['setMediaCollection', 'setSystemEvent']),
    removeImageCollection() {
      this.CLEAR_MEDIA_COLLECTION()
    },
    searchCollection() {
      this.$emit('collectionSearch')
    },
    eventSystem() {
      this.$emit('systemEvent')
      this.createReward = true
    },
    sendRewardInfo(type) {
      if (type == 'title') {
        this.SET_REWARD_TITLE(this.rewardTitle)
      } else if (type == 'subtitle') {
        this.SET_REWARD_SUBTITLE(this.rewardSubTitle)
      } else if (type == 'description') {
        this.SET_REWARD_DESCRIPTION(this.rewardDescription)
      } else if (type == 'rewardPoints') {
        this.SET_REWARD_POINTS(this.rewardPoints)
      } else if (type == 'rewardPrizeTitle') {
        this.SET_REWARD_PRIZE_TITLE(this.rewardPrizeTitle)
      } else if (type == 'rewardPrizeDescription') {
        this.SET_REWARD_PRIZE_DESCRIPTION(this.rewardPrizeDescription)
      }
    },
    // Get Reward Info
    async getRewardInfo() {
      try {
        const result = await this.$axios.get(
          config.rewardCustomer.url + '/' + this.$route.params.id
        )
        if (result.status == 200) {
          console.log(result)

          this.rewardTitle = result.data.title
          this.rewardSubTitle = result.data.subtitle
          this.rewardDescription = result.data.description
          result.data.type == 'event'
            ? (this.rewardActionType = 'System Event')
            : (this.rewardActionType = 'Trail')
          this.rewardPoints = result.data.experience
          this.prizeStatus = result.data.prize
          this.rewardPrizeTitle = result.data.prize_title
          this.rewardPrizeDescription = result.data.prize_description

          this.SET_REWARD_TITLE(result.data.title)

          this.SET_REWARD_SUBTITLE(result.data.subtitle)

          this.SET_REWARD_DESCRIPTION(result.data.description)

          this.SET_REWARD_POINTS(result.data.experience)

          this.SET_REWARD_PRIZE_TITLE(result.data.prize_title)

          this.SET_REWARD_PRIZE_DESCRIPTION(result.data.prize_description)

          const data = {
            mediaId: result.data.media.id,
            mediaImage: result.data.media.url,
          }

          this.setMediaCollection(data)
          this.setSystemEvent(result.data.reward)
          this.buttonText = 'Update'
          this.createReward = true
        }
      } catch (ex) {
        console.log(ex)
      }
    },
    // Create New Reward
    async createRewardData() {
      try {
        var reqBody = {
          reward_id: this.GetSystemEvent.id,
          media_id: this.GetMediaCollectionData.mediaId,
          active: this.rewardStatus,
          title: this.rewardTitle,
          subtitle: this.rewardSubTitle,
          description: this.rewardDescription,
          experience: this.rewardPoints,
          prize: this.prizeStatus,
          prize_title: this.rewardPrizeTitle,
          prize_description: this.rewardPrizeDescription,
        }
        if (this.$route.params.id) {
          var result = await this.$axios.put(
            config.rewardCustomer.url + '/' + this.$route.params.id,
            reqBody
          )
        } else {
          var result = await this.$axios.post(
            config.rewardCustomer.url,
            reqBody
          )
        }
        console.log(result)
        if (result.status == 200) {
          this.message = 'Sucessfully Create Reward'
          this.resultSnackbar = true
          this.CLEAR_MEDIA_COLLECTION()
          this.CLEAR_SYSTEM_EVENT()
          window.location.href = '/'
        }
        if (result.status_code) {
          this.message = 'Something Wrong'
          this.resultSnackbar = true
        }
      } catch (ex) {
        console.log(ex)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.mediaImage {
  border: 2px solid #e0dcdc;
  background-color: #f5f0f0;
}
.borderMain {
  border: 0.3px solid #e8e8e8;
  height: 1px;
}
.border {
  border: 0.3px solid #f2f2f2;
  height: 1px;
}
.inputClass {
  height: 40px;
  border: 1px solid #dddddd;
}
.createReward {
  background-color: #ffff;
  border-right: 2px solid #dddddd;
}
.inputDiv label {
  font-size: 14px;
  color: #333;
}
</style>
