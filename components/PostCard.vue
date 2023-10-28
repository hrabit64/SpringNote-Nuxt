<template>
  <v-card class="rounded-lg bg-transparent" elevation="0" >
    <v-card-title>
      <v-img src="https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_1280.jpg" cover class="rounded-lg elevation-3" max-height="200" max-weight="200">
      </v-img>
    </v-card-title>
    <v-card-text>
      <v-row class="pa-2 my-2">
        <v-col cols="12">
          <p class="nanumsquare-bold"><v-icon>mdi-calendar-range</v-icon> {{ (props.createAt) ? props.createAt.slice(0,10) : "알 수 없음"}}</p>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <v-hover>
            <NuxtLink
                class="text-left text-subtitle-1 nanumsquare-bold  text-info overflow-x-hidden"
                href="http://localhost:8080"
                style="text-decoration-line:none"
                :to="'/series/'+props.seriesId"
            >
              시리즈 | {{ props.series }}
            </NuxtLink>
          </v-hover>

        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <NuxtLink class="text-left text-subtitle-1 nanumsquare-bold text-white overflow-x-hidden"
             href="http://localhost:8080"
             style="text-decoration:none"
                    :to="'/view/'+props.postId"
          >

            {{ props.title }}
          </NuxtLink>
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
  createAt:{
    type: String,
    required: true
  }
})

const url = ref('/view/' + props.postId)
</script>

<style scoped>
</style>