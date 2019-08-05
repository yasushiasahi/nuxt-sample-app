<template>
  <main class="StMainBlock">
    <div class="column">
      <div class="column_left"><slot name="left" /></div>
      <div class="column_right"><slot name="right" /></div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.StMainBlock {
  width: 100%;
  max-width: 1000px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.column {
  display: flex;
  flex-wrap: wrap;
  &_left {
    border-right: 0.5px solid #ddd;
  }
  &_right {
    border-left: 0.5px solid #ddd;
  }
  &_left,
  &_right {
    width: 50%;
    > .SubBlock {
      padding: 30px;
      border-top: 0.5px solid #ddd;
      border-bottom: 0.5px solid #ddd;
      &:first-child {
        border-top: none;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
