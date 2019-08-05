<template>
  <p :class="['StAnnotation', color]"><slot /></p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.StAnnotation {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #333333;
  position: relative;
  padding-left: 1em;
  font-weight: bold;
  &::before {
    content: '※';
    position: absolute;
    bottom: calc(50% - 9px);
    left: 0;
    font-size: 1.5em;
  }
  &.red {
    color: #c53053;
  }
}
</style>
