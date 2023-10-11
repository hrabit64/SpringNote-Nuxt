<template>
  <v-app dark>
    <NavBar></NavBar>
    <v-layout>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
    <DefaultFooter></DefaultFooter>
  </v-app>
</template>

<script setup>
</script>

<style>
html {
  overflow-y: auto
}
</style>
