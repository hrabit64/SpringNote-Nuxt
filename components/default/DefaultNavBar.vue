

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

    <v-tabs
        v-model="activeTab"
    >
      <v-tab value="0" @click.stop="goPage('/')"><v-icon class="mr-2">mdi-home</v-icon> 홈 </v-tab>
      <v-tab value="1" @click.stop="goPage('/posts')"><v-icon class="mr-2">mdi-note-multiple</v-icon> 전체 글 </v-tab>
      <v-tab value="2"><v-icon class="mr-2">mdi-tag-multiple</v-icon> 전체 시리즈 </v-tab>
      <v-tab value="3"><v-icon class="mr-2">mdi-information</v-icon> ABOUT </v-tab>
    </v-tabs>

    <v-icon class="text-primary mx-2">mdi-slash-forward</v-icon>

    <v-btn small icon class="mx-2">
      <v-icon color="primary">mdi-magnify</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >검색하기
      </v-tooltip>
    </v-btn>

    <v-btn small icon class="mx-2">
      <v-icon color="primary" @click.stop="goPage('/login')">mdi-login</v-icon>
      <v-tooltip
          activator="parent"
          location="bottom"
      >로그인하기
      </v-tooltip>
    </v-btn>
    <!--      menu  end-->
  </v-app-bar>
</template>
<script setup lang="ts">
import {useRuntimeConfig} from "nuxt/app";
import {ref} from "vue";

const runtimeConfig = useRuntimeConfig();


//tabs
const goToGithub = () => {
  // window.open(runtimeConfig.public.selfGitHubUrl, '_blank')
}

const activeTab = ref(0);
const route = useRoute();
const router = useRouter();



if (route.path === '/') {
  activeTab.value = 0;
} else if (route.path === '/posts') {
  activeTab.value = 1;
} else if (route.path === '/series') {
  activeTab.value = 2;
} else if (route.path === '/about') {
  activeTab.value = 3;
}

const goPage = (target:string) => {
  router.push({path: target})
}

</script>
<style scoped>

</style>