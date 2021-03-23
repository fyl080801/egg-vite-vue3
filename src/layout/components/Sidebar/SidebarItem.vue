<!-- import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import { isExternal } from '@/utils/validate'
import path from 'path'
import './SidebarItem.scss'
import SidebarItemLink from './SidebarItemLink'

export default Vue.extend({
  name: 'SidebarItem',
  components: { SidebarItemLink },
  props: {
    item: { type: Object, required: true },
    isCollapse: { type: Boolean, default: false },
    isFirstLevel: { type: Boolean, default: true },
    basePath: { type: String, default: '' }
  },
  computed: {
    
  },
  methods: {
    
  },
  render() {
    return (
      <fragment>
        {!this.item.hidden ? (
          <div
            class={[
              this.isCollapse ? 'simple-mode' : 'full-mode',
              { 'first-level': this.isFirstLevel }
            ]}
          >
            {!this.alwaysShowRootMenu && this.theOnlyOneChild && !this.theOnlyOneChild.children ? (
              this.theOnlyOneChild ? (
                
              ) : null
            ) : (
              
            )}
          </div>
        ) : null}
      </fragment>
    )
  }
}) -->
<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { isExternal } from '../../../utils/validate';
import { resolve } from '../../../utils/pathResolve';
import SidebarItemLink from './SidebarItemLink.vue';

const { item, basePath, isCollapse, isFirstLevel } = defineProps({
  item: { type: Object, required: true },
  basePath: { type: String, default: '' },
  isCollapse: { type: Boolean, default: false },
  isFirstLevel: { type: Boolean, default: true },
});

const alwaysShowRootMenu = computed(() => {
  if (item.alwaysShow) {
    return true;
  }
  return false;
});

const showingChildNumber = computed<number>(() => {
  if (item.children) {
    const showingChildren = item.children.filter((item: any) =>
      item.hidden ? false : true
    );
    return showingChildren.length;
  }
  return 0;
});

const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  if (item.children) {
    for (const child of item.children) {
      if (!child.hidden) {
        return child;
      }
    }
  }
  // If there is no children, return itself with path removed,
  // because this.basePath already conatins item's path information
  return { ...item, path: '' };
});

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(basePath)) {
    return basePath;
  }
  return resolve(basePath, routePath);
};
</script>

<template>
  <div
    v-if="!item.hidden"
    :class="[
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel },
    ]"
  >
    <sidebar-item-link
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
      :to="resolvePath(theOnlyOneChild.path)"
    >
      <el-menu-item
        :index="resolvePath(theOnlyOneChild.path)"
        :class="{
          'submenu-title-noDropdown': isFirstLevel,
        }"
      >
        <svg-icon
          v-if="theOnlyOneChild.icon"
          :icon-class="theOnlyOneChild.icon"
        />
        <span v-if="theOnlyOneChild.title" slot="title">
          {{ theOnlyOneChild.title }}
        </span>
      </el-menu-item>
    </sidebar-item-link>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <div slot="title">
        <svg-icon v-if="item.icon" :icon-class="item.icon" />
        <span v-if="item.title" slot="title">
          {{ !isCollapse ? item.title : null }}
        </span>
      </div>
      <sidebar-item
        v-for="child in item.children || []"
        :key="child.path"
        :item="child"
        :is-collapse="isCollapse"
        :is-first-level="false"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<style lang="scss">
@import './SidebarItem.scss';
</style>
