<template lang="html">
  <div>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="(tab, idx) in tabs" class="nav-item">
        <a @click="active = tab" :class="['nav-link', { active: active == tab }]" data-toggle="tab" :href="`#${tab}`" role="tab">
          <slot :name="tab"></slot>
        </a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div v-for="tab in tabs" :class="['tab-pane', { active: active == tab }]" :id="tab" role="tabpanel" data-mh="log-tab">
        <slot :name="`content-${tab}`"></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  name: 'Tabs',

  data() {
    return {
      active: this.tabs[0]
    }
  },

  props: {
    tabs: {
      type: Array,
      required: true
    }
  }

}
</script>
