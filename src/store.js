import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emails: []
  },
  mutations: {
    TOGGLE_STAR(state, emailId) {
      state.emails[emailId].starred = !state.emails[emailId].starred
    },
    TOGGLE_IN_TRASH(state, emailId) {
      state.emails[emailId].inTrash = !state.emails[emailId].inTrash
      state.emails[emailId].starred = false
    },
    FEED_EMAILS(state) {
      let id
      let emailObject
      fetch('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
          return response.json()
        })
        .then(function (myJson) {
          id = state.emails.length
          state.emails.push({
            id: id,
            from: "Chuck Norris",
            subject: "Another Chuck Norris joke",
            content: myJson.value,
            starred: false,
            inTrash: false,
            unRead: true,
          })
        })
      
      // state.emails.push(emailObject)
    }
  },
  actions: {
    // getNewJoke(context) {
    //   context.commit('FEED_EMAILS')
    // }
  },
  getters: {
    totalEmailsNumber: state => {
      return state.emails.length
    },
    totalEmailsInboxNumber: state => {
      return state.emails.filter(email => !email.inTrash).length
    },
    totalStarredEmailsNumber: state => {
      return state.emails.filter(email => email.starred).length
    },
    totalInTrashEmailsNumber: state => {
      return state.emails.filter(email => email.inTrash).length
    },


    emailsInbox: state => {
      return state.emails.filter(email => !email.inTrash)
    },
    emailsInTrash: state => {
      return state.emails.filter(email => email.inTrash)
    },
    emailsInStarred: state => {
      return state.emails.filter(email => email.starred)
    },
  }
})
