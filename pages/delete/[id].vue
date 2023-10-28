<template>
  <client-only>
    <v-container class="fill-height fluid d-flex align-content-center justify-center text-center">
      <v-row v-if="isUploading" class="align-content-center justify-center text-center">
        <v-col cols="8">
          <v-progress-circular indeterminate :size="128" :width="12"></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-if="!isUploading" class="align-content-center justify-center text-center">
        <v-col cols="12">
          <p class="text-h3">{{ post.title }}({{ postId }})를 정말로 삭제하시겠습니까?</p>
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="12">
          <v-btn @click.stop="rmPost" color="danger">ㄱㄱㄱ</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn @click.stop="goPage('/')">홈으로</v-btn>
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
  </client-only>
</template>

<script setup lang="ts">
import type {PostResponse} from "~/utils/api-response";

const route = useRoute();
const postId = route.params.id
import Markdown from 'vue3-markdown-it';
import {getPost, deletePost} from "~/api/post";

const post:PostResponse = await getPost(postId).then((res) => {
  if(res===null){
    throw showError({
      statusCode: 404,
      fatal: true,
      message: "해당 포스트가 없습니다."
    })
  }
  console.log(res)
  return res
});

definePageMeta({
  requiresAuth:true,
  layout: 'editor',
})

const errorMsg = ref('');
const raiseError = ref(false);
const isUploading = ref(false);

const router = useRouter();
const goPage = (target:string) => {
  router.push({path: target})
}

const rmPost = async () => {
  isUploading.value = true;
  const data = await deletePost(postId);

  if(typeof data === 'string'){
    raiseError.value = true;
    errorMsg.value = data;
    isUploading.value = false;
  } else {
    isUploading.value = false;
    goPage('/')
  }
}
</script>

<style scoped>

</style>