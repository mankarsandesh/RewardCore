//States
const state = () => ({
  mediaCollection: [], // Media Collection
  systemEventData: [],
  rewardTitle: 'Reward Title',
  rewardSubtitle: 'Reward Subtitle',
  rewardDescription: '',
  rewardPoints: '0',
  rewardPrizeTitle: '',
  rewardPrizeDescription: '',
})

//Getters
const getters = {
  // Get Media Collection Data
  GetMediaCollectionData: (state) => state.mediaCollection,
  // Get System Event Data
  GetSystemEvent: (state) => state.systemEventData,
  GetRewardTitle: (state) => state.rewardTitle,
  GetRewardSubtitle: (state) => state.rewardSubtitle,
  GetRewardDescription: (state) => state.rewardDescription,
  GetRewardPoints: (state) => state.rewardPoints,
  GetRewardPrizeTitle: (state) => state.rewardPrizeTitle,
  GetRewardPrizeDescription: (state) => state.rewardPrizeDescription,
}

// Mutation
const mutations = {
  SET_REWARD_TITLE(state, payload) {
    state.rewardTitle = payload
  },
  SET_REWARD_SUBTITLE(state, payload) {
    state.rewardSubtitle = payload
  },
  SET_REWARD_DESCRIPTION(state, payload) {
    state.rewardDescription = payload
  },
  SET_REWARD_POINTS(state, payload) {
    state.rewardPoints = payload
  },
  SET_REWARD_PRIZE_TITLE(state, payload) {
    state.rewardPrizeTitle = payload
  },
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
  CLEAR_SYSTEM_EVENT(state){
    state.systemEventData = '';
  }
}

// Action
const actions = {
  // Set Media Collection Data
  setRewardTitle({ commit }, payload) {
    commit('SET_REWARD_TITLE', payload)
  },
  // Set Media Collection Data
  setRewardSubtitle({ commit }, payload) {
    commit('SET_REWARD_SUBTITLE', payload)
  },
  // Set Media Collection Data
  setRewardDescription({ commit }, payload) {
    commit('SET_REWARD_DESCRIPTION', payload)
  },
  // Set Media Collection Data
  setRewardPoints({ commit }, payload) {
    commit('SET_REWARD_POINTS', payload)
  },

  setRewardPrizeTitle({ commit }, payload) {
    commit('SET_REWARD_PRIZE_TITLE', payload)
  },

  setRewardPrizeDescription({ commit }, payload) {
    commit('SET_REWARD_PRIZE_DESCRIPTION', payload)
  },

  // Set Media Collection Data
  setMediaCollection({ commit }, payload) {
    commit('SET_MEDIA_COLLECTION', payload)
  },
  // Set Media Collection Data
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
