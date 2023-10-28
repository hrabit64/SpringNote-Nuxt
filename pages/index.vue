<template>
    <span class="bg"></span>
    <v-container class="fill-height fluid d-flex" v-motion-slide-bottom>

      <v-row class="align-content-center justify-center text-center">
        <v-col cols="8">
          <v-divider></v-divider>
          <h1 class="gmarket-sans-bold text-lg-h1 text-primary d-inline">Spring</h1>
          <h1 class="gmarket-sans-bold text-lg-h1 d-inline"> Note</h1>
          <v-divider></v-divider>
          <h2 class="nanumsquare-normal text-subtitle-1 ma-2">* beta test 중. 아직 미완성입니다.</h2>
          <v-divider></v-divider>
          <h2 class="nanumsquare-normal text-subtitle-1 ma-2">스프링 백엔드 개발자를 꿈꾸는 학생의 작은 노트입니다.</h2>
          <v-divider></v-divider>
          <h2 class="gmarket-sans-medium text-subtitle-1 ma-2 text-primary">#Spring Boot&nbsp#Backend&nbsp#MSA</h2>
          <v-divider class="mb-10"></v-divider>

          <v-btn append-icon="mdi-arrow-right-bold" class="rounded-xl" size="x-large" @click.stop="goPage('/posts')" ><p class="nanumsquare-normal">전체 글 보기</p></v-btn>

        </v-col>
      </v-row>

    </v-container>
</template>

<script setup lang="ts">
const router = useRouter();
const goPage = (target:string) => {
  router.push({path: target})
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url( '/image/title3.jpg') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1.1);
  z-index: -1;
}
</style>

