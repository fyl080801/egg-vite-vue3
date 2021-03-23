<!-- import Vue from 'vue'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'
import './index.scss'

import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import SizeSelect from '@/components/SizeSelect'
import Screenfull from '@/components/Screenfull'
import Help from '@/components/Help'


export default Vue.extend({
  name: 'Navbar',
  components: { Hamburger, Breadcrumb, SizeSelect, Screenfull, Help },
  computed: {
    sidebar() {
      return AppModule.sidebar
    },
    device() {
      return AppModule.device.toString()
    },
    avatar() {
      return AvatarUri // UserModule.avatar
    }
  },
  methods: {
    toggleSideBatoggleSideBarr() {
      AppModule.ToggleSideBar(false)
    },
    async logout() {
      try {
        await this.$confirm('是否退出?')
        await UserModule.LogOut()
      } catch {
        console.log('cancel')
      }
    }
  },
  render() {
    return (
      <div class="navbar">
        {/* 这期先不加导航 */}
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
        <div class="right-menu">
          <help class="right-menu-item hover-effect" />

          {this.device !== 'mobile' ? (
            <fragment>
              {/* <header-search class="right-menu-item" /> */}
              {/* <error-log class="errLog-container right-menu-item hover-effect" /> */}
              <screenfull class="right-menu-item hover-effect" />
              <el-tooltip content="设置界面尺寸" effect="dark" placement="bottom">
                <size-select class="right-menu-item hover-effect" />
              </el-tooltip>
              {/* <lang-select class="right-menu-item hover-effect" /> */}
            </fragment>
          ) : null}
        </div>
      </div>
    )
  }
}) -->

<script lang="ts" setup>
import { computed } from 'vue';
import Hamburger from '@/components/Hamburger';
import Screenfull from '@/components/Screenfull';
import Help from '@/components/Help';
// import SizeSelect from '@/components/SizeSelect';
import { useStore, DeviceType } from '@/store/app';
import AvatarUri from '@/assets/images/avatar.gif';

const {
  state,
  actions: { toggleSideBar },
} = useStore();

const avatar = computed(() => {
  return `${AvatarUri}?imageView2/1/w/80/h/80`; // UserModule.avatar
});

const commands = {
  logout: async () => {},
};

const onAccountCommand = (command) => {
  (commands[command] || (() => {}))();
};
</script>

<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :is-active="state.sidebar.opened"
      @toggle-click="toggleSideBar(false)"
    ></hamburger>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
    <div class="right-menu">
      <template v-if="state.device !== DeviceType.Mobile">
        <help class="right-menu-item hover-effect"></help>
        <screenfull class="right-menu-item hover-effect" />
        <!-- <el-tooltip content="设置界面尺寸" effect="dark" placement="bottom">
          <size-select class="right-menu-item hover-effect" />
        </el-tooltip> -->
        <el-dropdown
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
          @command="onAccountCommand"
        >
          <div class="avatar-wrapper">
            <img :src="avatar" class="user-avatar" />
            <i class="el-icon-caret-bottom" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <router-link to="/profile/">
                <el-dropdown-item>{$t('navbar.profile')}</el-dropdown-item>
              </router-link> -->

              <el-dropdown-item>Hi, User</el-dropdown-item>

              <router-link to="/">
                <el-dropdown-item icon="el-icon-s-home">
                  首页
                </el-dropdown-item>
              </router-link>

              <!-- <a
                target="_blank"
                href="https://github.com/armour/vue-typescript-admin-template/"
              >
                <el-dropdown-item>{$t('navbar.github')}</el-dropdown-item>
              </a> -->
              <!-- <a
                target="_blank"
                href="https://armour.github.io/vue-typescript-admin-docs/"
              >
                <el-dropdown-item>Docs</el-dropdown-item>
              </a> -->

              <el-dropdown-item
                divided
                icon="el-icon-switch-button"
                command="logout"
              >
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
