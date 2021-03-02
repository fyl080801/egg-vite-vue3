<template>
  <div class="container">
    <ul class="flex space-x-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import './App.css';
</script>
