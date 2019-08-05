<template>
  <div>
    <StHeader />
    <nuxt />
    <StFooter />
  </div>
</template>

<script>
import StHeader from '@/components/molecules/StHeader.vue'
import StFooter from '@/components/molecules/StFooter.vue'

export default {
  components: {
    StHeader,
    StFooter
  }
}
</script>
