<template>
  <div class="TopBar">
    <div class="topbar-left">
      <div class="icon-container" @click="$emit('toggle-menu')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23">
          <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" fill="#606368"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <img class="gmail-icon" alt="Gmail Icon" src="../assets/gmail-icon.png">
    </div>

    <div class="topbar-right">
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#606368" focusable="false">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
        </svg>
      </div>

      <div class="icon-container">
        <svg focusable="false" width="24px" height="24px" viewBox="0 0 24 24" fill="#606368">
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
      </div>

      <div class="icon-container">
        <img class="profile-image" alt="Profile Image" src="../assets/chuck-norris.jpg">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.TopBar {
  width: calc(100% - 36px);
  padding-left: 18px;
  padding-right: 18px;
  height: 64px;
  border-bottom: 1px solid #f1f3f4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  .topbar-left, .topbar-right {
    display: flex;
    align-items: center;
  }

  .profile-image {
    border-radius: 50px;
    width: 32px;
  }

  .icon-container {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f1f3f4;
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0px;
    }
  }

  .gmail-icon {
    cursor: pointer;
    margin-top: 4px;
  }

}
</style>
