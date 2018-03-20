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
			<transition-group tag="div" class="tab-content" :name="transitionName">
				<div v-for="(tab,idx) in tabs" :class="['tab-pane', { active: active == tab }]" v-show="active == tab" :key="idx" :id="tab" role="tabpanel" data-mh="log-tab">
					<slot :name="`content-${tab}`"></slot>
				</div>
			</transition-group>
		</div>

	</div>
</template>

<script>
export default {

  name: 'Tabs',

  data() {
    return {
      active: this.tabs[0],
      transitionName: ''
    }
  },

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  watch: {
    active(val, oldVal) {
      this.transitionName = this.tabs.indexOf(val) > this.tabs.indexOf(oldVal) ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
<style>

.slide-left-enter-active {
  transition: all .1s ease;
}
.slide-left-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.slide-left-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-right-enter-active {
  transition: all .1s ease;
}
.slide-right-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-right-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-right-enter {
  transform: translateX(100px);
  opacity: 0;
}

</style>
