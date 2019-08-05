<template>
  <button :class="['StButton', type]" v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.StButton {
  border-radius: 50px;
  letter-spacing: 0.01em;
  font-weight: bold;
  &.submit {
    width: 370px;
    height: 74px;
    line-height: 74px;
    font-size: 18px;
    background: #8aa5ef;
    color: #fff;
  }
  &.action {
    width: 220px;
    height: 40px;
    line-height: 40px;
    background: #dddddd;
    border-radius: 50px;
    font-size: 14px;
    color: #000000;
  }
}
</style>
