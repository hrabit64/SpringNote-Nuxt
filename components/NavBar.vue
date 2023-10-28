

<template>
  <v-app-bar :elevation="0" fixed app class="justify-center align-content-end px-5 nanumsquare-bold py-2" color="#121212">
    <!--      title-->
    <v-img
        class="mx-2"
        src="/image/logo.svg"
        max-height="40"
        max-width="40"
        contain
        alt="logo"
    ></v-img>
    <!--      title end-->

    <v-spacer></v-spacer>
    <!--      menu  start-->

    <NuxtLink to="/" class="text-primary nanumsquare-bold mx-2" style="text-decoration-line:none">
      홈
    </NuxtLink>

    <NuxtLink to="/posts" class="text-primary nanumsquare-bold mx-2" style="text-decoration-line:none">
      전체 글
    </NuxtLink>

    <v-btn small icon class="mx-2" @click="openSearch">
      <v-icon color="primary">mdi-magnify</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >검색하기
      </v-tooltip>
    </v-btn>

    <!--      menu  end-->
  </v-app-bar>
</template>
<script setup lang="ts">
const emit = defineEmits(['openSearch'])
const openSearch = () => {
  emit('openSearch')
}
</script>

<style scoped>

</style>