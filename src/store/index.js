import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as universeApi from "../api/universities.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      phone: '',
      email: '',
      password: '',
      loggedIn: false,
    },
    universities: {
      all: [],
      my: [],
    },
  },
  getters: {
    userName: state => {
      return state.user.name;
    },
    userPhone: state => {
      return state.user.phone;
    },
    userEmail: state => {
      return state.user.email;
    },
    userPassword: state => {
      return state.user.password;
    },
    userAuth: state => {
      return state.user.loggedIn;
    },
    allUniversities: state => {
      return state.universities.all;
    },
    myUniversities: state => {
      return state.universities.my;
    }
  },
  mutations: {
    setUserName (state, name) {
      state.user.name = name;
      window.localStorage.setItem('UserName', name);
    },
    setUserPhone(state, phone) {
      state.user.phone = phone;
      window.localStorage.setItem('UserPhone', phone);
    },
    setUserEmail (state, email) {
      state.user.email = email;
      window.localStorage.setItem('UserEmail', email);
    },
    setUserPassword (state, password) {
      state.user.password = password;
      window.localStorage.setItem('UserPassword', password);
    },
    logout(state) {
      state.user.loggedIn = false;
      state.universities.my = [];
      localStorage.clear();
      router.push('/login');
    },
    setUserAuth (state, status) {
      state.user.loggedIn = status;
    },
    setUniversities(state, data) {
      data.forEach((universe, i) => {
        universe.url = universe.name.replace(/ /g,'-').toLowerCase();
        universe.imageURL = `https://picsum.photos/id/${i}/200/300`;
      });
      state.universities.all = data;
    },
    setMyUniversities(state, data) {
      data.forEach(universe => {
        universe.url = universe.name.replace(/ /g,'-').toLowerCase();
      });
      state.universities.my = data;
    },
    addMyUniversity(state, data) {
      data.url = data.name.replace(/ /g,'-').toLowerCase();
      state.universities.my.unshift(data);      
      window.localStorage.setItem('myUniversities', JSON.stringify(state.universities.my))
    },
    deleteMyUniversity(state, data) {
      state.universities.my = state.universities.my.filter(universe => universe.url !== data.url);
      window.localStorage.setItem('myUniversities', JSON.stringify(state.universities.my))
    },
  },
  actions: {
    isUserAuth({ dispatch, commit }) {
      if (!localStorage.getItem('UserEmail') && !localStorage.getItem('UserPassword')) {
        return;
      }
      commit('setUserAuth', true);
      dispatch('getUserData');
    },
    getUserData({ commit }) {
      let ls = localStorage;
      ls.getItem('UserName') ? commit('setUserName', ls.getItem('UserName')) : false;
      ls.getItem('UserPhone') ? commit('setUserPhone', ls.getItem('UserPhone')) : false;
      ls.getItem('UserEmail') ? commit('setUserEmail', ls.getItem('UserEmail')) : false;
      ls.getItem('UserPassword') ? commit('setUserPassword', ls.getItem('UserPassword')) : false;
    },
    async getUniversitiesFromUkraine({ commit }) {
      const response = await universeApi.getUniversitiesFromUkraine();
      commit('setUniversities', response);
    },
    getMyUniversities({ commit }) {
      let ls = localStorage;
      ls.getItem('myUniversities') ? commit('setMyUniversities', JSON.parse(ls.getItem('myUniversities'))) : false
    },
  },
  modules: {}
})
