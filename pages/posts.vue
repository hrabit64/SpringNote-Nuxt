<template>
  <PostsPcPage v-if="!mobile"></PostsPcPage>
  <IndexMobilePage v-if="mobile"></IndexMobilePage>
</template>

<script setup lang="ts">
//모바일
import { useDisplay } from 'vuetify'
import IndexMobilePage from "~/components/page/index/IndexMobilePage.vue";
import PostsPcPage from "~/components/page/posts/PostsPcPage.vue";
const { mobile } = useDisplay()


</script>

<style scoped>
</style>

