<template>
  <EmailList :list="emailsInbox"></EmailList>
</template>

<script>
import EmailList from '@/components/EmailList.vue'
export default {
  name: 'inbox',
  components: {
    EmailList,
  },
  computed: {
    emailsInbox() {
      return this.$store.getters.emailsInbox
    },
  },
}
</script>
