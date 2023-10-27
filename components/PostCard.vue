<template>
  <v-card class="rounded-lg" elevation="3" color="grey-darken-4" >
    <v-card-title>
      <v-img src="https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_1280.jpg" cover class="rounded-lg elevation-3" max-height="200" max-weight="200">
      </v-img>
    </v-card-title>
    <v-card-text>
      <v-row class="pa-2 my-2">
        <v-col cols="12">
          <p class="nanumsquare-bold"><v-icon>mdi-calendar-range</v-icon> 2023.03.02</p>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <v-btn variant="text" class="ma-0 pa-0">
            <h1 class="text-subtitle-2 nanumsquare-bold text-info">시리즈 | {{ cutString("Spring Boot 블로그 개발 프로젝트 2131 123123 123 12",40) }}</h1>
          </v-btn>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" >
          <v-btn variant="text" class="ma-0 pa-0">
            <h1 class="text-subtitle-1 nanumsquare-bold text-white">{{ cutString("Spring Boot + ZMQ로 MSA 시스템 연동을 해보자 1 11",40) }}</h1>
          </v-btn>
        </v-col>
        <v-divider></v-divider>
      </v-row>
    </v-card-text>
    <v-row>
      <v-col cols="12">


      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>

  </v-card>
</template>

<script setup lang="ts">
import {cutString} from "~/utils/vue-utlis";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  seriesId: {
    type: Number,
    required: true
  },
  postId: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'default'
  },

})

const url = ref('/view/' + props.postId)
</script>

<style scoped>
</style>