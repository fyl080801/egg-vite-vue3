<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue';
import * as sf from 'screenfull';

let isFullscreen = false;

const click = () => {
  if (!sf.isEnabled) {
    // this.$message({
    //   message: '浏览器不支持全屏',
    //   type: 'warning',
    // });
    return false;
  }
  sf.toggle();
};

const change = () => {
  if (sf.isEnabled) {
    isFullscreen = sf.isFullscreen;
  }
};

onMounted(() => {
  if (sf.isEnabled) {
    sf.on('change', change);
  }
});

onBeforeUnmount(() => {
  if (sf.isEnabled) {
    sf.off('change', change);
  }
});
</script>

<template>
  <div id="screenfull">
    <svg-icon
      :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="click"
    ></svg-icon>
  </div>
</template>
