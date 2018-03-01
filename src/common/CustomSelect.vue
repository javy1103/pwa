<template lang="html">
  <div @click="show = true" class="form-group label-floating is-select">
    <label class="control-label">Your Gender</label>
    <div :class="['btn-group bootstrap-select form-control', { show }]">
      <button type="button" class="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" :title="options[selected]" :aria-expanded="show">
        <span class="filter-option pull-left">{{ options[selected] }}</span>
        &nbsp;
        <span class="bs-caret">
          <span class="caret"></span>
        </span>
      </button>
      <div class="dropdown-menu open" role="combobox">
        <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">

          <li v-for="(label, val, idx) in options" :data-original-index="idx" :key="idx" :class="[{selected: val == selected}]">
            <a @click="select(val)" tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" :aria-selected="val == selected">
              <span class="text">{{ label }}</span>
              <span class="glyphicon glyphicon-ok check-mark"></span>
            </a>
          </li>

        </ul>
      </div>
      <select class="selectpicker form-control" tabindex="-98">
        <option value="MA">Male</option>
        <option value="FE">Female</option>
      </select>
    </div>
    <span class="material-input"></span>
  </div>
</template>
<script>

export default {

  name: 'Custom-Select',

  data: () => ({
    show: false
  }),

  props: {
    options: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    },

    value: {
      required: true
    }
  },

  watch: {
    show(show) {
      if (show) {
        window.addEventListener('click', this.clickOutEvent)
      } else {
        window.removeEventListener('click', this.clickOutEvent)
      }
    }
  },

  computed: {
    selected: {
      get() {
        return this.value
      },

      set(val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    clickOutEvent(evt) {
      if (evt.target !== this.$el && !this.$el.contains(evt.target)) {
        this.$emit('clickOut', evt)
      }
    },

    select(val) {
      this.selected = val
      setTimeout(() => this.$emit('clickOut'), 100)
    }
  },

  mounted() {
    this.$on('clickOut', () => this.show = false)
  }
}
</script>
