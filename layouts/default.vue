<template>
  <v-app dark>
    <NavBar @open-search="dialog=true"></NavBar>
    <v-layout>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
    <Search :open="dialog" @close="dialog = false"></Search>
  </v-app>
</template>

<script setup>
const dialog = ref(false)
</script>

<style>
</style>
