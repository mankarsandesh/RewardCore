<template>
  <v-container fill-height class="rewardCard" >
    <v-col cols="12" >
      <v-row align="center" justify="center" >
        <div 
          v-bind:class="flipped ? 'flip-container flipped' : 'flip-container'"
        >
          <div class="flipper" >
            <v-card class="front" elevation="4">
              <slot name="front">
                <v-flex class="pa-2" v-on:click="flipped = true">
                  <v-img
                    class="rounded-circle justify-center ml-auto"
                    height="20"
                    width="20"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                </v-flex>
                <v-card-text class="justify-center text-center">
                  <v-img
                    class="rounded-circle justify-center"
                    style="margin: 0 auto"
                    height="20"
                    width="20"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                  <h4 class="mt-5 rewardTitle">Testing Reward</h4>
                  <v-flex class="mt-5 rewardSubtitle">
                    Testing Subtitle
                  </v-flex>
                  <v-flex class="mt-1 rewardPoints"> 100 Points</v-flex>
                </v-card-text>
                <v-flex class="rewardPrize pa-3 text-center">
                  Text Prize
                </v-flex>
              </slot>
            </v-card>
            <v-card class="back"  elevation="4">
              <v-flex class="pa-2" v-on:click="flipped = false">
                <span class="float-left">Date</span>
                <span class="float-right">
                  <v-img
                    class="rounded-circle"
                    height="20"
                    width="20"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                </span>
              </v-flex>
              <v-flex class="mt-3 rewardDescription"
                >This is Description</v-flex
              >

              <v-flex class="rewardPrizeDetails justify-center text-center">
                Testing Description
              </v-flex>
            </v-card>
          </div>
        </div>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// import FlipCard from 'vue-info-card'
export default {
  components: {},
  data() {
    return {
      flipped: false,
    }
  },
}
</script>
<style scoped>
.rewardDescription {
  height: 45%;
  padding-top: 50px;
  text-align: center;
  font-size: 14px;
}
.rewardPrizeDetails {
  height: 45%;
  background-color: #524dc0;
  color: #fff;
  font-size: 14px;
  padding-top: 50px;
}
.rewardPrize {
  color: #fff;
  font-size: 14px;
  background-color: #524dc0;
}
.rewardTitle {
  font-size: 14px;
}
.rewardSubtitle {
  font-size: 14px;
}
.rewardPoints {
  color: green;
}
.rewardCard {
height: 100%;
  background-color: #C2C2C3;
}
i.frontFlipBtn,
i.backFlipBtn {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffffff;
}
i.backFlipBtn {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  width: 250px;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
  cursor: pointer;
  height: 240px;
  background-color: #fff;
  /* border: 1px solid blue; */
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
</style>
