<template>
  <span class="bg"></span>
  <v-container class="h-100" v-motion-slide-left>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="8">
        <client-only>

          <v-card class="rounded-lg elevation-3 mt-10">

            <v-card-item>
              <v-row class="align-center justify-center mt-10">
                <v-col lg="10" md="8" sm="12">
                  <v-row v-if="!isLoading">
                    <v-col cols="12">
                      <v-infinite-scroll :items="posts" :onLoad="load">
                        <template v-for="(item, index) in posts" :key="item.postId">
                          <v-col md="12" sm="12" lg="12">
                            <PostCard
                                :post-id="item.postId"
                                :title="item.title"
                                :thumbnail="item.thumbnail"
                                :series="item.series"
                                :series-id="item.seriesId"
                                :create-at="item.createAt"
                            ></PostCard>
                          </v-col>
                        </template>
                      </v-infinite-scroll>
                    </v-col>

                  </v-row>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </client-only>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row v-if="isLoading" class="align-content-center justify-center text-center">
      <v-col cols="8">
        <v-progress-circular indeterminate :size="128" :width="12"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mx-2 my-2">
        <v-spacer></v-spacer>
        <v-snackbar color="primary"
                    v-model="raiseError"
                    :timeout="10000"
                    v-if="raiseError"
                    multi-line
        >
          {{ errorMsg }}

          <template v-slot:actions>
            <v-btn
                color="secondary"
                variant="text"
                @click="raiseError = false"
            >
              <v-icon>mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
import {getAllPost} from "~/api/post";
import {VInfiniteScroll} from 'vuetify/labs/VInfiniteScroll'
import axios from "axios";

const isLoading = ref(true)
const raiseError = ref(false)
const errorMsg = ref('')

const posts = ref([])
let nextUrl = null
let isEnd = false

const initPost = async () => {
  const data = await getAllPost(8)
  if (data === null) {
    raiseError.value = true
    errorMsg.value = '포스트를 불러오는데 실패했습니다.'
    isLoading.value = false
  } else {
    data._embedded.post_items.forEach((item) => {
      posts.value.push({
        postId: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        series: item.series.title,
        seriesId: item.series.id,
        createAt: item.created_at
      })
    })
    if (data._links.next === undefined) {
      isEnd = true
    } else {
      nextUrl = data._links.next
    }
    console.log(nextUrl)
    isLoading.value = false
  }
}

onMounted(async () => {
  await initPost()
})

async function load({done}) {
  if (isEnd) {
    done('empty')
  } else {
    const data = await axios.get(nextUrl.href)
    if (data.status !== 200) {
      raiseError.value = true
      errorMsg.value = '포스트를 불러오는데 실패했습니다.'
    } else {
      data.data._embedded.post_items.forEach((item) => {
        posts.value.push({
          postId: item.id,
          title: item.title,
          thumbnail: item.thumbnail,
          series: item.series.title,
          createAt: item.created_at,
          seriesId: item.series.id
        })
      })
      if (data.data._links.next === undefined) {
        isEnd = true
      } else {
        nextUrl = data.data._links.next
      }
    }
    done('ok')
  }

}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('/image/posts.jpg');
  background-color: black;
  transform: scale(1.1);
  z-index: -1;
}
</style>