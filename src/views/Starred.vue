<template>
  <EmailList :list="emailsInStarred"></EmailList>
</template>

<script>
import EmailList from '@/components/EmailList.vue'
export default {
  name: 'inbox',
  components: {
    EmailList,
  },
  computed: {
    emailsInStarred() {
      return this.$store.getters.emailsInStarred
    },
  },
}
</script>