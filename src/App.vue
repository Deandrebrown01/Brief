<script setup>

</script>



<template>

  <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/aboutPage">Search</router-link> |
  <router-link to="/searchPage">Contact Page</router-link>|
  <router-link to="/settingsPage">Settings</router-link>|

</nav>
<router-view></router-view>
</template>


<style>
body {
  background-color: #B39DDB;
}
</style>
