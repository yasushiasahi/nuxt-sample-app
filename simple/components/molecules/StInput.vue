<template>
  <div class="PrInputText">
    <label :class="['label-wrap', size, round, { readonly }]">
      <span :class="['label', size]">{{ label }}</span>
      <input
        :class="['input', size]"
        type="text"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </label>
  </div>
</template>

<script>
export default {
  heritAttrs: false,
  props: {
    label: {
      required: true,
      type: String
    },
    size: {
      type: String,
      default: 'thick'
    },
    round: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    readonly() {
      return this.$attrs.hasOwnProperty('readonly')
    }
  }
}
</script>

<style lang="scss" scoped>
.label-wrap {
  background-color: #fff;
  border: 1px solid #ced6dc;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &.thick {
    height: 60px;
    flex-wrap: wrap;
  }
  &.middle {
    height: 50px;
  }
  &.thin {
    height: 40px;
  }
  &.all {
    border-radius: 5px;
  }
  &.top {
    border-radius: 5px 5px 0px 0px;
    border-bottom-width: 0.5px;
  }
  &.bottom {
    border-radius: 0px 0px 5px 5px;
    border-top-width: 0.5px;
  }
  &.readonly {
    border: none;
    background: #edf0f6;
  }
}
.label {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #8899ad;
  &.thick {
    width: 100%;
  }
  &.middle,
  &.thin {
    padding-right: 15px;
  }
}
.input {
  outline: none;
  flex-grow: 1;
  &.thick {
    padding-bottom: 5px;
  }
}
</style>
