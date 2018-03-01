<template lang="html">
  <vue-datepicker v-model="val"></vue-datepicker>
</template>
<script>
import vueDatepicker from 'vuejs-datepicker'

export default {

  name: 'datepicker',

  props: {
    value: {
      default: function() {
        return new Date()
      }
    }
  },

  components: {
    vueDatepicker
  },

  computed: {
    val: {
      get() {
        return this.value
      },

      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
  .vdp-datepicker__calendar {
    font-size: small;
    .cell.selected {
      border-radius: 50%;
    }
  }
</style>
