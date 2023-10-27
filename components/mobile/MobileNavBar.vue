<template>
  <v-app-bar :elevation="0" color="#121212" fixed app class="justify-center align-content-end nanumsquare-bold" height="48">
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

    <v-btn small icon class="mx-2">
      <v-icon color="primary">mdi-magnify</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >검색하기
      </v-tooltip>
    </v-btn>

    <v-btn small icon class="mx-2">
      <v-icon color="primary" @click="goToGithub()">mdi-login</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >로그인하기
      </v-tooltip>
    </v-btn>

    <v-btn small icon class="mx-2" @click.stop="toggleBottomMenu()">
      <v-icon color="primary">mdi-menu</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >메뉴
      </v-tooltip>
    </v-btn>
    <!--      menu  end-->
  </v-app-bar>

  <v-navigation-drawer
      v-model="openBottomMenu"
      location="bottom"
      temporary
      class="text-center"
  >
    <v-list-item><v-icon class="mr-2  text-primary">mdi-home</v-icon> 메인페이지 </v-list-item>
    <v-divider></v-divider>
    <v-list-item><v-icon class="mr-2  text-primary">mdi-note-multiple</v-icon> 전체 글 </v-list-item>
    <v-divider></v-divider>
    <v-list-item><v-icon class="mr-2  text-primary">mdi-tag-multiple</v-icon> 전체 시리즈 </v-list-item>
    <v-divider></v-divider>
    <v-list-item><v-icon class="mr-2  text-primary">mdi-information</v-icon> ABOUT </v-list-item>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import {useRuntimeConfig} from "nuxt/app";
import {ref} from "vue";

const runtimeConfig = useRuntimeConfig();

const goToGithub = () => {
  // window.open(runtimeConfig.public.selfGitHubUrl, '_blank')
}

//페이지 관련
const nowPage = ref("/")

//모바일용 tab
const openBottomMenu = ref(false)
const toggleBottomMenu = () => {
  openBottomMenu.value = !openBottomMenu.value
}
</script>
<style scoped>

</style>