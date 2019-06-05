<template>
  <div class="Emails">
    <div class="email" v-for="(email) in list" :key="email.id">
      <img v-if="email.starred" @click="toggleStar(email.id)" src="../assets/star-border-yellow.svg" width="21" height="21">
      <img v-else @click="toggleStar(email.id)" src="../assets/star-border-icon.svg" width="21" height="21">
      <span>{{email.from}}</span>
      <svg @click="toggleInTrash(email.id)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#777"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'email-list',
  props: {
    list: Array,
  },
  data() {
    return {}
  },
  methods: {
    toggleStar(emailId) {
      this.$store.commit('TOGGLE_STAR', emailId)
    },
    toggleInTrash(emailId) {
      this.$store.commit('TOGGLE_IN_TRASH', emailId)
    },
  },
}
</script>

<style scoped lang="scss">
.Emails {
  width: calc(100vw - 129px);
  .email {
    padding: 10px 20px;
    background-color: #f4f7f7;
    border-bottom: solid 1px #e4e8eb;
    color: #333;
    font-size: 14px;

    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 10px;
    }
    &:hover {
      border-bottom: solid 1px #ccc;
      border-left: solid 1px #ccc;
      border-right: solid 1px #ccc;
      border-top: solid 1px #ccc;
    }
  }
}
</style>
