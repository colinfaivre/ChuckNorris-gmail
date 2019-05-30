<template>
  <div class="RightBar">
    <a class="icon-container" href="https://calendar.google.com/calendar/r" target="_blank">
      <img class="agenda-icon" alt="Google Agenda Icon" src="../assets/agenda-icon.png" width="20px">
    </a>
    <a class="icon-container" href="https://keep.google.com/u/0/" target="_blank">
      <img class="keep-icon" alt="Google Keep Icon" src="../assets/keep-icon.png" width="20px">
    </a>
    <a class="icon-container" href="https://support.google.com/a/users/answer/9308887" target="_blank">
      <img class="task-icon" alt="Google Task Icon" src="../assets/task-icon.png" width="20px">
    </a>
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.RightBar {
  width: 55px;
  height: calc(100vh - 75px);
  background-color: white;
  border-left: 1px solid #f1f3f4;
  padding-top: 9px;

  display: flex;
  align-items: center;
  flex-direction: column;

  .icon-container {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-bottom: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f1f3f4;
      cursor: pointer;
    }
  }
}
</style>
