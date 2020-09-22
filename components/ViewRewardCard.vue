<template>
  <v-container fill-height class="rewardCard">
    <v-col cols="12">
      <v-row align="center" justify="center" style="height: 600px">
        <div style="width: 250px">
          <!-- <FlipCard>
            <template slot="front">
              <span>Hey loser</span>
            </template>
            <template slot="back">
              <span>Thought u could get rid of me loser?</span>
            </template>
          </FlipCard> -->

          <div
            v-bind:class="flipped ? 'flip-container flipped' : 'flip-container'"
          >
            <div class="flipper "  >
              <div class="front pa-5">
                <v-icon class="frontFlipBtn" v-on:click="flipped = true">
                  front
                </v-icon>

                <slot name="front">
                  <v-layout text-center>
                    <h1>Testing</h1>
                  </v-layout>
                </slot>
              </div>
              <div class="back pa-5">
                <slot name="back"></slot>
                <v-icon class="backFlipBtn" v-on:click="flipped = false">
                  back
                </v-icon>
              </div>
            </div>
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
      front: {
        title: 'Daily Conversion Value',
        subtitle: [3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      },
      back: {
        title: 'Monthly Summary',
        message:
          'Your average daily conversion value for this month is <b>50.4$</b>. It is below the average of the last six months.',
      },
    }
  },
}
</script>
<style scoped>
.rewardCard {
  height: auto;
  background-color: #f3f3f3;
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
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
    
  border: 1px solid blue;
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
