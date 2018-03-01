<template lang="html">
  <div :class="['form-group label-floating', { 'is-empty': val.length == 0 }, { 'is-focused': isFocused }]">
    <label class="control-label">{{ label }}</label>
    <input ref="el" @focus="toggleFocus" @focusout="toggleFocus" class="form-control" v-model="val">
    <span class="material-input"></span>
  </div>
</template>

<script>
export default {

  name: 'Input',

  data: () => ({
    isFocused: false
  }),

  props: {
    label: {
      required: true
    },
    value: {
      required: true,
      default: ''
    },
    type: {
      default: 'text'
    }
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
  },

  methods: {
    toggleFocus() {
      this.isFocused = !this.isFocused
    }
  },

  mounted() {
    this.$refs.el.type = this.type
  }
}
</script>
