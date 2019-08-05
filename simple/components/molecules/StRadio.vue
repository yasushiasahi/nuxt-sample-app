<template>
  <label :class="['StRadio', { checked }]">
    <input class="input" type="radio" v-bind="attributes" v-on="$listeners" />
    <span class="circle" />
    <span class="label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  heritAttrs: false,
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    },
    model: {
      required: true,
      type: String
    }
  },
  computed: {
    checked() {
      const { value, model } = this
      return value === model
    },
    attributes() {
      const { $attrs, value, checked } = this
      return { ...$attrs, checked, value }
    }
  }
}
</script>

<style lang="scss" scoped>
.StRadio {
  width: 210px;
  height: 52px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  border: 1px solid #dddddd;
  cursor: pointer;
  &.checked {
    background: #f9dde2;
    border: 1px solid #f9dde2;
    .circle {
      visibility: visible;
    }
  }
}
.circle {
  visibility: hidden;
  width: 20px;
  height: 20px;
  display: inline-block;
  background: #d13553;
  border: 6px solid #ffffff;
  border-radius: 18px;
  box-sizing: content-box;
}
.label {
  display: block;
  flex-grow: 1;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
}
.input {
  display: none;
}
</style>
