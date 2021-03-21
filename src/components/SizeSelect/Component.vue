<!-- import Vue from 'vue'
import { AppModule } from '@/store/modules/app'

export default Vue.extend({
  methods: {
    handleSetSize(size: string) {
      ;(this as any).$ELEMENT.size = size
      AppModule.SetSize(size)
      this.refreshView()
      this.$message({
        message: '切换成功',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      // TagsViewModule.delAllCachedViews()
      const { fullPath } = this.$route
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  },
}) -->
<script lang="ts" setup>
import { nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { app } from '../../store/index';

const { fullPath } = useRoute();
const { size } = app.getState();
const router = useRouter();

const sizeOptions = [
  { label: '巨大', value: 'default' },
  { label: '适中', value: 'medium' },
  { label: '小', value: 'small' },
  { label: '极小', value: 'mini' },
];

const refreshView = () => {
  // In order to make the cached page re-rendered
  // TagsViewModule.delAllCachedViews()
  nextTick(() => {
    router.replace({
      path: `/redirect${fullPath}`,
    });
  });
};

const handleSetSize = () => {
  // (this as any).$ELEMENT.size = size;
  app.setSize(size);
  refreshView();
  // this.$message({
  //   message: '切换成功',
  //   type: 'success',
  // });
};
</script>

<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <svg-icon :icon-class="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in sizeOptions"
          :key="item.value"
          :disabled="size === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
