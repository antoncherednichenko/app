
import Vue from "vue";
import Vuex from "vuex";

import { set } from 'lodash'

import { getRandom } from '../helpers.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCanClick: false,
    isPopUp: false,
    clickCount: 0,
    score: 0,
    inGame: false,
    round: 0,
    currentLevel: 'Low',
	  currentRound: [],
    itteration: 0,
    indexes: [],
    colors: [
      { color: 'green', active: false },
      { color: 'red', active: false },
      { color: 'perple', active: false },
      { color: 'yellow', active: false },
    ],
    levelValues: {
      low: 1500,
      medium: 1000,
      high: 400
    }
  },
  mutations: {
    setObjectValue(state,  { path, value }) {
		  set(state, path, value)
    },
    changeActive(state, index) {
		  state.colors[index].active = true
    }
  },
  actions: {
    dispatchObjectValue({ commit }, setObj) {
		  commit('setObjectValue', setObj)
    },

    nextRound({ dispatch, commit, state }) {
    
      commit('setObjectValue', { path: 'indexes', value: [] })
      commit('setObjectValue', { path: 'itteration', value: 0 })
      commit('setObjectValue', { path: 'clickCount', value: 0 })
      commit('setObjectValue', { path: 'round', value: state.round + 1 })
      commit('setObjectValue', { path: 'inGame', value: true })
      commit('setObjectValue', { path: 'isCanClick', value: false })

      const gameArr = Array(state.round).fill(false).map(() => getRandom(0, 3))
      commit('setObjectValue', { path: 'indexes', value: gameArr })
      dispatch('gameRound')

    },

    gameRound({ commit, state, dispatch }) {
      const { indexes, itteration, currentLevel, levelValues, colors } = state
      const disabledColors = colors.map(c => ({ ...c, active: false }))

      commit('setObjectValue', { path: 'colors', value: disabledColors })
      commit('setObjectValue', { path: 'canClick', value: false })

      if(itteration < indexes.length) {

        new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, levelValues[currentLevel.toLocaleLowerCase()])
        }).then(() => {

          commit('changeActive', indexes[itteration])
          commit('setObjectValue', { path: 'itteration', value: itteration + 1 })
          
          return new Promise(resolve => {
            setTimeout(() => {
              resolve()
            }, levelValues[currentLevel.toLocaleLowerCase()])
          }).then(() => dispatch('gameRound'))

        })

      } else {
        commit('setObjectValue', { path: 'isCanClick', value: true })
      }
    },

    checkColor({ dispatch, commit, state }, index) {

      commit('setObjectValue', { path: 'clickCount', value: ++state.clickCount })

      if(state.clickCount <= state.indexes.length && state.isCanClick) {
        if(state.indexes[state.clickCount - 1] !== index) {
          commit('setObjectValue', { path: 'inGame', value: false })
          commit('setObjectValue', { path: 'indexes', value: [] })
          commit('setObjectValue', { path: 'round', value: 0 })
          commit('setObjectValue', { path: 'isPopUp', value: true })
        } else if(state.clickCount === state.indexes.length && state.indexes[state.clickCount - 1] === index) {
          commit('setObjectValue', { path: 'score', value: state.score + state.clickCount })
          dispatch('nextRound')
        }
      }

    }
  }
});
