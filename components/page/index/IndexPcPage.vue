<template>
  <v-container class="h-100 fluid d-flex" v-motion-slide-left>
    <v-row class="align-center justify-center mt-10">

<!--      title start-->
      <v-col cols="4">
        <v-sheet width="100%" height="100%" class="bg-transparent py-xl-15 px-xl-10 py-lg-10 px-lg-4">
          <v-card-item>
            <v-row>
              <v-col cols="12" class="align-end mt-15">
                <h1 class="text-xl-h1 text-lg-h2 text-md-h5 gmarket-sans-bold text-left text-primary mb-2">Spring</h1>
                <h1 class="text-xl-h1 text-lg-h2 text-md-h4 gmarket-sans-bold text-left mb-1">NOTE</h1>
                <p class="text-xl-subtitle-1 text-lg-subtitle-2 gmarket-sans-light text-left">Spring을 주로 다루는 개발 블로그입니다.</p>
                <v-divider class="my-2"></v-divider>
                <v-btn class="my-2 mx-2 rounded-xl" icon href="https://github.com/hrabit64"><v-icon>mdi-github</v-icon></v-btn>
              </v-col>
              <v-col cols="12"  class="text-left">
                <v-img src="/image/title.png" max-width="400" max-height="400" ></v-img>
              </v-col>
            </v-row>
          </v-card-item>
        </v-sheet>
      </v-col>
<!--      title end-->
      <v-divider vertical></v-divider>
<!--      recent note start-->
      <v-col cols="8" class="pl-10 pt-10 align-content-start">
        <v-row>
          <v-col cols="12">
            <v-divider></v-divider>
              <v-chip size="x-large" class="mb-5" color="primary" variant="elevated">최신 포스트</v-chip>
              <PostCard type="large" :title="post.title" :thumbnail="post.thumbnail"></PostCard>

          </v-col>

          <v-col cols="12">
            <v-divider></v-divider>
            <v-chip size="x-large" class="mb-5" color="primary" variant="elevated">추천 포스트</v-chip>
            <v-row>
              <v-col cols="6">
                <PostCard></PostCard>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="6">
                <PostCard></PostCard>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
      <!--      recent note end -->
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import { motionShake } from "~/utils/motions";
import {getAllPost} from "~/api/post";
import {PropType} from "@vue/runtime-core";
import {PostResponse} from "~/utils/api-response";

const items = Array.from({ length: 6 }, (_, i) => i);

const props = defineProps({
  //list of PostResponse
  post: {
    type: Array as PropType<PostResponse[]>,
    required: true,
    default: null
  }
})



</script>

<style scoped>

</style>