<!-- import Vue from 'vue'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'
import './index.scss'

import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import SizeSelect from '@/components/SizeSelect'
import Screenfull from '@/components/Screenfull'
import Help from '@/components/Help'
import AvatarUri from '@/assets/images/avatar.gif'

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
    toggleSideBar() {
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
        <hamburger
          id="hamburger-container"
          isActive={this.sidebar.opened}
          class="hamburger-container"
          onToggleClick={this.toggleSideBar}
        />
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

          <el-dropdown
            class="avatar-container right-menu-item hover-effect"
            trigger="click"
            onCommand={command => {
              ;(this[command] || (() => {}))()
            }}
          >
            <div class="avatar-wrapper">
              <img src={this.avatar + '?imageView2/1/w/80/h/80'} class="user-avatar" />
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown">
              {/* <router-link to="/profile/">
                <el-dropdown-item>{$t('navbar.profile')}</el-dropdown-item>
              </router-link> */}
              <el-dropdown-item>Hi, {UserModule.name}</el-dropdown-item>
              <router-link to="/">
                <el-dropdown-item icon="el-icon-s-home">首页</el-dropdown-item>
              </router-link>
              {/* <a
                target="_blank"
                href="https://github.com/armour/vue-typescript-admin-template/"
              >
                <el-dropdown-item>{$t('navbar.github')}</el-dropdown-item>
              </a> */}
              {/* <a
                target="_blank"
                href="https://armour.github.io/vue-typescript-admin-docs/"
              >
                <el-dropdown-item>Docs</el-dropdown-item>
              </a> */}
              <el-dropdown-item divided icon="el-icon-switch-button" command="logout">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    )
  }
}) -->

<script lang="ts" setup>
import Hamburger from '../../../components/Hamburger';
import Screenfull from '../../../components/Screenfull';
import SizeSelect from '../../../components/SizeSelect';
import { app } from '../../../store';
import { DeviceType } from '../../../store/app';

const appStore = app.useStore();
</script>

<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      :is-active="appStore.sidebar.opened"
      @toggle-click="appStore.toggleSideBar(false)"
    ></hamburger>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
    <div class="right-menu">
      <template v-if="appStore.device !== DeviceType.Mobile">
        <screenfull class="right-menu-item hover-effect" />
        <el-tooltip content="设置界面尺寸" effect="dark" placement="bottom">
          <size-select class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
