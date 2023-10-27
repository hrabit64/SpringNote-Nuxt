<template>
  <client-only>
    <v-container class="fill-height fluid d-flex">
      <v-row v-if="isUploading" class="align-content-center justify-center text-center">
        <v-col cols="8">
          <v-progress-circular indeterminate :size="128" :width="12"></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-if="!isUploading" class="align-content-center justify-center text-center">
        <v-col cols="12">
          <h1>이미지 업로드</h1>
        </v-col>
        <v-col cols="12">
          <v-btn @click.stop="upload">업로드</v-btn>
        </v-col>
        <v-col cols="12">
          <v-file-input
              label="이미지 업로드"
              show-size
              :multiple="false"
              accept="image/*"
              variant="filled"
              v-model="img"
              prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <p class="my-4">업로드 된 이미지 주소</p>
          <p class="my-4">{{ imgURL }}</p>
          <v-btn class="my-4" v-if="imgURL" @click.stop="copy">복사하기</v-btn>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <p class="my-4">히스토리</p>
          <v-list-item
              v-for="url in imgUrls"
              :key="url"
              :title="url"
          ></v-list-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mx-2 my-2">
          <v-spacer></v-spacer>
          <v-snackbar color="primary"
                      v-model="raiseError "
                      :timeout="10000"
                      v-if="raiseError "
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
<script setup>
import {uploadImage} from "~/api/image";
import {createUrl} from "~/utils/api-utils";


definePageMeta({
  requiresAuth: true,
  layout: 'editor',
})
const img = ref(null);
const imgURL = ref('');
const isUploading = ref(false);
const imgUrls = ref([]);
const errorMsg = ref('');
const raiseError = ref(false);



const upload = async () => {
  isUploading.value = true;

  const formData = new FormData();

  if (img.value === null || img.value === '') {
    raiseError.value = true;
    errorMsg.value = '이미지를 선택해주세요.'
    isUploading.value = false;
    return;
  }

  formData.append('file', img.value[0]);


  const res = await uploadImage(formData);
  if (typeof res === 'string') {
    errorMsg.value = res;
    isUploading.value = false;
    raiseError.value = true;
  } else {
    const url = createUrl("/api/v1/image/" + res.id)
    imgURL.value = url;
    imgUrls.value.push(url);
    isUploading.value = false;
  }
}
const copy = async () => {
  try {
    await navigator.clipboard.writeText(imgURL.value);
    console.log('Content copied to clipboard');
    raiseError.value = true;
    errorMsg.value = '복사 성공'
    isUploading.value = false;
  } catch (err) {
    console.error('Failed to copy: ', err);
    raiseError.value = true;
    errorMsg.value = '복사 실패'
    isUploading.value = false;
  }
}
</script>
<style scoped>

</style>