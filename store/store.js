// States
const state = () => ({
  mediaCollection: [],
  systemEventData: [],
  rewardTitle: 'Reward Title',
  rewardSubtitle: 'Reward Subtitle',
  rewardDescription: '',
  rewardPoints: '',
  rewardPrizeTitle: '',
  rewardPrizeDescription: '',
})

// Getters
const getters = {
  GetMediaCollectionData: (state) => state.mediaCollection, // Get Media Collection Data
  GetSystemEvent: (state) => state.systemEventData, // Get System Event Data
  GetRewardTitle: (state) => state.rewardTitle, // Get Reward Title
  GetRewardSubtitle: (state) => state.rewardSubtitle, // get Reward Subtitle
  GetRewardDescription: (state) => state.rewardDescription, // get Reward Description
  GetRewardPoints: (state) => state.rewardPoints, // Get Reward Points
  GetRewardPrizeTitle: (state) => state.rewardPrizeTitle, // Get reward Prize Title
  GetRewardPrizeDescription: (state) => state.rewardPrizeDescription, // Get Reward Prize Description
}

// Mutation
const mutations = {
  // Set Reward Title
  SET_REWARD_TITLE(state, payload) {
    state.rewardTitle = payload
  },
  // Set Reward SuTitle
  SET_REWARD_SUBTITLE(state, payload) {
    state.rewardSubtitle = payload
  },
  // Set Reward Description
  SET_REWARD_DESCRIPTION(state, payload) {
    state.rewardDescription = payload
  },
  // Set Reward Reward Points
  SET_REWARD_POINTS(state, payload) {
    state.rewardPoints = payload
  },
  // Set Reward Prize Title
  SET_REWARD_PRIZE_TITLE(state, payload) {
    state.rewardPrizeTitle = payload
  },
  // Set Reward Prize Description
  SET_REWARD_PRIZE_DESCRIPTION(state, payload) {
    state.rewardPrizeDescription = payload
  },
  // Set Media Collection Data
  SET_MEDIA_COLLECTION(state, payload) {
    state.mediaCollection = payload
  },
  // Set System event Data
  SET_SYSTEM_EVENT(state, payload) {
    state.systemEventData = payload
  },
  // Clear Media Collection Data
  CLEAR_MEDIA_COLLECTION(state) {
    state.mediaCollection = ''
  },
  // Clear System Event Data
  CLEAR_SYSTEM_EVENT(state) {
    state.systemEventData = ''
  },
  // Clear All State
  CLEAR_ALL_DATA(state){
    state.rewardTitle =  'Reward Title';
    state.rewardSubtitle = 'Reward Subtitle';
    state.rewardDescription =  '';
    state.rewardPoints= '';
    state.rewardPrizeTitle= '';
    state.rewardPrizeDescription= '';
  }
}

// Action
const actions = {
  // Set Reward Title
  setRewardTitle({ commit }, payload) {
    commit('SET_REWARD_TITLE', payload)
  },
  // Set Reward Subtitle
  setRewardSubtitle({ commit }, payload) {
    commit('SET_REWARD_SUBTITLE', payload)
  },
  // Set Reward Description
  setRewardDescription({ commit }, payload) {
    commit('SET_REWARD_DESCRIPTION', payload)
  },
  // Set Reward Points
  setRewardPoints({ commit }, payload) {
    commit('SET_REWARD_POINTS', payload)
  },
  // Set Reward Prize Title Data
  setRewardPrizeTitle({ commit }, payload) {
    commit('SET_REWARD_PRIZE_TITLE', payload)
  },
  // Set Reward Prize Description Data
  setRewardPrizeDescription({ commit }, payload) {
    commit('SET_REWARD_PRIZE_DESCRIPTION', payload)
  },
  // Set Media Collection Data
  setMediaCollection({ commit }, payload) {
    commit('SET_MEDIA_COLLECTION', payload)
  },
  // Set System Event Data
  setSystemEvent({ commit }, payload) {
    commit('SET_SYSTEM_EVENT', payload)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
