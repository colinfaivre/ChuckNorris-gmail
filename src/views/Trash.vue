<template>
  <EmailList :list="emailsInTrash"></EmailList>
</template>

<script>
import EmailList from '@/components/EmailList.vue'
export default {
  name: 'inbox',
  components: {
    EmailList,
  },
  computed: {
    emailsInTrash() {
      return this.$store.getters.emailsInTrash
    },
  },
}
</script>