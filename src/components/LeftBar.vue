<template>
  <!-- <div :class="{'LeftBar': true, 'opened-menu': menuIsOpened}" @mouseover="$emit('open-menu')" @mouseout="$emit('close-menu')"> -->
  <div :class="{'LeftBar': true, 'opened-menu': menuIsOpened}">
    <div class="add-icon-container">
      <img src="../assets/add-icon.svg" alt="" width="25" height="25">
      <span class="add-icon-text" v-show="menuIsOpened">Compose</span>
    </div>

    <div @click="$router.push({ name: 'inbox'})" :class="{'icon-container': true, 'icon-container-opened': menuIsOpened}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" fill="#777"/>
        <path fill="none" d="M0 0h24v24H0V0z"/>
      </svg>
      <span class="icon-text" v-show="menuIsOpened">Inbox {{ totalEmailsInboxNumber || "" }}</span>
    </div>
  
    <div @click="$router.push({ name: 'starred' })" :class="{'icon-container': true, 'icon-container-opened': menuIsOpened}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#777"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <span class="icon-text" v-show="menuIsOpened">Starred {{ totalStarredEmailsNumber || "" }}</span>
    </div>
  
    <div :class="{'icon-container': true, 'icon-container-opened': menuIsOpened}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#777"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <span class="icon-text" v-show="menuIsOpened">Sent</span>
    </div>

    <div @click="$router.push({ name: 'trash'})" :class="{'icon-container': true, 'icon-container-opened': menuIsOpened}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#777"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <span class="icon-text" v-show="menuIsOpened">Trash {{ totalInTrashEmailsNumber || "" }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  props: {
    menuIsOpened: Boolean
  },
  data() {
    return {

    }
  },
  computed: {
    totalEmailsInboxNumber() {
      return this.$store.getters.totalEmailsInboxNumber
    },
    totalStarredEmailsNumber() {
      return this.$store.getters.totalStarredEmailsNumber
    },
    totalInTrashEmailsNumber() {
      return this.$store.getters.totalInTrashEmailsNumber
    }
  }
}
</script>

<style scoped lang="scss">
.LeftBar {

  width: 74px;
  height: calc(100vh - 75px);
  background-color: white;
  border-right: 1px solid #f1f3f4;

  display: flex;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  .add-icon-container {
    height: 36px;
    min-width: 36px;
    border-radius: 36px;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;

    background-color: #fafafb;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149);
    }
  }

  .icon-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-bottom: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f1f3f4;
      cursor: pointer;
    }
    &-opened {
      border-radius: 0 14px 14px 0;
      width: 95%;
      justify-content: flex-start;
      svg {
        margin-left: 27px;
      }
    }
  }

}
.opened-menu {
  width: 255px;
  align-items: flex-start;
  .add-icon-container {
    margin-left: 7px;
    width: 120px;
    justify-content: flex-start;
    padding-left: 18px;
  }
}
.add-icon-text {
  margin-left: 14px;
  margin-right: 10px;
  letter-spacing: 0.2px;
  font-size: 14px;
  font-weight: 500;
  color: #3c4043;
}
.icon-text {
  margin-left: 18px;
  margin-right: 10px;
  letter-spacing: 0.2px;
  font-size: 14px;
  font-weight: 300;
  color: #3c4043;
}
</style>
