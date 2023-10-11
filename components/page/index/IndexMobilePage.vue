<template>
  <v-container class="h-100 fluid d-flex" v-motion-slide-left>
    <v-row class="align-center justify-center mt-10">

      <!--      title start-->
      <v-col cols="12">
        <v-sheet width="100%" height="100%" class="bg-transparent">
          <v-card-item>
            <v-row class="text-center">
              <v-col cols="12" class="mt-5">
                <h1 class="text-xl-h1 text-lg-h2 text-md-h5 gmarket-sans-bold text-center text-primary mb-2 d-inline">Spring</h1>
                <h1 class="text-xl-h1 text-lg-h2 text-md-h4 gmarket-sans-bold text-center mb-1 d-inline"> NOTE</h1>

                <p class="text-xl-subtitle-1 text-lg-subtitle-2 gmarket-sans-light text-center">Spring을 주로 다루는 개발 블로그입니다.</p>
              </v-col>
              <v-col cols="12" class="text-center justify-center">
                <v-img src="/image/title.png" max-width="200" class="text-center" max-height="200" cover></v-img>
              </v-col>
            </v-row>
          </v-card-item>
        </v-sheet>
      </v-col>
      <!--      title end-->

      <!--      recent note start-->
      <v-col cols="12" class="pt-10 align-content-start">
        <v-row>
          <v-col cols="12">
            <v-divider></v-divider>
            <v-chip class="mb-5" color="primary" variant="elevated">최신 포스트</v-chip>
            <PostCard type="small"></PostCard>
          </v-col>
          <v-divider class="my-2"></v-divider>
          <v-col cols="12">
            <v-divider></v-divider>
            <v-chip class="mb-5" color="primary" variant="elevated">추천 포스트</v-chip>
            <v-row>
              <v-col cols="12">
                <PostCard type="small"></PostCard>
              </v-col>
              <v-divider class="my-2"></v-divider>
              <v-col cols="12">
                <PostCard type="small"></PostCard>
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

const items = Array.from({ length: 6 }, (_, i) => i);
</script>

<style scoped>

</style>