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
          <h1>포스트 업로드</h1>
        </v-col>

        <v-col cols="12">
          <v-btn @click.stop="upload">업로드</v-btn>
          <p>*주의 이름이 같을 경우 수정 모드로 동작합니다.</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12">
          <v-text-field label="제목" v-model="title"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="시리즈명" v-model="series"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="썸네일 URL" v-model="thumbnail"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-file-input show-size accept=".md" label="마크다운 파일" v-model="file" :multiple="false"></v-file-input>
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

import {uploadPost} from "~/api/post";

definePageMeta({
  requiresAuth:true,
  layout: 'editor',
})
const series = ref(null);
const title = ref(null);
const thumbnail = ref(null);
const file = ref(null);
const errorMsg = ref('');
const raiseError = ref(false);
const isUploading = ref(false);

const upload = async () => {
  isUploading.value = true;

  const formData = new FormData();

  if(title.value === null || title.value === ''){
    raiseError.value = true;
    errorMsg.value = '제목을 입력해주세요.'
    isUploading.value = false;
    return;
  }

  if(series.value === null || series.value === ''){
    raiseError.value = true;
    errorMsg.value = '시리즈명을 입력해주세요.'
    isUploading.value = false;
    return;
  }

  if(thumbnail.value === null || thumbnail.value === ''){
    raiseError.value = true;
    errorMsg.value = '썸네일 URL을 입력해주세요.'
    isUploading.value = false;
    return;
  }

  if(file.value === null){
    raiseError.value = true;
    errorMsg.value = '마크다운 파일을 입력해주세요.'
    isUploading.value = false;
    return;
  }

  formData.append('title', title.value);
  formData.append('seriesName', series.value);
  formData.append('thumbnail', thumbnail.value);
  formData.append('markdownFile', file.value[0]);

  const data = await uploadPost(formData).then((res) => {
    if(typeof res === 'string'){
      raiseError.value = true;
      errorMsg.value = res;
      isUploading.value = false;
    }
    else{
      raiseError.value = true;
      errorMsg.value = "OK";
      isUploading.value = false;
    }
    return ""
  })

}

</script>
<style scoped>

</style>