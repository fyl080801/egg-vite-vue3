<!-- import Vue from 'vue'
import './index.scss'
import { SettingsModule } from '@/store/modules/settings'

export default Vue.extend({
  name: 'Help',
  render() {
    return (
      <div id="help" class="nav-help">
        {SettingsModule.help ? (
          <a href={SettingsModule.help} target="_blank">
            <span>帮助文档</span>
            <svg-icon name="question-circle" width="20" height="20"></svg-icon>
          </a>
        ) : null}
      </div>
    )
  }
}) -->
<script lang="ts" setup>
import { useStore } from '@/store/settings';

const { state } = useStore();
</script>

<template>
  <div id="help" class="nav-help">
    <a v-if="state.help" :href="state.help" target="_blank">
      <span>帮助文档</span>
      <svg-icon icon-class="question-circle" width="20" height="20"></svg-icon>
    </a>
  </div>
</template>

<style lang="scss">
.nav-help {
  .svg-icon {
    vertical-align: text-bottom;
    margin-left: 10px;
  }

  span {
    font-size: 1rem;
  }
}
</style>
