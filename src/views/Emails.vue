<template>
  <div class="Emails">
    <div class="email" v-for="(email, index) in emails" :key="index">
      <img v-if="email.starred" @click="email.starred = !email.starred" src="../assets/star-border-icon.svg" width="21" height="21">
      <img v-else @click="email.starred = !email.starred" src="../assets/star-border-yellow.svg" width="21" height="21">
      <span>{{email.from}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'emails',
  components: {
  },
  data() {
    return {
      emails: [
        {
          from: "Marine Carboni",
          starred: true
        },
        {
          from: "Astor Carboni",
          starred: false
        },
        {
          from: "Minette Faivre",
          starred: true
        },
        {
          from: "Didi Blackos",
          starred: false
        },
      ]
    }
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

