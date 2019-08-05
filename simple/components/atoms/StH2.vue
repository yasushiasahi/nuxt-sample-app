<template>
  <h2 :class="['StH2', { required }]"><slot /></h2>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.StH2 {
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #333333;
  position: relative;
  margin-bottom: 16px;
  &.required::after {
    position: absolute;
    bottom: calc(50% - 18px);
    content: '*';
    color: #c53053;
    font-size: 2em;
  }
}
</style>
